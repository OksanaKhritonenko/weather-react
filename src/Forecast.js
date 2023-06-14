import React, { useState, useEffect } from "react";
import "./Forecast.css";
import ForecastDay from "./ForcastDay";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data.city]);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row mb-4 mt-4">
          <div className="col-2">
            <ForecastDay data={forecast[0]} />
          </div>
          <div className="col-2 ">
            <ForecastDay data={forecast[1]} />
          </div>
          <div className="col-2 ">
            <ForecastDay data={forecast[2]} />
          </div>
          <div className="col-2 ">
            <ForecastDay data={forecast[3]} />
          </div>
          <div className="col-2 ">
            <ForecastDay data={forecast[4]} />
          </div>
          <div className="col-2 ">
            <ForecastDay data={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `ab8fcfae42fbe1t26ac753doe7000fbb`;
    let city = props.data.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    // console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
