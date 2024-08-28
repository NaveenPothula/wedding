// components/VideoPlayer.tsx
import React from "react";

const VideoPlayer: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-2 max-w-2xl mx-auto bg-white rounded-xl shadow-md">
      <video
        className="w-full h-auto rounded-lg"
        controls
        poster="/thumbnail.jpeg"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
