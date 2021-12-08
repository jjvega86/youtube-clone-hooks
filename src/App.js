import React, { useState, useEffect } from "react";
import axios from "axios";

import { apiKey } from "./apiKey";

import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import RelatedVideos from "./components/RelatedVideos/RelatedVideos";
import SearchBar from "./components/SearchBar/SearchBar";
import CommentForm from "./components/CommentForm/CommentForm";
import CommentList from "./components/CommentList/CommentList";

//TODO: Reply, ReplyList, and form to add reply to comments
//TODO: Layout project
//TODO: Style project
//TODO: Copy project and implement Recoil for state management
//TODO: Copy project again and implement Redux for statemanagement

const App = () => {
  const [currentVideo, setCurrentVideo] = useState({
    id: {
      videoId: "Oa0pMn0tvU4",
    },
    snippet: {
      title: "LOADING",
      description: "LOADING",
    },
  });
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [currentComments, setCurrentComments] = useState([]);

  useEffect(() => {
    fetchYouTubeVideos("starwars");
  }, []);

  useEffect(() => {
    fetchRelatedVideos(currentVideo.id.videoId);
    fetchComments(currentVideo.id.videoId);
  }, [currentVideo]);

  const fetchYouTubeVideos = async (searchTerm) => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${apiKey}&part=snippet&type=video&maxResults=5`
      );
      setCurrentVideo(response.data.items[0]);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchRelatedVideos = async (videoId) => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?type=video&relatedToVideoId=${videoId}&key=${apiKey}&part=snippet`
      );
      console.log(response.data);
      setRelatedVideos(response.data.items);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchComments = async (videoId) => {
    try {
      let response = await axios.get(
        `http://localhost:9001/api/comments/${videoId}`
      );
      console.log(response);
      setCurrentComments(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const postComment = async (commentText) => {
    try {
      let response = await axios.post(`http://localhost:9001/api/comments/`, {
        text: commentText,
        videoId: currentVideo.id.videoId,
      });
      console.log(response.data);
      fetchComments(currentVideo.id.videoId);
    } catch (error) {
      console.log(error);
    }
  };

  const searchForVideo = (searchTerm) => {
    fetchYouTubeVideos(searchTerm);
  };

  const changeSelectedVideo = (videoData) => {
    let video = {
      id: {
        videoId: videoData.videoId,
      },
      snippet: {
        title: videoData.title,
        description: videoData.description,
      },
    };
    setCurrentVideo(video);
  };

  return (
    <div>
      <SearchBar searchForVideo={searchForVideo} />
      <VideoPlayer
        videoId={currentVideo.id.videoId}
        title={currentVideo.snippet.title}
        description={currentVideo.snippet.description}
      />
      <CommentForm postComment={postComment} />
      <CommentList comments={currentComments} />
      <RelatedVideos videos={relatedVideos} setVideo={changeSelectedVideo} />
    </div>
  );
};

export default App;
