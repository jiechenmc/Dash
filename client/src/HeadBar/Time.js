import React from "react";
import useTime from "./useTime";
import TimeCompact from "./TimeViews/TimeCompact";
import TimeComfort from "./TimeViews/TimeComfort";

export default function Time({ isCompact }) {
  const [today, time] = useTime();

  const props_list = {
    time,
    today,
  };

  return (
    <div className="">
      {isCompact ? (
        <TimeCompact {...props_list} />
      ) : (
        <TimeComfort {...props_list} />
      )}
    </div>
  );
}
