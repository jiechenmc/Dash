import React from "react";

export default function Weather() {
  const city = "Stony Brook";
  const weather = "Sunny";
  const temperature = "53.6°F|12°C";

  return (
    <div className="flex flex-row gap-1">
      {/* Compact View */}
      {/* <i className="bi-cloud text-xl"></i>
      <p className="text-xl">Stony Brook</p>
      <p className="text-sm">Sunny</p>
      <p className="text-sm">53.6°F|12°C</p> */}

      {/* Comfort View */}
      <i className="bi-cloud text-xl"></i>
      <span id="WeatherCard">
        <p className="text-xl">{city}</p>
        <p className="text-sm">{weather}</p>
        <p className="text-sm">{temperature}</p>
      </span>
    </div>
  );
}
