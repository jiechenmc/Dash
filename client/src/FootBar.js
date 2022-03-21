import React from "react";
import Login from "./FootBar/Login";
import SpotifyInterface from "./FootBar/SpotifyInterface";
const code = new URLSearchParams(window.location.search).get("code");

export default function FootBar() {
  return (
    <div className="flex flex-row bg-neutral-700 text-white text-mono absolute bottom-0 inset-x-0 justify-center items-center">
      {code ? <SpotifyInterface code={code} /> : <Login />}
    </div>
  );
}
