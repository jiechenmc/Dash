import React from "react";

export default function Github() {
  const handleOnClick = () => {
    window.open("https://github.com/jiechenmc/dash", "_blank");
  };
  return (
    <div className="absolute right-0 bg-neutral-800 text-center w-20 h-10">
      <button
        className="w-full h-full"
        onClick={handleOnClick}
        title="View Source!"
      >
        <i className="bi-github text-xl"></i>
      </button>
    </div>
  );
}
