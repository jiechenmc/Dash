import React from "react";

export default function WeatherCompact({ city, weather, temperature }) {
  return (
    <div className="flex flex-row gap-1">
      <i className="bi-cloud text-xl"></i>
      <p className="text-xl">Stony Brook</p>
      <p className="text-sm">Sunny</p>
      <p className="text-sm">53.6°F|12°C</p>
    </div>
  );
}
