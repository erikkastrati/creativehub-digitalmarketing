import React from "react";
import YouTube from "react-youtube";
import "../YoutubeVideo/YoutubeVideo.css";
const YouTubeVideo = ({ videoId }) => {
  return (
    <div className="youtube-video">
      <YouTube videoId={videoId} className="youtube" />
    </div>
  );
};

export default YouTubeVideo;
