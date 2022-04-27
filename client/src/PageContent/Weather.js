import React, { useState, useRef, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import useWeatherData from "./useFetch";

export default function Weather() {
  const [city, setCity] = useState("Stony Brook");
  const [weather, setWeather] = useState("Sunny");
  const [temperature, setTemperature] = useState("53.6");
  const inputElement = useRef(null);
  const wdata = useWeatherData(city);

  useEffect(() => {
    // checking if it's undefined fixes the crash
    if (wdata !== undefined) {
      console.log(wdata);
      setTemperature(wdata.main.temp);
      setWeather(wdata.weather[0].main);
    }
  }, [city]);

  const onButtonClick = () => {
    const userInput = inputElement.current.value;
    setCity(userInput);
  };

  const props_list = {
    city,
    weather,
    temperature,
  };

  return (
    <div className="text-center">
      <label class="block text-gray-700 text-lg font-bold" for="city">
        City
      </label>
      <input
        ref={inputElement}
        className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 mr-2"
        id="city"
        type="text"
        placeholder="City"
      />
      <button
        onClick={onButtonClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-mono "
        type="button"
      >
        Search
      </button>
      <WeatherCard {...props_list} />
    </div>
  );
}
