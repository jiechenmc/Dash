import React, { useState } from "react";

export default function Settings() {
  const [moods, setMoods] = useState({
    Clear: "Happy",
    EverythingElse: "Sad",
  });

  const moodList = Object.keys(moods).map((mood) => {
    return (
      <li key={mood} className="text-sm">
        {mood} : {moods[mood]}
      </li>
    );
  });
  return (
    <div className="flex flex-row gap-1">
      <i className="bi-gear text-base mx-2"></i>
      <ul className="flex flex-col">{moodList}</ul>
    </div>
  );
}
