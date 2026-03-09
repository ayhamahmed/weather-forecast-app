# Weather Forecast Web App

A simple, practical weather app built with vanilla HTML, CSS, and JavaScript. Enter a city name to see current weather information including temperature, conditions, humidity, and wind speed.

**[Live Demo](https://ayhamahmed.github.io/weather-forecast-app/)**

## Features

- **City search** – Enter any city name and get instant results
- **Current weather display** – Temperature, weather condition, humidity, wind speed
- **Responsive design** – Works on desktop and mobile
- **REST API** – Uses WeatherAPI.com

## Technologies

- HTML
- CSS
- JavaScript (vanilla)
- WeatherAPI.com REST API

## How to Run

1. Clone or download this project
2. Double-click `index.html` or drag it into your browser to open it

## API Setup

This project uses the [WeatherAPI.com Current Weather API](https://www.weatherapi.com/docs/). An API key is already configured. For your own projects:

1. Sign up at [WeatherAPI.com](https://www.weatherapi.com/signup.aspx)
2. Get your API key from your [account dashboard](https://www.weatherapi.com/login.aspx)
3. Replace the key in `js/script.js` line 1

> **Note:** For production apps, avoid exposing API keys in client-side code. Use a backend proxy to make API requests instead.

## Project Structure

```
weather-forcast-app/
├── index.html       # Main HTML structure
├── css/
│   └── styles.css   # Styling
├── js/
│   └── script.js    # API logic and DOM updates
└── README.md        # Documentation
```

## Future Enhancements (Advanced Version)

- React + Tailwind CSS
- Axios for HTTP requests
- Multi-day forecast
- Geolocation for current location
- Unit toggle (Celsius/Fahrenheit)
