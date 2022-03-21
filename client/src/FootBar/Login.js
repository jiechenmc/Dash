import React, { useState } from "react";

const client_id = process.env.REACT_APP_client_id;
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;
export default function Login() {
  return (
    <div className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
      <a href={AUTH_URL}>Login with Spotify</a>
    </div>
  );
}
