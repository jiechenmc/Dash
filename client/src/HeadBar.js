import React from "react";
import Settings from "./HeadBar/Settings";
import Time from "./HeadBar/Time";

export default function HeadBar() {
  return (
    <div className="inline-flex gap-2 bg-neutral-700 text-white text-mono">
      <Time />
      <Settings />
    </div>
  );
}
