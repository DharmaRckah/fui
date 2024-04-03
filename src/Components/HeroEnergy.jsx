import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import s1 from "../assets/s1.webp";
import s2 from "../assets/s2.webp";
import s3 from "../assets/s3.webp";
import s4 from "../assets/s4.webp";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
};

const styles = {
  slider: {
    margin: "0 20px",
    overflow: "hidden",
    padding: "0rem 0",
  },
  image: {
    width: "100%",
    borderRadius: "1px",
    height: "20rem",
  },
  dotButton: {
    border: "none",
    background: "rgb(255, 68, 68)",
  },
  activeDotButton: {
    background: "rgb(255, 68, 68) !important",
  },
};

const sliderImageUrl = [
  { url: s1, heading: "Solar Energy" },
  { url: s2, heading: "Smart City" },
  { url: s3, heading: "Second point" },
  { url: s4, heading: "Wind Energy" },
];

const HeroEnergy = () => {
  return (
    <>
      <div className="overflow-x-hidden overflow-y-hidden row col-md-12 bg-white flex flex-col lg:flex-row py-14  text-dark m-0 ">
        <div className="col-md-8 mx-md-1 row justify-content-start align-items-center overflow-x-scroll scrollbar-hidden flex-nowrap">
          <div className="parent text-white">
            <Carousel
              responsive={responsive}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={true}
              infinite={true}
              partialVisible={false}
              dotListClass="custom-dot-list-style"
              customDot={<CustomDot />}
            >
              {sliderImageUrl.map((imageUrl, index) => (
                <div className="slider" key={index} style={styles.slider}>
                  <img src={imageUrl.url} alt="slider" style={styles.image} />
                  <p className="text-white overimg ">{imageUrl.heading}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className=" h-[45vh] lg:h-[35vh] col-md-3 py-3  row coloum align-top " >
          <p className=" lg:font-bold lg:text-[1.4rem] lg:leading-8 font-bold text-[1.6rem] font-Montserrat ">
            A Glimpse into Electric, Wind, and Solar Energy
          </p>
          <p className="lg:text-[0.8rem] lg:leading-[1rem] mt-3 font-Montserrat ">
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

const CustomDot = ({ onClick, ...rest }) => (
  <button onClick={() => onClick()} style={styles.dotButton} {...rest}></button>
);
export default HeroEnergy;
