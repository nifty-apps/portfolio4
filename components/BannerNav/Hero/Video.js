import React, { useState } from "react";
import YouTube from "react-youtube";
import useStyles from "./hero-style";

function Video() {
  const [player, setPlayer] = useState([]);

  const { classes } = useStyles();

  const opts = {
    height: "720",
    width: "1080",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      origin: "http://localhost:3001",
    },
  };

  const _onEnd = (event) => {
    const currentTime = event.target.getCurrentTime();
    if (currentTime < 20) {
      event.target.playVideo();
    } else {
      event.target.pauseVideo();
    }
  };

  const _onReady = (event) => {
    player.push(event.target);
    setPlayer(player);
  };

  return (
    <div className={classes.video}>
      <YouTube
        videoId="i9mywYB4fYY"
        opts={opts}
        onReady={_onReady}
        onEnd={_onEnd}
      />
    </div>
  );
}

export default Video;
