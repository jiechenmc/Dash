import React from "react";

export default function WeatherComfort({ city, weather, temperature }) {
  return (
    <div>
      <i className="bi-cloud text-xl"></i>
      <span id="WeatherCard">
        <p className="text-xl">{city}</p>
        <p className="text-sm">{weather}</p>
        <p className="text-sm">{temperature}</p>
      </span>
    </div>
  );
}
