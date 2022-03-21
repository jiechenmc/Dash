import React, { useState, useEffect } from "react";
export default function SpotifyInterface() {
  const [song, setSong] = useState("Fool");
  const [player, setPlayer] = useState(undefined);

  const AUTH_TOKEN =
    "BQCyKrLBsUQgBWr41tFXkF15d0kv_83VE0trPXjwCWvkpLRbEK91pR0-18lrJbA1l17vToMNrowr6dOkw84t2lNdwV1bZy1adX8Q10uTDOYfWpJPSYJ6VzTuFetixOcGcVrXx62onm0YkDMJtKWxKsWSpxnI7JMNOWpkPe6Txqt5wVSwUHvy-Ts";

  const processSong = (songID) => {
    const url = `https://api.spotify.com/v1/tracks/${songID}`;

    fetch(url, {
      headers: new Headers({ Authorization: "Bearer " + AUTH_TOKEN }),
    }).then((resp) =>
      resp.json().then((data) => {
        const songThumbnail = data.album.images.slice(0)[0].url;
        const songName = data.name;

        let artists = "";
        data.artists.forEach((a) => {
          artists += `${a.name}, `;
        });
        artists = artists.slice(0, -2);
        const songDetail = {
          cover: songThumbnail,
          artist: artists,
          name: songName,
        };

        setSong(songDetail);
      })
    );
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb) => {
          cb(AUTH_TOKEN);
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      document.getElementById("PlayButton").onclick = function () {
        player.togglePlay();
      };

      player.addListener("player_state_changed", (state) => {
        if (!state) {
          return;
        }
        console.log(state.track_window.current_track);
      });
      player.connect();
    };
  }, []);

  useEffect(() => {
    processSong("3wefloF3t1sFZx8YMFhqYB");
  }, []);

  const { cover, artist, name } = song;

  const handleOnPlay = () => {
    document.getElementById("PlayButton").classList.toggle("bi-play-circle");
  };

  return (
    <div className="flex flex-row gap-1">
      <figure>
        <img src={cover} className="w-40 h-40" alt="Song Cover" />
        <figcaption className="text-xl text-center">{name}</figcaption>
        <figcaption className="text-sm text-center">{artist}</figcaption>
      </figure>
      <span id="Controls" className="flex flex-row">
        <button className="bi-shuffle text-5xl" />
        <button className="bi-skip-start text-5xl" />
        <button
          id="PlayButton"
          className="bi-play-circle bi-pause-circle text-5xl"
          onClick={handleOnPlay}
        />
        <button className="bi-skip-end text-5xl" />
        <button className="bi-arrow-repeat text-5xl" />
        <button className="bi-volume-up text-5xl" />
      </span>
    </div>
  );
}
