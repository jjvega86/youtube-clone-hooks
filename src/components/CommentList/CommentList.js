import React from "react";
import Comment from "../Comment/Comment";

const CommentList = ({ comments }) => {
  let renderedComments = comments.map((comment, index) => {
    return (
      <Comment
        key={index}
        videoId={comment.videoId}
        text={comment.text}
        likes={comment.likes}
        dislikes={comment.dislikes}
      />
    );
  });
  return renderedComments;
};

export default CommentList;
