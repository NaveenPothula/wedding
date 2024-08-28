import React from "react";

const VideoPlayer: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-2 max-w-2xl mx-auto bg-white rounded-xl shadow-md">
      <div
        className="relative w-full overflow-hidden"
        style={{ paddingTop: "56.25%" }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/4MSEFae0Y_U?rel=0&si=k-E5NSaFkHwM1QSV"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
