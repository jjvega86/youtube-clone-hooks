import React from "react";

const Comment = ({ videoId, text, likes, dislikes }) => {
  //TODO: add fetching logic to get replies for comment
  return (
    <div>
      <p>{videoId}</p>
      <p>{text}</p>
      <p>{likes}</p>
      <p>{dislikes}</p>
    </div>
  );
};

export default Comment;
