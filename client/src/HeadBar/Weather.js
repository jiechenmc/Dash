import React, { useState } from "react";
import WeatherComfort from "./WeatherViews/WeatherComfort";
import WeatherCompact from "./WeatherViews/WeatherCompact";

export default function Weather({ isCompact }) {
  const [city, setCity] = useState("Stony Brook");
  const [weather, setWeather] = useState("Sunny");
  const [temperature, setTemperature] = useState("53.6°F|12°C");

  const props_list = {
    city,
    weather,
    temperature,
  };

  return (
    <div>
      {isCompact ? (
        <WeatherCompact {...props_list} />
      ) : (
        <WeatherComfort {...props_list} />
      )}
    </div>
  );
}
