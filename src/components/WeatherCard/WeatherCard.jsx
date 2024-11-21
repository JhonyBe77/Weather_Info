import React from 'react';

const WeatherCard = ({ weatherData }) => {
  const { main, weather, dt_txt } = weatherData;
  const { temp } = main;
  const { description, icon } = weather[0];


  return (
    <article className="weather-card">
    <p>{dt_txt}</p>
    <img
      src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      alt={description}
    />
    <p>{description}</p>
    <p>{temp}°C</p>
  </article>
  );
};

export default WeatherCard;
