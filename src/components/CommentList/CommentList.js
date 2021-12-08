import React from "react";
import Comment from "../Comment/Comment";

const CommentList = ({ comments }) => {
  let renderedComments = comments.map((comment) => {
    return (
      <Comment
        key={comment._id}
        commentId={comment._id}
        text={comment.text}
        likes={comment.likes}
        dislikes={comment.dislikes}
      />
    );
  });
  return renderedComments;
};

export default CommentList;
