import React from "react";
import WeatherComfort from "./WeatherViews/WeatherComfort";
import WeatherCompact from "./WeatherViews/WeatherCompact";

export default function Weather({ isCompact }) {
  const city = "Stony Brook";
  const weather = "Sunny";
  const temperature = "53.6°F|12°C";

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
