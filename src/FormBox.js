import React from "react";
import FormBoxTop from "./FormBoxTop";
import FormBoxBot from "./FormBoxBot";
export default function FormBox() {
  return (
    <div id="FormBoxContainer" className="centerElement">
      <FormBoxTop></FormBoxTop>
      <FormBoxBot></FormBoxBot>
    </div>
  );
}
