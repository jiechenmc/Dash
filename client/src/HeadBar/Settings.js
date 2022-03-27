import React from "react";

export default function Settings() {
  const moods = {
    Sunny: "Happy",
    Snow: "Tired",
    Rain: "Sad",
    Thunderstorm: "Angry",
  };

  const moodList = Object.keys(moods).map((mood) => {
    return (
      <li key={mood}>
        {mood} : {moods[mood]}
      </li>
    );
  });
  return (
    <div className="flex flex-row gap-1">
      <button className="text-xl" title="Compact/Comfort Views">
        <i className="bi-gear"></i>
      </button>
      <ul className="flex flex-col">{moodList}</ul>
    </div>
  );
}
