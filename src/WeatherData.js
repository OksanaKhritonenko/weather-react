import React from "react";
import FormatedDate from "./FormatedDate";
import Temperature from "./Temperature";
import Icon from "./icon";
import "./WeatherData.css";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="row d-flex">
        <div className="col-3 mt-3">
          <Icon code={props.data.icon} size={60} />
        </div>
        <div className="col-3 mt-4">
          <h1>{props.data.city}</h1>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-6">
          <ul>
            <li>
              <FormatedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              <Temperature celsius={props.data.temperature} />
            </li>
          </ul>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
