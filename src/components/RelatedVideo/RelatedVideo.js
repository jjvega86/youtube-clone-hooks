import React from "react";

const RelatedVideo = ({ title, thumbnail, channelTitle }) => {
  return (
    <div>
      <img src={`${thumbnail}`} alt="video thumbnail" />
      <p>{title}</p>
      <p>{channelTitle}</p>
    </div>
  );
};

export default RelatedVideo;
