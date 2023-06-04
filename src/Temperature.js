import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">
        Currently it is {Math.round(props.celsius)}
      </span>
      <span className="unit">°C</span>
    </div>
  );
}
