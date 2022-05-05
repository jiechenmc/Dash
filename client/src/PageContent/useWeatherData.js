import { useState, useEffect } from "react";

const useWeatherData = (city) => {
  const API_KEY = process.env.REACT_APP_weather_key;
  const [data, setData] = useState();
  let query = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;
  useEffect(() => {
    const fetchData = async () => {
      await fetch(query).then((data) => {
        data.json().then((d) => {
          setData(d);
        });
      });
    };
    fetchData();
  }, [query]);
  return data;
};

export default useWeatherData;
