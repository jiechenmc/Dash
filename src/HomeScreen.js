import React from "react";
import Taskbar from "./TaskBar";

export default function HomeScreen() {
  return (
    <>
      <p className="announcement">Widgets are draggable!</p>
      <p className="announcement">
        More Features and Styling changes are coming!
      </p>
      <Taskbar></Taskbar>
    </>
  );
}
