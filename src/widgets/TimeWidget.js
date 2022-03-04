import React from "react";

export default function TimeWidget() {
  const parseTime = () => {
    const timeOfDay = date.getHours() - 12 < 0 ? "AM" : "PM";
    const hours = timeOfDay === "PM" ? date.getHours() - 12 : date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds} ${timeOfDay}`;
  };

  const date = new Date();
  const today = date.toDateString();
  const time = parseTime();

  return (
    <div id="TimeWidget" class="widgets">
      <i class="bi-clock"></i>
      <p class="centerText">
        {today}
        <br></br>
        <small>{time}</small>
      </p>
    </div>
  );
}
