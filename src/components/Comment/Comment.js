import React, { useState, useEffect } from "react";
import ReplyList from "../ReplyList/ReplyList";
import ReplyForm from "../ReplyForm/ReplyForm";
import axios from "axios";

const Comment = ({ commentId, text, likes, dislikes, getComments }) => {
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

  const applyLike = async () => {
    try {
      await axios.patch(`http://localhost:9001/api/comments/${commentId}/like`);
      getComments();
    } catch (error) {
      console.log(error.message);
    }
  };

  const applyDislike = async () => {
    try {
      await axios.patch(
        `http://localhost:9001/api/comments/${commentId}/dislike`
      );
      getComments();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="card border-secondary mt-3">
      <div className="card-body lead">{text}</div>
      <p>
        <button onClick={applyLike}>+ </button>
        {likes}
      </p>
      <p>
        <button onClick={applyDislike}>-</button>
        {dislikes}
      </p>
      <ReplyList replies={replies} />
      <ReplyForm postReply={postReply} />
    </div>
  );
};

export default Comment;
