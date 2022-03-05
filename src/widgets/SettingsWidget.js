import React from "react";
import Draggable from "react-draggable";

export default function SettingWidget() {
  return (
    <Draggable>
      <div id="SettingsWidget" className="widgets">
        <i className="bi-gear"></i>
        <p className="centerText">Settings</p>
      </div>
    </Draggable>
  );
}
