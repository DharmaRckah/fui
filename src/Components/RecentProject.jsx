// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import s1 from "../assets/a1.png";
// import s2 from "../assets/a2.png";
// import s3 from "../assets/a3.png";
// import s4 from "../assets/s4.webp";

// import s6 from "../assets/s6.jpg";

// import Marquee from "react-fast-marquee";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 4,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 2,
//     slidesToSlide: 3,
//   },
//   mobile: {
//     breakpoint: { max: 767, min: 464 },
//     items: 1,
//     slidesToSlide: 1,
//   },
// };

// const styles = {
//   slider: {
//     margin: "0",
//     overflow: "hidden",
//     padding: "0rem 0rem",
//   },
//   image: {
//     width: "100%",
//     height: "35rem",
//     objectFit: "cover", // Set object-fit to cover
//   },
//   dotButton: {
//     border: "none",
//     background: "rgb(255, 68, 68)",
//   },
//   activeDotButton: {
//     background: "rgb(255, 68, 68) !important",
//   },
// };

// const sliderImageUrl = [
//   { url: s1 },
//   { url: s2 },

//   { url: s3 },
//   { url: s1 },
//   { url: s3 },
//   { url: s2 },
//   { url: s3 },
//   { url: s1 },
//   { url: s2 },

//   { url: s3 },
//   { url: s1 },
//   { url: s3 },
//   { url: s2 },
//   { url: s3 },
// ];

// const ReactProject = () => {
//   return (
//     <div className="parent bg-white text-dark px-2 mt-md-4 p-10">
//       <h2 className="mx-4  text-3xl font-bold  py-2 text-center mb-4 italic font-Aleggra">
//         Our Recent Projects
//       </h2>
//       <Carousel
//         responsive={responsive}
//         autoPlay={true}
//         autoPlaySpeed={2000} // Adjust autoplay speed (milliseconds)
//         transitionDuration={3000} // Adjust transition duration (milliseconds)
//         swipeable={true}
//         draggable={true}
//         showDots={true}
//         infinite={true}
//         partialVisible={false}
//         dotListClass="custom-dot-list-style"
//         customDot={<CustomDot />}
//       >
//         {sliderImageUrl.map((imageUrl, index) => (
//           <div
//             className="slider mx-4 h-auto  "
//             key={index}
//             style={styles.slider}
//           >
//             <img
//               src={imageUrl.url}
//               className="h-auto"
//               alt="slider"
//               style={styles.image}
//             />
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// const CustomDot = ({ onClick, ...rest }) => (
//   <button onClick={() => onClick()} style={styles.dotButton} {...rest}></button>
// );

// export default ReactProject;

import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import s1 from "../assets/a1.png";
import s2 from "../assets/a2.png";
import s3 from "../assets/a3.png";

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
  sliderContainer: {
    position: "relative",
    marginBottom: "20px",
  },
  buttonContainer: {
    position: "absolute",
    top: "-50px",
    right: "0", // Align buttons to top-right corner
    zIndex: "999",
    display: "flex",
    alignItems: "center",
    paddingTop: "10px", // Adjust distance from top
    paddingRight: "10px", // Adjust distance from right
  },
  button: {
    backgroundColor: "rgba(0, 0, 255, 0.5)",
    color: "#fff",
    border: "none",
    paddingRight: "15px",
    paddingLeft: "15px",
    padding: "10px",
    margin: "0 5px",
    cursor: "pointer",
  },
};

const sliderImageUrl = [
  { url: s1 },
  { url: s2 },
  { url: s3 },
  { url: s1 },
  { url: s3 },
  { url: s2 },
  { url: s3 },
  { url: s1 },
  { url: s2 },
  { url: s3 },
  { url: s1 },
  { url: s3 },
  { url: s2 },
  { url: s3 },
];

const ReactProject = () => {
  const carouselRef = useRef(null);

  const handleMoveLeft = () => {
    carouselRef.current.previous();
  };

  const handleMoveRight = () => {
    carouselRef.current.next();
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="parent bg-white text-dark px-2 mt-md-4 p-10"
    >
      <h2 className="mx-4  text-3xl font-bold  py-2 text-center mb-4 italic font-Aleggra">
        Our Recent Projects
      </h2>
      <div style={styles.sliderContainer}>
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2000}
          transitionDuration={3000}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
          customDot={<CustomDot />}
        >
          {sliderImageUrl.map((imageUrl, index) => (
            <div className="slider mx-4 h-auto" key={index}>
              <img
                src={imageUrl.url}
                className="h-auto"
                alt="slider"
                style={{ width: "100%", height: "35rem", objectFit: "cover" }}
              />
            </div>
          ))}
        </Carousel>
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={handleMoveLeft}>
            <FaArrowLeft />
          </button>
          <button style={styles.button} onClick={handleMoveRight}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

const CustomDot = ({ onClick, ...rest }) => (
  <button
    onClick={() => onClick()}
    style={{
      backgroundColor: "#f00",
      border: "none",
      borderRadius: "50%",
      width: "10px",
      height: "10px",
      margin: "0 5px",
    }}
    {...rest}
  ></button>
);

export default ReactProject;
