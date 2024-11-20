import React, { useState, useEffect } from 'react';
import WeatherList from "./components/WeatherList/WeatherList";
import SearchForm from "./components/SearchForm/SearchForm";
import './App.css';

const App = () => {
  const [city, setCity] = useState('Getafe'); 
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Error. Mete otra ciudad");
      }

      const data = await response.json();
      if (data && data.list) {
        setWeatherData(data.list);
      } else {
        setWeatherData([]);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city); // vuelve hacer la llama a la API si cambias la ciudad
  }, [city]);

  const handleCityChange = (newCity) => {
    setCity(newCity); // Cambia la ciudad seleccionada
  };

  return (
    <div>
      <h1>Previsión del tiempo</h1>
      <SearchForm onCityChange={handleCityChange} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && weatherData.length > 0 && (
        <WeatherList weatherData={weatherData} />
      )}
      {!loading && !error && weatherData.length === 0 && (
        <p>No hay datos meteorológicos disponibles</p>
      )}
    </div>
  );
};

export default App;
