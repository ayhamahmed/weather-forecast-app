const API_KEY = '74d84ec4f593443a9d001104260903';
const API_BASE = 'https://api.weatherapi.com/v1/current.json';

const searchForm = document.getElementById('searchForm');
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error');
const weatherCard = document.getElementById('weatherCard');

// DOM elements for weather data
const cityNameEl = document.getElementById('cityName');
const weatherConditionEl = document.getElementById('weatherCondition');
const weatherIconEl = document.getElementById('weatherIcon');
const temperatureEl = document.getElementById('temperature');
const feelsLikeEl = document.getElementById('feelsLike');
const humidityEl = document.getElementById('humidity');
const windSpeedEl = document.getElementById('windSpeed');

function showLoading(show) {
  loadingEl.classList.toggle('hidden', !show);
}

function showError(message) {
  errorEl.textContent = message;
  errorEl.classList.remove('hidden');
  weatherCard.classList.add('hidden');
}

function hideError() {
  errorEl.classList.add('hidden');
}

function showWeather(data) {
  hideError();
  weatherCard.classList.remove('hidden');

  const { location, current } = data;
  cityNameEl.textContent = `${location.name}, ${location.country}`;
  weatherConditionEl.textContent = current.condition.text;
  weatherIconEl.src = current.condition.icon.startsWith('http') ? current.condition.icon : `https:${current.condition.icon}`;
  weatherIconEl.alt = current.condition.text;

  temperatureEl.textContent = Math.round(current.temp_c);
  feelsLikeEl.textContent = `Feels like ${Math.round(current.feelslike_c)}°C`;
  humidityEl.textContent = `${current.humidity}%`;
  windSpeedEl.textContent = `${current.wind_kph} km/h`;
}

async function fetchWeather(city) {
  const url = `${API_BASE}?key=${API_KEY}&q=${encodeURIComponent(city)}`;

  const response = await fetch(url);
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const msg = data.error?.message || data.message;
    if (data.error?.code === 1006 || msg?.includes('No location found')) {
      throw new Error('City not found. Please check the spelling and try again.');
    }
    if (response.status === 401 || data.error?.code === 2006) {
      throw new Error('Invalid API key. Please check your configuration.');
    }
    throw new Error(msg || 'Unable to fetch weather data. Please try again later.');
  }

  return data;
}

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const city = cityInput.value.trim();
  if (!city) {
    showError('Please enter a city name.');
    return;
  }

  showLoading(true);
  hideError();
  weatherCard.classList.add('hidden');

  try {
    const data = await fetchWeather(city);
    showWeather(data);
  } catch (err) {
    showError(err.message);
  } finally {
    showLoading(false);
  }
});
