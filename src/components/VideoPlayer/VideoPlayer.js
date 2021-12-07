import React from "react";

const VideoPlayer = ({ videoId }) => {
  const videoURL = `https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`;
  return (
    <iframe
      id="ytplayer"
      type="text/html"
      width="640"
      height="360"
      src={videoURL}
      frameborder="0"
    ></iframe>
  );
};

export default VideoPlayer;
