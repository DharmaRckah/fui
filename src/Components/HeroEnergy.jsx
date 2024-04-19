import React from "react";

import { FaArrowRight } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import s1 from "../assets/s1.webp";
import s2 from "../assets/s2.webp";
import s3 from "../assets/s3.webp";
import s4 from "../assets/s4.webp";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";
import Marquee from "react-fast-marquee";

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
    margin: "0 .5em",
    overflow: "hidden",
    padding: "0",
  },
  image: {
    width: "20em",
    borderRadius: "1px",
    height: "15rem",
  },
  dotButton: {
    border: "none",
    background: "rgb(255, 68, 68)",
  },
  activeDotButton: {
    background: "rgb(255, 68, 68) !important",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "calc(100vh - 14rem)", // Adjusted to fill remaining height of the page
    maxHeight: "70vh", // Limiting the maximum height to 70vh
  },
  bottomTextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem", // Adjust as needed
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
      <div
        data-aos="fade-right"
        className="overflow-x-hidden overflow-y-hidden row col-md-12 bg-white flex flex-col lg:flex-row py-16  text-dark m-0 "
      >
        <div className="col-md-8 mx-md-1 row justify-content-start align-items-start overflow-x-scroll scrollbar-hidden flex-nowrap">
          <div className="parent text-white">
            <Marquee direction="left" speed={40}>
              {sliderImageUrl.map((imageUrl, index) => (
                <div className="slider" key={index} style={styles.slider}>
                  <img src={imageUrl.url} alt="slider" style={styles.image} />
                  <p className="text-white overimg ">{imageUrl.heading}</p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <div
          className="h-auto lg:h-[35vh] col-md-3  row align-items-start "
          style={styles.textContainer}
        >
          <div
            style={styles.bottomTextContainer}
            className="mt-16 lg:mt-[-24px]"
          >
            <p
              style={{ fontFamily: "montserrat", lineHeight: "1.2" }}
              className="md:font-bold lg:text-[1rem] lg:leading-6  font-bold italic font-Aleggra  font-Montserrat mr-3 "
            >
              A Glimpse into Electric, Wind, and Solar Energy
            </p>

            <div></div>
            <div></div>
            <p className="lg:text-[0.9rem] lg:leading-[1rem] sm:font-normal sm:text-[0.5rem] sm:leading-2 font-Montserrat text-left mt-3">
              EIT Global is inspired by the all mighty Mt Everest – highest peak
              in the world thrive to be leading IT services provider in the
              Middle East region and globally. eit global is the partner of
              choice for many of the world’s leading enterprises, SMEs and
              technology software development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroEnergy;
