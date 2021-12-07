import React, { useState, useEffect } from "react";
import axios from "axios";

import { apiKey } from "./apiKey";

import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import RelatedVideos from "./components/RelatedVideos/RelatedVideos";
import SearchBar from "./components/SearchBar/SearchBar";

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
    fetchComments("abc123");
  }, [currentVideo]);

  const fetchComments = async (videoId) => {
    try {
      let response = await axios.get(
        `http://localhost:9000/api/comments/${videoId}`
      );
      console.log(response);
      setCurrentComments(response.data);
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

  const searchForVideo = (searchTerm) => {
    fetchYouTubeVideos(searchTerm);
  };

  return (
    <div>
      <SearchBar searchForVideo={searchForVideo} />
      <VideoPlayer
        videoId={currentVideo.id.videoId}
        title={currentVideo.snippet.title}
        description={currentVideo.snippet.description}
      />
      <RelatedVideos videos={relatedVideos} />
    </div>
  );
};

export default App;
