import React from "react";
import RelatedVideo from "../RelatedVideo/RelatedVideo";

const RelatedVideos = ({ videos }) => {
  const renderedVideos = videos.map((video) => {
    if (video.snippet) {
      return (
        <RelatedVideo
          key={video.id.videoId}
          thumbnail={video.snippet.thumbnails.default.url}
          title={video.snippet.title}
          channelTitle={video.snippet.channelTitle}
        />
      );
    } else {
      return null;
    }
  });
  return renderedVideos;
};

export default RelatedVideos;
