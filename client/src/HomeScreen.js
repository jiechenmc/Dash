import React from "react";
import HeadBar from "./HeadBar";
import Content from "./Content";
import Settings from "./Settings";
export default function HomeScreen() {
  return (
    <div className="grid grid-row-3 ">
      <HeadBar />
      <Settings />
      <Content />
    </div>
  );
}
