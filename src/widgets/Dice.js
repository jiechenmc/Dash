import React from "react";
import Draggable from "react-draggable";

export default function DiceWidget() {
  return (
    <Draggable>
      <div id="DiceWidget" className="widgets">
        <i className="bi-dice-1"></i>
        <p className="centerText">Roll a dice?</p>
      </div>
    </Draggable>
  );
}
