import React from "react";
import TimeWidget from "./widgets/TimeWidget/TimeWidget";
import WeatherWidget from "./widgets/WeatherWidget/WeatherWidget";
import TodoListWidget from "./widgets/TodoListWidget/TodoList";
import DiceWidget from "./widgets/DiceWidget/DiceWidget";
import SettingsWidget from "./widgets/SettingsWidget/SettingsWidget";

export default function FormBox() {
  return (
    <div id="TaskBar">
      <TimeWidget></TimeWidget>
      <WeatherWidget></WeatherWidget>
      <TodoListWidget></TodoListWidget>
      <DiceWidget></DiceWidget>
      <SettingsWidget></SettingsWidget>
    </div>
  );
}
