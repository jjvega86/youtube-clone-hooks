import React from "react";
import Reply from "../Reply/Reply";

const ReplyList = ({ replies }) => {
  let renderedReplies = replies.map((reply, index) => {
    return <Reply key={index} text={reply.text} />;
  });
  return renderedReplies;
};

export default ReplyList;
