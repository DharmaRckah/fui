// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import jjj from "../assets/jjj.mp4";
// const HeroText = () => {
//   const contentRef = useRef(null);

//   useEffect(() => {
//     gsap.from(contentRef.current, {
//       duration: 2,
//       y: 50,
//       opacity: 0,
//       ease: "power3.out",
//       stagger: 0.2,
//       onComplete: () => {
//         console.log("Animation completed!");
//       },
//     });
//   }, []);

//   return (
//     <>
//       <div className="min-h-screen flex justify-left items-left italic font-Aleggra text-left">
//         <video
//           //ref={videoRef}
//           src={jjj}
//           autoPlay
//           muted
//           loop
//           controls={false}
//           //onClick={togglePlay}
//           className="absolute inset-0 w-1/2 h-full object-cover"
//         ></video>

//         <div
//           ref={contentRef}
//           //data-aos="zoom-in-right"
//           className="text-white p-8 py-[8vh] lg:py-[19vh] lg:ml-0 md:ml-0 sm:ml-auto"
//         >
//           <div className="flex items-left gap-3 text-[#1C7CAC] py-[2vh]">
//             <div className="w-10 md:w-20 lg:w-12 h-[0.2rem] mt-1 bg-[#1C7CAC]"></div>
//             <p className="text-md md:text-3xl lg:text-xl float-start text-left">
//               EVEREST INFRASTRUCTURE
//             </p>
//           </div>
//           <div>
//             <p className="lg:text-[3.5rem] sm:text-[1.5rem] md:text-[6.8rem] lg:text-[4.6rem] leading-[4.4rem] md:leading-[7rem] lg:leading-[6rem] lg:tracking-tight font-bold text-white bg-opacity-60 text-opacity-80 text-left">
//               Clean Energy Powering A <br /> Sustainable Future
//             </p>

//             <p className="text-md md:text-3xl lg:text-xl py-[3vh] text-gray-300 text-left">
//               Join the Renewable Revolution : Let Us Guide You to Success
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroText;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import jjj from "../assets/jjj.mp4";

const HeroText = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.from(contentRef.current, {
      duration: 2,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.2,
      onComplete: () => {
        console.log("Animation completed!");
      },
    });
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <video
        src={jjj}
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
      ></video>

      <div
        ref={contentRef}
        className="text-white p-8 py-[8vh] lg:py-[19vh] lg:ml-0 md:ml-0 sm:ml-auto relative z-10"
        style={{ maxWidth: "100vw" }} // Ensure content fits screen width
      >
        <div className="flex items-left gap-3 text-[#1C7CAC] py-[2vh]">
          <div className="w-10 md:w-20 lg:w-12 h-[0.2rem] mt-1 bg-[#1C7CAC]"></div>
          <p className="text-md md:text-3xl lg:text-xl float-start text-left">
            EVEREST INFRASTRUCTURE
          </p>
        </div>
        <div>
          <p className="lg:text-[3.5rem] sm:text-[1.5rem] md:text-[6.8rem] lg:text-[4.6rem] leading-[4.4rem] md:leading-[7rem] lg:leading-[6rem] lg:tracking-tight font-bold text-white bg-opacity-60 text-opacity-80 text-left">
            Clean Energy Powering A <br /> Sustainable Future
          </p>

          <p className="text-md md:text-3xl lg:text-xl py-[3vh] text-gray-300 text-left">
            Join the Renewable Revolution : Let Us Guide You to Success
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
