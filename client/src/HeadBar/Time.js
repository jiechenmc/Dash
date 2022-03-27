import React from "react";
import useTime from "./useTime";
import TimeCard from "./TimeCard";

export default function Time() {
  const [today, time] = useTime();

  const props_list = {
    time,
    today,
  };

  return (
    <div className="w-fit">
      <TimeCard {...props_list} />
    </div>
  );
}
