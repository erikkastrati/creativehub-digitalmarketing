import React from "react";
import YouTubeVideo from "../YoutubeVideo/YoutubeVideo";
import "../ArijanaVideoComponent/ArijanaVideoComponent.css";
import TitleComponent from "../TitleComponent/TitleComponent";

const ArijanaVideoComponent = () => {
  // Extract the video ID from the YouTube link
  const videoId = "vWZGLWZk2f4"; // Replace this with the actual video ID

  return (
    <div className="video-container">
      <TitleComponent
        title="Зошто да го избереш"
        tenXText="Creative Hub"
        successText="?"
      />
      <div className="video">
        <YouTubeVideo videoId={videoId} />
      </div>
    </div>
  );
};

export default ArijanaVideoComponent;
