import React from "react";

export default function Github() {
  const handleOnClick = () => {
    window.open("https://github.com/jiechenmc/dash", "_blank");
  };
  return (
    <div className="flex">
      <button
        onClick={handleOnClick}
        className="w-full bg-neutral-800"
        title="View Source!"
      >
        <i className="bi-github text-xl"></i>
      </button>
    </div>
  );
}
