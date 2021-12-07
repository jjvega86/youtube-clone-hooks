import React from "react";

const VideoPlayer = ({ videoId, title, description }) => {
  const videoURL = `https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`;
  return (
    <div>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={videoURL}
        frameborder="0"
        title={title}
      ></iframe>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </div>
  );
};

export default VideoPlayer;
