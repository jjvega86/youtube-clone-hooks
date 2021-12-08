import React, { useState, useEffect } from "react";
import ReplyList from "../ReplyList/ReplyList";
import ReplyForm from "../ReplyForm/ReplyForm";
import axios from "axios";

const Comment = ({ commentId, text, likes, dislikes }) => {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    fetchReplies();
  }, []);

  const fetchReplies = async () => {
    try {
      let response = await axios.get(
        `http://localhost:9001/api/comments/${commentId}/replies/`
      );
      setReplies(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const postReply = async (replyText) => {
    try {
      await axios.post(
        `http://localhost:9001/api/comments/${commentId}/reply/`,
        { text: replyText }
      );
      fetchReplies();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <p>{text}</p>
      <p>{likes}</p>
      <p>{dislikes}</p>
      <ReplyList replies={replies} />
      <ReplyForm postReply={postReply} />
    </div>
  );
};

export default Comment;
