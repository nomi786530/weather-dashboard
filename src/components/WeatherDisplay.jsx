import React from 'react';
import './WeatherDisplay.css';

function WeatherDisplay({ data }) {
  const { name, main, weather } = data;
  const weatherIcon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img
        src={weatherIcon}
        alt={weather[0].description}
        className="weather-icon"
      />
      <p className="temperature">{Math.round(main.temp)}°C</p>
      <p>{weather[0].description}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Pressure: {main.pressure} hPa</p>
    </div>
  );
}

export default WeatherDisplay;
