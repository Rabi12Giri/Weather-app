import "./App.css";
import React, { useState, useEffect } from "react";

//c64675bd5535e8e472b0a8547e7586d6

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [cityInput, setCityInput] = useState("");

  const API_ID = "c64675bd5535e8e472b0a8547e7586d6";
  const API_URL =
    "https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=" +
    API_ID;

  const getWeatherDetails = async (cityName) => {
    const API_ID = "c64675bd5535e8e472b0a8547e7586d6";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather?";

    const response = await fetch(`${API_URL}q=${cityName}&appid=${API_ID}`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    setWeatherData(data);
  };

  const handleSearch = () => {
    getWeatherDetails(cityInput);
  };

  const handleChangeInput = (e) => {
    // console.log("value is changing", e.target.value);
    setCityInput(e.target.value);
  };

  useEffect(() => {
    getWeatherDetails("delhi");
  }, []);

  return (
    <div className="container">
      <div className="weather-header">
        <h1 className="header">Weather Application </h1>
      </div>
      <div className="weather-details">
        <div className="Search Weather">
          <h2>Search weather</h2>
        </div>
        <input
          type="search"
          placeholder="search weather"
          onChange={handleChangeInput}
          value={cityInput}
        />
        <button
          type="button"
          className="search-weather-button"
          onClick={handleSearch}
        >
          Search
        </button>
        <div className="weather-details-2">
          <div className="weather-city">
            <h2>Location name: {weatherData?.name}</h2>
          </div>

          <div className="weather-temp">
            <h2>
              Temperature in celcius:{" "}
              {(weatherData?.main?.temp - 273.15).toFixed(2)} celcius
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
