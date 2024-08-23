// components/VideoComponent.js

const VideoComponent = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="relative w-full max-w-4xl">
        <video controls className="w-full h-auto rounded-lg shadow-md">
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoComponent;
