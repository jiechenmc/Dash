import React, { useEffect, useState } from "react";

export default function Time() {
  const parseTime = () => {
    const timeOfDay = date.getHours() - 12 < 0 ? "AM" : "PM";
    const hours =
      date.getHours() - 10 < 0 ? "0" + date.getHours() : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    return `${hours}:${minutes} ${timeOfDay}`;
  };

  const [date, setDate] = useState(new Date());

  // This useEffect hook only runs once when the component mounts
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const today = date.toDateString();
  const time = parseTime();

  return (
    <div className="flex flex-row gap-1">
      {/* Compact View */}

      {/* <i className="bi-clock text-xl"></i>
      <p className="text-xl">{today}</p>
      <p className="text-sm">{time}</p> */}

      {/* Comfort View */}
      <i className="bi-clock text-xl"></i>
      <span id="TimeCard">
        <p className="text-xl">{today}</p>
        <p className="text-sm">{time}</p>
      </span>
    </div>
  );
}
