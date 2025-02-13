import React, { useContext } from "react";
import ButtonContext from "../utils/ButtonContext";
import rightvideo from "../assets/rightvideo.mp4";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomeRight = () => {
  const { rightbutton, setrightbutton } = useContext(ButtonContext);

  return (
    <>
      <motion.div
        onMouseEnter={() => setrightbutton(true)}
        className="h-[13%] w-[52%] hidden lg:block md:w-[25%] lg:w-[26%] top-[53%] right-[22%]
        md:right-[13.8%] lg:right-[13%] absolute z-10"
      ></motion.div>

      {/* MOBILE BUTTON */}
      <div className="absolute top-[48%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 lg:hidden z-20">
        <button className="p-5 py-7  bg-[#64AEDF80] w-[87vw] md:w-[50vw] text-3xl text-white uppercase">
          <Link to="/infrastructure">Infrastructure</Link>
        </button>
      </div>

      <motion.div
        onMouseLeave={() => setrightbutton(false)}
        initial={{ zIndex: rightbutton ? 20 : 0 }}
        animate={{ zIndex: rightbutton ? 20 : 0 }}
        className="h-[45%] w-[29%] hidden lg:block absolute right-[45%] top-[50%] md:top-[38%] lg:top-[38%] md:right-[10%] lg:right-[10%]"
      >
        <Link to="/infrastructure">
          <motion.button
            className="px-8 py-6 md:p-6 lg:p-6 absolute  w-[190%] md:w-[110%] lg:w-[90%] left-0  lg:text-3xl md:text-2xl text-xl uppercase origin-left text-white"
            initial={{
              top: rightbutton ? "86%" : "33%",
              scaleX: rightbutton ? 1.2 : 1,
              backgroundColor: rightbutton
                ? "rgba(0,0,0,0.2)"
                : "rgba(100, 174, 223, 0.5)",
            }}
            animate={{
              top: rightbutton ? "86%" : "33%",
              scaleX: rightbutton ? 1.2 : 1,
              backgroundColor: rightbutton
                ? "rgba(0,0,0,0.2)"
                : "rgba(100, 174, 223, 0.5)",
            }}
            transition={{ duration: 0.4 }}
            style={{ border: "1px solid rgb(144, 205, 244)" }}
          >
            <div className="flex items-center gap-6">
              <motion.p
                initial={{ marginLeft: rightbutton ? "0px" : "24px" }}
                animate={{ marginLeft: rightbutton ? "0px" : "24px" }}
              >
                Infrastructure
              </motion.p>
              <motion.span
                initial={{ opacity: rightbutton ? 1 : 0 }}
                animate={{ opacity: rightbutton ? 1 : 0 }}
                className="inline-block"
              >
                <FaArrowRightLong />
              </motion.span>
            </div>
          </motion.button>
        </Link>

        <motion.div
          initial={{
            top: rightbutton ? "0%" : "80%",
            opacity: rightbutton ? 1 : 0,
          }}
          animate={{
            top: rightbutton ? "0%" : "80%",
            opacity: rightbutton ? 1 : 0,
          }}
          className="absolute top[0%] text-white p-2"
        >
          <div className="flex items-center">
            <div className="h-1 w-16 bg-[#FBD784] mt-2"></div>
            <p className="text-xl ml-10 mt-2 text-[#FBD784]">EIT Global</p>
          </div>

          <p className="text-4xl mt-5 mb-8 font-playfair">
            Elevate Your Business <br /> Beyond Peaks!
          </p>

          <p className="text-md opacity-[0.8]">
            Your Gateway to Next-Level IT & IoT solutions
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ left: rightbutton ? "0%" : "100%" }}
        animate={{ left: rightbutton ? "0%" : "100%" }}
        transition={{ duration: 0.4 }}
        className="h-screen w-full bg-black absolute left-[-100%] top-0"
      >
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src={rightvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </>
  );
};

export default HomeRight;
