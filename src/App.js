import React, { useState, useEffect } from "react";

import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  const [currentVideo, setCurrentVideo] = useState("M7lc1UVf-VE");

  useEffect(() => {}, []);

  const fetchYouTubeVideos = (searchTerm) => {
    try {
    } catch (error) {}
  };
  return (
    <div>
      <VideoPlayer videoId={currentVideo} />
    </div>
  );
};

export default App;
