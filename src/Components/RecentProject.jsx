import React from "react";
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
    slidesToSlide: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 3
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1 
  }
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
  { url: s1 },
  { url: s2 },
  { url: s3 },
  { url: s3 },
  { url: s4 },
  { url: s5 },
  { url: s6 }
];

const ReactProject = () => {
  return (
    <div className="parent bg-white text-dark">
      <h3 className="mx-4 fw-bold py-2  ">Our Recent Projects</h3>
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
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const CustomDot = ({ onClick, ...rest }) => (
  <button
    onClick={() => onClick()}
    style={styles.dotButton}
    {...rest}
  ></button>
);

export default ReactProject;
