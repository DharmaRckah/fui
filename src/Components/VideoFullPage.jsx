import React, { useState, useRef, useEffect } from "react";
import fullpageVido from "../assets//infrastructure/infrapagefullvideo.mp4";
import { PiPauseDuotone } from "react-icons/pi";
import { IoPlay } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const VideoFullPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Refresh AOS after component is mounted
    AOS.refresh();
  }, []);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative h-screen flex justify-center items-center">
      {/* Video element */}
      <video
        ref={videoRef}
        src={fullpageVido}
        // autoPlay
        muted
        loop
        onClick={togglePlay}
        className="absolute inset-0 w-full h-full object-cover"
      ></video>
      {/* Text overlays */}
      <div className="w-[100%] h-[100%] absolute bg-[rgba(0,0,0,0.4)]">
        {/* Right Side Text */}
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="h-[11vh] lg:h-[17vh] w-[65vw] md:w-[37%] lg:w-[37%] bg-[rgba(181,168,140,0.6)] absolute top-[60%] md:top-[61%] lg:top-[65%]  flex justify-center items-center"
        >
          <div>
            <p className="text-right font-bold text-[0.92rem] lg:text-2xl text-gray-300 py-12 lg:py-8 px-4 lg:px-8 font-Montserrat">
              Inspiring the best of Living
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="h-[20%] lg:h-[20%] md:h-[35%] w-[50%] lg:w-[30%] bg-[rgba(145,145,144,0.6)] absolute right-[10%] lg:right-[7%] flex justify-center items-center"
        >
          <p className="font-bold text-sm  lg:text-[1.5rem] sm:text-[0.5rem] px-4 lg:text-gray-900 p-4  font-Montserrat text-center">
            <p className="pb-3"> Achieving a successful</p>
            <p> energy Transition</p>
          </p>
        </div>
      </div>
      {/* Play/Pause button */}
      <button
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent border border-white rounded-full w-16 h-16 flex justify-center items-center"
        onClick={togglePlay}
      >
        {/* Conditional rendering of play/pause icon */}
        {isPlaying ? (
          <PiPauseDuotone className="text-white" size={24} />
        ) : (
          <IoPlay className="text-white" size={24} />
        )}
      </button>
    </div>
  );
};

export default VideoFullPage;
