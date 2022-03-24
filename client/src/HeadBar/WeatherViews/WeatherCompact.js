import React from "react";

export default function WeatherCompact({ city, weather, temperature }) {
  return (
    <div className="flex flex-row gap-1">
      <i className="bi-cloud text-xl"></i>
      <p className="text-xl">{city}</p>
      <p className="text-sm">{weather}</p>
      <p className="text-sm">{temperature}</p>
    </div>
  );
}
