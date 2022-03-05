import React from "react";
import AssignmentWidget from "./widgets/AssignmentWidget";
import DiceWidget from "./widgets/Dice";
import SettingsWidget from "./widgets/SettingsWidget";

export default function FormBoxBot() {
  return (
    <div id="FormBoxBot">
      <AssignmentWidget></AssignmentWidget>
      <DiceWidget></DiceWidget>
      <SettingsWidget></SettingsWidget>
    </div>
  );
}
