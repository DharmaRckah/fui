import React from "react";
import Marquee from "react-fast-marquee";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
};

const styles = {
  slider: {
    margin: "0 20px",
    overflow: "hidden",
    padding: "2rem 0",
  },
  image: {
    width: 100,
    aspectRatio: "3/2",
    objectFit: "contain",
    mixBlendMode: "color-burn",
    // filter: brightness(0.5) ,grayscale(100%);
  },
  dotButton: {
    border: "none",
    background: "rgb(255, 68, 68)",
  },
  activeDotButton: {
    background: "rgb(255, 68, 68) !important",
  },
  // react-multiple-carousel__arrow:{
  //   display:"none"
  // }
};

const sliderImageUrl = [
  {
    url: "https://cdn-jdanl.nitrocdn.com/amtoRwJraWOAvYVzkSGJXCOaqjBgZFsX/assets/images/optimized/rev-82ae7db/everestdg.com/wp-content/uploads/2021/11/Stantec-Logo.wine_.png",
  },
  {
    url: "https://cdn-jdanl.nitrocdn.com/amtoRwJraWOAvYVzkSGJXCOaqjBgZFsX/assets/images/optimized/rev-82ae7db/everestdg.com/wp-content/uploads/2021/11/pngwing.com-1.png",
  },
  {
    url: "https://cdn-jdanl.nitrocdn.com/amtoRwJraWOAvYVzkSGJXCOaqjBgZFsX/assets/images/optimized/rev-82ae7db/everestdg.com/wp-content/uploads/2021/11/Walmart_logo.svg_.png",
  },
  {
    url: "https://cdn-jdanl.nitrocdn.com/amtoRwJraWOAvYVzkSGJXCOaqjBgZFsX/assets/images/optimized/rev-82ae7db/everestdg.com/wp-content/uploads/2021/11/Bajaj-Logo-PNG-Image_clv4ds.png",
  },
  {
    url: "https://cdn-jdanl.nitrocdn.com/amtoRwJraWOAvYVzkSGJXCOaqjBgZFsX/assets/images/optimized/rev-82ae7db/everestdg.com/wp-content/uploads/2021/10/veloce-new-logo.png",
  },
  {
    url: "https://cdn-jdanl.nitrocdn.com/amtoRwJraWOAvYVzkSGJXCOaqjBgZFsX/assets/images/optimized/rev-82ae7db/everestdg.com/wp-content/uploads/2022/11/sobha-logo.jpg",
  },
  {
    url: "https://cdn-jdanl.nitrocdn.com/amtoRwJraWOAvYVzkSGJXCOaqjBgZFsX/assets/images/optimized/rev-82ae7db/everestdg.com/wp-content/uploads/2022/11/micro-focus-logo.png",
  },
  {
    url: "https://cdn-jdanl.nitrocdn.com/amtoRwJraWOAvYVzkSGJXCOaqjBgZFsX/assets/images/optimized/rev-82ae7db/everestdg.com/wp-content/uploads/2022/11/manpower-logo.png",
  },
  {
    url: "https://cdn-jdanl.nitrocdn.com/amtoRwJraWOAvYVzkSGJXCOaqjBgZFsX/assets/images/optimized/rev-82ae7db/everestdg.com/wp-content/uploads/2022/11/epi-logo.webp",
  },
  {
    url: "https://cdn-jdanl.nitrocdn.com/amtoRwJraWOAvYVzkSGJXCOaqjBgZFsX/assets/images/source/rev-82ae7db/everestdg.com/wp-content/uploads/2022/11/cl5-1.png",
  },
  {
    url: "https://cdn-jdanl.nitrocdn.com/amtoRwJraWOAvYVzkSGJXCOaqjBgZFsX/assets/images/optimized/rev-82ae7db/everestdg.com/wp-content/uploads/2023/09/mcit-logo.png",
  },
  {
    url: "https://cdn-jdanl.nitrocdn.com/amtoRwJraWOAvYVzkSGJXCOaqjBgZFsX/assets/images/optimized/rev-82ae7db/everestdg.com/wp-content/uploads/2023/06/image_2023_06_19T06_37_32_922Z.png",
  },
];

const OurClient = ({ bg = "white" }) => {
  return (
    <div
      className="parent "
      style={{ backgroundColor: bg, color: bg === "white" ? "black" : "white" }}
    >
      <style>
        {`.react-multiple-carousel__arrow {
    display: none;
  }`}
      </style>

      <h3 className="mx-4 h2 fw-bold py-2 text-center ">Our Clients </h3>
      <p className="mx-4 fw-bold py-2  text-center">
        We’re trusted by some of the world’s most recognizable brands.{" "}
      </p>
      {/* <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
      > */}
      <Marquee direction="left" speed={40} responsive={responsive}>
        {sliderImageUrl.map((imageUrl, index) => (
          <div className="slider" key={index} style={styles.slider}>
            <img src={imageUrl.url} alt="slider" style={styles.image} />
          </div>
        ))}
      </Marquee>
      {/* </Carousel> */}
    </div>
  );
};
export default OurClient;
