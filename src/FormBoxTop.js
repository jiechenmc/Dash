import React from "react";
import TimeWidget from "./widgets/TimeWidget";
import WeatherWidget from "./widgets/WeatherWidget";

export default function FormBoxTop() {
  return (
    <div id="FormBoxTop">
      <TimeWidget></TimeWidget>
      <WeatherWidget></WeatherWidget>
    </div>
  );
}
