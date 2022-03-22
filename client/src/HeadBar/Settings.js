import React from "react";

export default function Settings({ isCompact }) {
  const currentView = isCompact ? "Compact" : "Comfort";
  return (
    <div className="flex">
      <button className="w-full" title="Compact/Comfort Views">
        <i className="bi-gear text-xl"> {currentView}</i>
      </button>
    </div>
  );
}
