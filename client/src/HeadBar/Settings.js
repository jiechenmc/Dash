import React from "react";

export default function Settings({ isCompact }) {
  const currentView = isCompact ? "Compact" : "Comfort";
  return (
    <div className="flex flex-row gap-1">
      <button className="text-xl" title="Compact/Comfort Views">
        <i className="bi-gear"></i>
      </button>
      <p className="text-xl">Current View: </p>
      <p className="text-xl">{currentView}</p>
    </div>
  );
}
