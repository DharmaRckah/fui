import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const NewsLetter = () => {
  return (
    <div className=" md:h-[40%] md:h-[50%] lg:h-[6 0%] w-full bg-black p-8 text-white text-center">
      <p className=" text-4xl font-Montserrat">Subscribe to Our Newsletter</p>
      <p className=" mt-5 font-Montserrat">Get in touch for all new updates.</p>
      <div className="mt-14 flex justify-center row col items-center">
  <div className="col-4 m-0 p-0">
    <input
      type="text"
      placeholder="Enter your email address"
      className="p-2  rounded-l-sm w-full border border-gray-300 focus:outline-none focus:border-blue-500"
    />
  </div>

  <button className="p-2 bg-[#FFA700] rounded-r-sm text-white font-semibold flex items-center md:w-[10%] w-[25%] justify-center">
    <span>Submit</span>
    <FaArrowRight className="ml-1 inline-block" />
  </button>
</div>

    </div>
  );
};

export default NewsLetter;
