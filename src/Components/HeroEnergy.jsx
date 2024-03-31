import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import s1 from "../assets/s1.webp";
import s2 from "../assets/s2.webp";
import s3 from "../assets/s3.webp";
import s4 from "../assets/s4.webp";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";
const HeroEnergy = () => {
  return (
    <>
      <div className="   overflow-x-hidden overflow-y-hidden row col-md-12 bg-black flex flex-col lg:flex-row py-14  text-white ">
        <div className="col-md-8 mx-md-1 row justify-content-start align-items-center overflow-x-scroll scrollbar-hidden flex-nowrap">
          <div className="h-[35vh] lg:h-[40vh] col-md-4 mt-10">
            <img className="h-full w-full object-cover" src={s1} alt={s1} />
            <p className="text-white overimg">Solar Energy</p>
          </div>
          <div className="h-[35vh] lg:h-[40vh] col-md-4 mt-10">
            <img className="h-full w-full object-cover" src={s2} alt={s1} />
            <p className="text-white overimg">Smart City</p>
          </div>
          <div className="h-[35vh] lg:h-[40vh] col-md-4 mt-10">
            <img className="h-full w-full object-cover" src={s3} alt={s2} />
            <p className="text-white overimg">Second point </p>
          </div>
          <div className="h-[35vh] lg:h-[40vh] col-md-4 mt-10">
            <img className="h-full w-full object-cover" src={s5} alt={s4} />
            <p className="text-white overimg">Wind Energy</p>
          </div>
        </div>

        <div className=" h-[45vh] lg:h-[35vh] col-md-3 py-3 mt-md-5">
          <p className=" lg:font-bold lg:text-[1.4rem] lg:leading-8 font-bold text-[1.6rem] font-Montserrat">
            A Glimpse into Electric, Wind, and Solar Energy
          </p>
          <p className="lg:text-[0.8rem] lg:leading-[1rem] mt-3 font-Montserrat">
            Everest Technology is inspired by the all mighty Mt Everest –
            highest peak in the world thrive to be leading IT services provider
            in the Middle East region and globally. Everest Technology is the
            partner of choice for many of the world’s leading enterprises, SMEs
            and technology software development, marketing strategies and
            industrial automation services.
          </p>
          {/* <div className=" flex items-center row w-75 mt-3">
            <button className=" w-50 p-3 bg-yellow-400 text-black  rounded-sm">
              Read More
            </button>
            <button
              className=" w-25 bg-[#152E3A] rounded-sm flex items-center justify-content-center"
              style={{ padding: "1.3rem 0" }}
            >
              <FaArrowRightLong />
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HeroEnergy;
