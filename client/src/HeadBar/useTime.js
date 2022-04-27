import React, { useState, useEffect } from "react";

const useTime = () => {
  const [date, setDate] = useState(new Date());

  const parseTime = () => {
    const timeOfDay = date.getHours() - 12 < 0 ? "AM" : "PM";
    let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

    if (timeOfDay === "PM") hours = hours - 12;

    if (hours === 0) hours = 12;

    return `${hours}:${minutes} ${timeOfDay}`;
  };

  // This useEffect hook only runs once when the component mounts
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const today = date.toDateString();
  const time = parseTime();

  return [today, time];
};

export default useTime;
