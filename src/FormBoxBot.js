import React from "react";
import AssignmentWidget from "./widgets/AssignmentWidget";
import LocationWidget from "./widgets/LocationWidget";
import LoginWidget from "./widgets/LoginWidget";

export default function FormBoxBot() {
  return (
    <div id="FormBoxBot">
      <AssignmentWidget></AssignmentWidget>
      <LocationWidget></LocationWidget>
      <LoginWidget></LoginWidget>
    </div>
  );
}
