import React, { useState } from "react";
import Settings from "./HeadBar/Settings";
import Time from "./HeadBar/Time";

export default function HeadBar() {
  return (
    <div className="grid grid-cols-4 bg-neutral-700 text-white text-mono">
      <Time />
      <Settings />
    </div>
  );
}
