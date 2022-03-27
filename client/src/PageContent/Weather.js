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
    <div className="mt-2">
      <label class="block text-gray-700 text-sm font-bold" for="city">
        City
      </label>
      <input
        ref={inputElement}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
        id="city"
        type="text"
        placeholder="City"
      />
      <button
        onClick={onButtonClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-mono"
        type="button"
      >
        Search
      </button>
      <WeatherCard {...props_list} />
    </div>
  );
}
