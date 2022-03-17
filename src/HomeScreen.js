import React from "react";
import Taskbar from "./TaskBar";

export default function HomeScreen() {
  return (
    <>
      <p className="announcement">Widgets are draggable!</p>
      <Taskbar></Taskbar>
    </>
  );
}
