import React, { useState, useEffect } from "react";
import axios from "axios";

import { apiKey } from "./apiKey";

import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

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

  useEffect(() => {
    fetchYouTubeVideos("starwars");
  }, []);

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
  return (
    <div>
      <VideoPlayer
        videoId={currentVideo.id.videoId}
        title={currentVideo.snippet.title}
        description={currentVideo.snippet.description}
      />
    </div>
  );
};

export default App;
