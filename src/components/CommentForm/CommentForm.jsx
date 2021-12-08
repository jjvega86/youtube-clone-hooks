import React, { useState } from "react";

const CommentForm = ({ postComment }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default CommentForm;
