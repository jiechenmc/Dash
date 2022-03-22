import React, { useState, useEffect } from "react";

export default function useTime() {
  const [date, setDate] = useState(new Date());

  const parseTime = () => {
    const timeOfDay = date.getHours() - 12 < 0 ? "AM" : "PM";
    let hours =
      date.getHours() - 10 < 0 ? "0" + date.getHours() : date.getHours() - 12;
    if (hours === "00") hours = 12;
    const minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
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
}
