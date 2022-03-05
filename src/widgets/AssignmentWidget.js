import React from "react";
import Draggable from "react-draggable";

export default function AssignmentWidget() {
  return (
    <Draggable>
      <div id="AssignmentWidget" className="widgets">
        <i className="bi-clipboard"></i>
        <p className="centerText">Assignments</p>
      </div>
    </Draggable>
  );
}
