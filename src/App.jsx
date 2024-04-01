import React from "react";
import videobg from "./assets/videolg.mp4";
import HomeLeft from "./Components/HomeLeft";
import HomeRight from "./Components/HomeRight";
import EITLogo from "./assets/EITLogo.png";
import logoCircle from "./assets/logoCircle.png";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();

const App = () => {
  document.title = "Home";
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div className="h-full w-full bg-[rgba(0,0,0,.4)] absolute z-1">
        {/** LOGO  */}
        <div className="absolute left-[50%] lg:-top-[4%] h-[10%] md:h-[10%] md:w-[5%] lg:h-[19%] lg:w-[10%] z-40 transform -translate-x-1/2 translate-y-1/2 relative">
          {/** Rotate logoCircle */}
          {/* <motion.div
            initial={{ scale: 20 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.9 }}
            className="h-full w-full object-cover"
          > <motion.div
              className="h-full w-full object-cover"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, loop: Infinity }}
              style={{
                backgroundImage: `url(${logoCircle})`,
                backgroundSize: "cover",
                borderRadius: "100%",
                position: "relative",
              }}
            ></motion.div>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "58%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
              }}
            >
              <img src={EITLogo} alt="" style={{ width: "200%" }} />
            </div>
          </motion.div> */}
        </div>
        <HomeLeft />
        <HomeRight />
      </div>

      {/** Main page Video  */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        style={{ transform: "scale(1.0)" }}
      >
        <source src={videobg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default App;
