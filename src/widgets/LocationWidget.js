import React from "react";
import Draggable from "react-draggable";

export default function LocationWidget() {
  return (
    <Draggable>
      <div id="LocationWidget" className="widgets">
        <i className="bi-geo-alt"></i>
        <p className="centerText">Location</p>
      </div>
    </Draggable>
  );
}
