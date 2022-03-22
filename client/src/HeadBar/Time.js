import React from "react";
import useTime from "./useTime";

export default function Time() {
  const [today, time] = useTime();
  return (
    <div className="flex flex-row gap-1">
      {/* Compact View */}

      {/* <i className="bi-clock text-xl"></i>
      <p className="text-xl">{today}</p>
      <p className="text-sm">{time}</p> */}

      {/* Comfort View */}
      <i className="bi-clock text-xl"></i>
      <span id="TimeCard">
        <p className="text-xl">{today}</p>
        <p className="text-sm">{time}</p>
      </span>
    </div>
  );
}
