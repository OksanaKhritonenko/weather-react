import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";

export default function SearchEngine(props) {
  const [city, setCity] = useState(props.defaultCity);

  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function search(event) {
    event.preventDefault();
    handleSubmit();
  }

  function handleSubmit(event) {
    let apiKey = "6319d62dd258df6cd5093107663545ff";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Enter a city.."
            onChange={updateCity}
          />
          <button type="Submit" className="btn btn-primary">
            Search
          </button>
        </form>
        <WeatherData data={weather} />
      </div>
    );
  } else {
    handleSubmit();
    return "Searching data for your city...";
  }
}
