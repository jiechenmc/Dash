import React from "react";
import Github from "./HeadBar/Github";
import Time from "./HeadBar/Time";

export default function HeadBar() {
  return (
    <div className="inline-flex gap-2 bg-neutral-700 text-white text-mono">
      {/* Temporary message*/}
      <p className="absolute left-0 ">Spotify feature works locally</p>
      <Time />
      <Github />
    </div>
  );
}
