// VideoBackground.js
import React from "react";
import ReactPlayer from "react-player";

const VideoBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-10] opacity-90">
      <div className="absolute top-0 left-0 w-full h-full object-cover">
        {/* <ReactPlayer
          url="bg.mp4"
          playing
          loop
          muted
          width="100%"
          height="100%"
          className="object-cover"
        /> */}
        <video src="bg.mp4" loop muted autoPlay></video>
      </div>
    </div>
  );
};

export default VideoBackground;
