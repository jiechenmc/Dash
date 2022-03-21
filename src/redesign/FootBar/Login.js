import React, { useState } from "react";
import SpotifyInterface from "./SpotifyInterface";

export default function Login() {
  const [isLoggedIn, setIsLoggin] = useState(false);

  return (
    <div>
      <SpotifyInterface />
    </div>
  );
}
