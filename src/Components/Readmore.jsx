import React from "react";
import image from "../assets/infrastructure/ReadMore.png";
import { FaArrowRight } from "react-icons/fa6";

const Readmore = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      className="flex flex-col lg:flex-row h-auto lg:h-[70vh] w-full bg-inherit text-black p-8 md:px-10 px-8 lg:px-10 lg:pt-[6rem]"
    >
      <div className="lg:w-[25%] h-auto lg:h-[90%] flex flex-col justify-between">
        <div className="lg:text-base/loose xl:text-base/loose">
          <p className="font-bold text-lg md:text-base lg:text-base leading-normal md:leading-[1.3rem] lg:leading-[1.3rem] mb-5 font-Montserrat">
            Renewable energy sources <br /> are expected to provide <br />{" "}
            between 45 and 50 <br />
            percent of global <br /> generation by 2030
          </p>
          <p
            className="text-sm md:text-s lg:text-bold text-left leading-normal mb-6 font-Montserrat lg:text-base/loose xl:text-base/loose"
            style={{ fontSize: "12px", paddingRight: "12px" }}
          >
            This substantial uptick underscores the accelerating shift towards
            cleaner, more sustainable energy options. Factors driving this trend
            include advancements in technology, decreasing costs of renewable
            infrastructure, and a growing awareness of the urgent need to
            mitigate climate change.
          </p>
        </div>

        <div className="flex items-center">
          <div className="flex">
            <button className="flex items-center px-3 py-2 bg-[rgba(28,124,172)] text-white rounded-l-md text-sm md:text-xs">
              Read More
            </button>
            <button className="flex items-center px-4 py-2 bg-[rgba(32,157,218)] text-white rounded-r-md">
              <FaArrowRight className="h-full" />
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full lg:w-[70%] md:h-[50%] md:h-[50%] mt-6 lg:mt-0 relative">
        <div className="relative">
          <img
            src={image}
            alt=""
            className="relative inset-0 w-full md:h-[400px] lg:h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Readmore;
