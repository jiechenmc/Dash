import React from "react";
import AssignmentWidget from "./widgets/AssignmentWidget";
import LocationWidget from "./widgets/LocationWidget";
import SettingsWidget from "./widgets/SettingsWidget";

export default function FormBoxBot() {
  return (
    <div id="FormBoxBot">
      <AssignmentWidget></AssignmentWidget>
      <LocationWidget></LocationWidget>
      <SettingsWidget></SettingsWidget>
    </div>
  );
}
