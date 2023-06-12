import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Sun</div>

          <div className="Forecast=temp">
            <span className="forecast-temp-max">25°</span>
            <span className="forecast-temp-min">14°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
