import useAuth from "./useAuth";
import SpotifyPlayer from "react-spotify-web-playback";

export default function SpotifyInterface({ code }) {
  const access_token = useAuth(code);

  return (
    <div>
      {access_token ? (
        <SpotifyPlayer
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
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
}
