import React from "react";

const HeroText = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-white p-8 py-[8vh] lg:py-[19vh] lg:ml-0 md:ml-0 sm:ml-auto">
          <div className="flex items-center gap-3 text-[#1C7CAC] py-[2vh]">
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
    </>
  );
};

export default HeroText;
