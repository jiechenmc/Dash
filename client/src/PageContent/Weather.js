import React, { useState, useRef } from "react";
import WeatherCard from "./WeatherCard";

export default function Weather() {
  const [city, setCity] = useState("Stony Brook");
  const [weather, setWeather] = useState("Sunny");
  const [temperature, setTemperature] = useState("53.6°F|12°C");
  const inputElement = useRef(null);

  const onButtonClick = () => {
    const userInput = inputElement.current.value;
    console.log(userInput);
  };

  const props_list = {
    city,
    weather,
    temperature,
  };

  return (
    <div>
      <input ref={inputElement} className="bg-neutral-600"></input>
      <button onClick={onButtonClick} className="bg-neutral-500">
        Search this city
      </button>
      <WeatherCard {...props_list} />
    </div>
  );
}
