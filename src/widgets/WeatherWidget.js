import React from "react";
import Draggable from "react-draggable";

export default function WeatherWidget() {
  return (
    <Draggable>
      <div id="WeatherWidget" className="widgets">
        <i className="bi-cloud"></i>
        <p className="centerText">Weather</p>
      </div>
    </Draggable>
  );
}
