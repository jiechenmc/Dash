import React from "react";
import HeadBar from "./HeadBar";
import Content from "./Content";
import FootBar from "./FootBar";
import "./index.css";

export default function HomeScreen() {
  return (
    <>
      <HeadBar />
      <Content />
      <FootBar />
    </>
  );
}
