import React from "react";

export default function WeatherCard({ city, weather, temperature }) {
  return (
    <div className="flex flex-row gap-1 justify-center mt-20">
      <i className="bi-cloud text-2xl">
        <p className="text-xl">{city}</p>
        <p className="text-xl">{weather}</p>
        <p className="text-xl">{temperature + "°F"}</p>
      </i>
    </div>
  );
}
