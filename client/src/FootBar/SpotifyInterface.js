import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";

export default function SpotifyInterface({ code }) {
  const access_token = useAuth(code);

  return <div>{access_token}</div>;
}
