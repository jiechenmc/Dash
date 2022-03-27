import React from "react";

export default function TimeCompact({ today, time }) {
  return (
    <div className="flex flex-col mx-2 text-center">
      <p className="text-sm">{today}</p>
      <p className="text-sm">{time}</p>
    </div>
  );
}
