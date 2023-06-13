import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";

export default function SearchEngine(props) {
  const [city, setCity] = useState(props.defaultCity);

  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      condition: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
    });
  }

  function search(event) {
    event.preventDefault();
    handleSubmit();
  }

  function handleSubmit(event) {
    let apiKey = `ab8fcfae42fbe1t26ac753doe7000fbb`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={search}>
          <div className="row">
            <div className="col-6 ">
              <input
                type="search"
                className="form-control ms-4"
                placeholder="Enter a city.."
                onChange={updateCity}
              />
            </div>
            <div className="col-6">
              <div className="d-grid gap-2 d-md-flex">
                <button type="Submit" className="btn btn-primary ms-4">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
        <WeatherData data={weather} />
        <Forecast data={weather} />
      </div>
    );
  } else {
    handleSubmit();
    return "Searching data for your city...";
  }
}
