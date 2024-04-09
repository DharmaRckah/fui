import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../App.css";

export const ReviewSlider = () => {
  const container = useRef(null);
  const scrollLeft = () => {
    if (container.current) {
      container.current.scrollLeft -= 210;
    }
  };

  const scrollRight = () => {
    if (container.current) {
      container.current.scrollLeft += 310;
    }
  };

  return (
    <div className="h-[88%] w-full bg-black p-8">
      <div className="flex text-white justify-between mb-10">
        <p className="font-semibold text-2xl font-Montserrat">Reviews</p>
        <div onClick={scrollLeft} className="flex gap-5">
          <button className="lg:h-[7vh] lg:w-[8vh] bg-[rgba(32,157,218,1)]">
            <FaArrowLeft className="m-auto" />
          </button>

          <button
            onClick={scrollRight}
            className="lg:h-[7vh] lg:w-[8vh] bg-[rgba(32,157,218,1)]"
          >
            <FaArrowRight className="m-auto" />
          </button>
        </div>
      </div>
      <div
        ref={container}
        className="h-[80%] w-[full] flex gap-5 items-center parent-container overflow-x-auto"
      >
        {/* First Blog Item */}
        <div className="md:w-[25%] w-[75%] bg-blue-200 p-3 child-item">
          <div className="h-[200px] w-full bg-blue-400">
            <img
              className=" w-full object-cover"
              src="https://media.istockphoto.com/id/509674624/photo/wind-turbines-and-solar-panels-making-green-energy.webp?b=1&s=170667a&w=0&k=20&c=vMnmpH5vwLEkAwz5s7Bu0Gmd6d87Cc0z95HWmWaDPaM="
              alt=""
            />
          </div>
          <p className="mt-2 font-semibold">
            Lorem ipsum dolor sit <br /> amet, conse ct etur.
          </p>
          <p className="text-[0.8rem] mt-1">
            Let's delve into trends shaping the 2024 job market with drawing
            insights from layoff of 2023 and explore the skills and experiences
            that are most in demand.
          </p>

          <div className="flex items-center gap-1">
            <p className="mt-10 text-[1.3rem]">xyz developer</p>
            <p className="mt-12 p-2 text-[0.8rem]">UI/UX Developer</p>
          </div>
        </div>

        {/* Second Blog Item */}
        <div className="md:w-[25%] w-[75%] bg-blue-200 p-3 child-item">
          <div className=" w-full bg-blue-400">
            <img
              className=" w-full object-cover"
              src="https://media.istockphoto.com/id/509674624/photo/wind-turbines-and-solar-panels-making-green-energy.webp?b=1&s=170667a&w=0&k=20&c=vMnmpH5vwLEkAwz5s7Bu0Gmd6d87Cc0z95HWmWaDPaM="
              alt=""
            />
          </div>
          <p className="mt-2 font-semibold">
            Lorem ipsum dolor sit <br /> amet, conse ct etur.
          </p>
          <p className="text-[0.8rem] mt-1">
            Let's delve into trends shaping the 2024 job market with drawing
            insights from layoff of 2023 and explore the skills and experiences
            that are most in demand.
          </p>

          <div className="flex items-center gap-1">
            <p className="mt-10 text-[1.3rem]">xyz developer</p>
            <p className="mt-12 p-2 text-[0.8rem]">UI/UX Developer</p>
          </div>
        </div>

        {/* Third Blog Item */}
        <div className="md:w-[25%] w-[75%] bg-blue-200 p-3 child-item">
          <div className="h-[200px] w-full bg-blue-400">
            <img
              className=" w-full object-cover"
              src="https://media.istockphoto.com/id/509674624/photo/wind-turbines-and-solar-panels-making-green-energy.webp?b=1&s=170667a&w=0&k=20&c=vMnmpH5vwLEkAwz5s7Bu0Gmd6d87Cc0z95HWmWaDPaM="
              alt=""
            />
          </div>
          <p className="mt-2 font-semibold">
            Lorem ipsum dolor sit <br /> amet, conse ct etur.
          </p>
          <p className="text-[0.8rem] mt-1">
            Let's delve into trends shaping the 2024 job market with drawing
            insights from layoff of 2023 and explore the skills and experiences
            that are most in demand.
          </p>

          <div className="flex items-center gap-1">
            <p className="mt-10 text-[1.3rem]">xyz developer</p>
            <p className="mt-12 p-2 text-[0.8rem]">UI/UX Developer</p>
          </div>
        </div>

        {/* Fourth Blog Item */}
        <div className="md:w-[25%] w-[75%] bg-blue-200 p-3 child-item">
          <div className="h-[200px] w-full bg-blue-400">
            <img
              className=" w-full object-cover"
              src="https://media.istockphoto.com/id/509674624/photo/wind-turbines-and-solar-panels-making-green-energy.webp?b=1&s=170667a&w=0&k=20&c=vMnmpH5vwLEkAwz5s7Bu0Gmd6d87Cc0z95HWmWaDPaM="
              alt=""
            />
          </div>
          <p className="mt-2 font-semibold">
            Lorem ipsum dolor sit <br /> amet, conse ct etur.
          </p>
          <p className="text-[0.8rem] mt-1">
            Let's delve into trends shaping the 2024 job market with drawing
            insights from layoff of 2023 and explore the skills and experiences
            that are most in demand.
          </p>

          <div className="flex items-center gap-1">
            <p className="mt-10 text-[1.3rem]">xyz developer</p>
            <p className="mt-12 p-2 text-[0.8rem]">UI/UX Developer</p>
          </div>
        </div>

        {/* Add more Blog Items as needed */}
      </div>
    </div>
  );
};
