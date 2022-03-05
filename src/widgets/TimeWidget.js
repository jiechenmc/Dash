import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";

export default function TimeWidget() {
  const parseTime = () => {
    const timeOfDay = date.getHours() - 12 < 0 ? "AM" : "PM";
    const hours = timeOfDay === "PM" ? date.getHours() - 12 : date.getHours();
    const minutes = date.getMinutes();
    const seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    return `${hours}:${minutes}:${seconds} ${timeOfDay}`;
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
    <Draggable>
      <div id="TimeWidget" className="widgets">
        <i className="bi-clock"></i>
        <p className="centerText">
          {today}
          <br></br>
          <small>{time}</small>
        </p>
      </div>
    </Draggable>
  );
}
