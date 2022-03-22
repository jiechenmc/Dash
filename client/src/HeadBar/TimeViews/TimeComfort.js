import React from "react";

export default function TimeComfort({ today, time }) {
  return (
    <div className="flex flex-row gap-1">
      <i className="bi-clock text-xl"></i>
      <span id="TimeCard">
        <p className="text-xl">{today}</p>
        <p className="text-sm">{time}</p>
      </span>
    </div>
  );
}
