import React from "react";
import Login from "./FootBar/Login";
import SpotifyInterface from "./FootBar/SpotifyInterface";
const code = new URLSearchParams(window.location.search).get("code");

export default function FootBar() {
  return (
    <div className="bg-neutral-700 text-white text-mono absolute bottom-0 inset-x-0">
      {code ? <SpotifyInterface code={code} /> : <Login />}
    </div>
  );
}
