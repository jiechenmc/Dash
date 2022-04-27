import useAuth from "./useAuth";
import SpotifyPlayer from "react-spotify-web-playback";

export default function SpotifyInterface({ code, weather }) {
  // pseudo suggestion
  const access_token = useAuth(code);
  const happy = "spotify:playlist:37i9dQZF1DXdPec7aLTmlC";
  const sad = "spotify:playlist:37i9dQZF1DWSqBruwoIXkA";

  let uri = sad;

  if (weather === "Clear") uri = happy;

  return (
    <div>
      {access_token ? (
        <SpotifyPlayer
          uris={[uri]}
          token={access_token}
          persistDeviceSelection
          showSaveIcon
          syncExternalDevice
          styles={{
            activeColor: "#00FF00",
            bgColor: "#333",
            color: "#fff",
            loaderColor: "#fff",
            sliderColor: "#1cb954",
            trackArtistColor: "#ccc",
            trackNameColor: "#fff",
            sliderHeight: "1rem",
            height: "4rem",
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
}
