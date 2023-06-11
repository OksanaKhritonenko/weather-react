import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Sun</div>
          <WeatherIcon code="01d" size={36} />
          <div className="Forecast=temp">
            <span className="forecast-temp-max">25°</span>
            <span className="forecast-temp-min">14°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
