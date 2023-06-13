import React from "react";

export default function ForcastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="ForcastDay">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition}
        width="60"
      />
      <div className="Forecast-temperatures">
        <span className="Forecast-temperature-max">{maxTemperature()}</span>
        <span className="Forecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
