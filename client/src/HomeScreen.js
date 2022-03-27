import React from "react";
import HeadBar from "./HeadBar";
import Content from "./Content";
import FootBar from "./FootBar";
import Github from "./Github";

export default function HomeScreen() {
  return (
    <div className="grid grid-row-4">
      <Github />
      <HeadBar />
      <Content />
      <FootBar />
    </div>
  );
}
