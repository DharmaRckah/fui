// import React from "react";

// import { FaArrowRight } from "react-icons/fa6";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import s1 from "../assets/s1.webp";
// import s2 from "../assets/s2.webp";
// import s3 from "../assets/s3.webp";
// import s4 from "../assets/s4.webp";
// import s5 from "../assets/s5.jpg";
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
//     margin: "0 .5em",
//     overflow: "hidden",
//     padding: "0",
//   },
//   image: {
//     width: "20em",
//     borderRadius: "1px",
//     height: "15rem",
//   },
//   dotButton: {
//     border: "none",
//     background: "rgb(255, 68, 68)",
//   },
//   activeDotButton: {
//     background: "rgb(255, 68, 68) !important",
//   },
//   textContainer: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     height: "calc(100vh - 14rem)", // Adjusted to fill remaining height of the page
//     maxHeight: "70vh", // Limiting the maximum height to 70vh
//   },
//   bottomTextContainer: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "1rem", // Adjust as needed
//   },
// };

// const sliderImageUrl = [
//   { url: s1, heading: "Solar Energy" },
//   { url: s2, heading: "Smart City" },
//   { url: s3, heading: "Second point" },
//   { url: s4, heading: "Wind Energy" },
// ];

// const HeroEnergy = () => {
//   return (
//     <>
//       <div
//         data-aos="fade-right"
//         className="overflow-x-hidden overflow-y-hidden row col-md-12 bg-white flex flex-col lg:flex-row py-16  text-dark m-0 "
//       >
//         <div className="col-md-8 mx-md-1 row justify-content-start align-items-start overflow-x-scroll scrollbar-hidden flex-nowrap">
//           <div className="parent text-white">
//             <Marquee direction="left" speed={40}>
//               {sliderImageUrl.map((imageUrl, index) => (
//                 <div className="slider" key={index} style={styles.slider}>
//                   <img src={imageUrl.url} alt="slider" style={styles.image} />
//                   <p className="text-white overimg ">{imageUrl.heading}</p>
//                 </div>
//               ))}
//             </Marquee>
//           </div>
//         </div>

//         <div
//           className="h-auto lg:h-[35vh] col-md-3  row align-items-start "
//           style={styles.textContainer}
//         >
//           <div
//             style={styles.bottomTextContainer}
//             className="mt-16 lg:mt-[-24px]"
//           >
//             <p
//               style={{ fontFamily: "montserrat", lineHeight: "1.2" }}
//               className="md:font-bold lg:text-[1rem] lg:leading-6  font-bold italic font-Aleggra  font-Montserrat mr-3 "
//             >
//               A Glimpse into Electric, Wind, and Solar Energy
//             </p>

//             <div></div>
//             <div></div>
//             <p className="lg:text-[0.9rem] lg:leading-[1rem] sm:font-normal sm:text-[0.5rem] sm:leading-2 font-Montserrat text-left mt-3">
//               EIT Global is inspired by the all mighty Mt Everest – highest peak
//               in the world thrive to be leading IT services provider in the
//               Middle East region and globally. eit global is the partner of
//               choice for many of the world’s leading enterprises, SMEs and
//               technology software development.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroEnergy;
import { useState } from "react";
import Marquee from "react-fast-marquee";
// import s1 from "../assets/s1.webp";
// import s2 from "../assets/s2.webp";
// import s3 from "../assets/s3.webp";
// import s4 from "../assets/s4.webp";

const sliderImageUrl = [
  {
    heading: "IT",
    description:
      "We provide high-quality IT consulting for custom software development and application development.",
    url: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXB1dGVyJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    heading: "Metaverse Development",
    description:
      "We are market leaders in terms of custom VR, AR, and XR development. Our specialty includes integration of IoT in the Metaverse environment and VTU integration.",
    url: "https://plus.unsplash.com/premium_photo-1682124189039-f015d2ba4b75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWV0YXZlcnNlJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D", // Example url, you can choose the correct one
  },
  {
    heading: "Smart City",
    description:
      "We build complete packages to implement smart city solutions. This includes enabling smart governance, improving public wellbeing, and supporting smart industry development. Using advanced technologies such as 5G, Artificial Intelligence (AI), Internet of Things (IoT), cloud computing, and big data analytics, Smart Cities enhance city management and promote technological innovation.",
    url: "https://images.unsplash.com/photo-1525935944571-4e99237764c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjBjaXR5fGVufDB8fDB8fHww",
  },
  {
    heading: "ICT",
    description:
      "Benefit from our tailor-made ICT support packages for businesses of all sizes and across various industry verticals. From SMEs to multi-site organizations, our ICT solutions have helped them all. We offer enterprise ICT solutions, unified communications, data centers, and virtualization.",
    url: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SUNUfGVufDB8fDB8fHww",
  },
  {
    heading: "RPA",
    description:
      "Our Robotic Process Automation (RPA) offering helps you automate more businesses and IT processes at scale with the ease and speed of traditional RPA. Software robots, or bots, can act on AI insights to complete tasks with no lag time, allowing you to achieve digital transformation.",
    url: "https://images.unsplash.com/photo-1553901771-6f23562a2993?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UlBBfGVufDB8fDB8fHww",
  },
  {
    heading: "IoT",
    description:
      "Everest is a market leader in terms of IoT. We provide custom solutions for industrial automation and home automation. We are authorized partners with Siemens, Interra, and Schneider.",
    url: "https://images.unsplash.com/photo-1488229297570-58520851e868?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW90fGVufDB8fDB8fHww",
  },
  {
    heading: "Electromechanical",
    description:
      "Everest is a market leader in all kinds of electromechanical solutions. We provide a one-stop solution for engineering, manufacturing, execution, commissioning, and handover for medium voltage, low voltage, and others.",
    url: "https://images.unsplash.com/photo-1591017923291-5d5df5eb7d78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RWxlY3Ryb21lY2hhbmljYWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    heading: "HVAC",
    description:
      "We are highly experienced in high-capacity chiller installation. We are partners with Trane and Carrier to provide industry-leading solutions, specializing in district cooling.",
    url: "https://plus.unsplash.com/premium_photo-1661904482365-67d592410354?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEhWQUN8ZW58MHx8MHx8fDA%3D",
  },
  {
    heading: "Solar Energy",
    description:
      "We provide a complete one-stop solution for solar projects. We are partners with Jinko and Longi Solar, and we work closely with Victron for ATS and inverters. We offer in-house design for large-scale solar projects.",
    url: "https://plus.unsplash.com/premium_photo-1678743133487-d501f3b0696b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U29sYXIlMjBFbmVyZ3l8ZW58MHx8MHx8fDA%3D",
  },
  {
    heading: "Artificial Intelligence (AI)",
    description:
      "We provide high-end computer vision systems using AI for surveillance and identification purposes with machine learning. We also work with generative AI for high-end graphical presentations, and AI for custom applications to solve enterprise problems.",
    url: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWl8ZW58MHx8MHx8fDA%3D",
  },
  {
    heading: "ERP Systems",
    description:
      "EIT Global is a partner with ERP Next, providing open-source high-end ERP solutions to clients. Along with ERP Next, we also do consulting for SAP and Salesforce.",
    url: "https://plus.unsplash.com/premium_photo-1661677942925-b6ad7b27af18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RVJQJTIwU3lzdGVtc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];
const styles = {
  imageContainer: {
    position: "relative",
    margin: "0 1em",
    overflow: "hidden",
    width: "20em",
    height: "15rem",
  },
  url: {
    width: "100%",
    height: "100%",
  },
  hoverContent: {
    position: "absolute",
    bottom: "-100%", // Initially off-screen
    width: "100%",
    background: "rgba(0, 0, 0, 0.7)", // Dark background for contrast
    color: "white",
    fontFamily: "Arial", // Font family
    fontSize: "16px", // Smaller font size
    padding: "1em",
    textAlign: "center",
    transition: "bottom 0.5s ease", // Smooth slide-up transition
    overflow: "hidden", // Prevents overflow
  },
  hoverContentVisible: {
    bottom: "0", // Slide up into view on hover
  },
  heading: {
    position: "absolute",
    top: "10px", // Always visible
    left: "10px",
    color: "white",
    fontWeight: "bold",
  },
};

const HeroEnergy = () => {
  const [setPause] = useState(false);
  return (
    <>
      <div
        data-aos="fade-right"
        className="overflow-x-hidden overflow-y-hidden row col-md-12 bg-white flex flex-col lg:flex-row py-16  text-dark m-0 "
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        <div className="col-md-8 mx-md-1 row justify-content-start align-items-start overflow-x-scroll scrollbar-hidden flex-nowrap">
          <div className="parent text-white">
            <Marquee direction="left" speed={40} pauseOnHover={true}>
              {sliderImageUrl.map((url, index) => (
                <div
                  key={index}
                  className="url-container"
                  style={styles.imageContainer}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector(
                      ".hover-content"
                    ).style.bottom = "0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector(
                      ".hover-content"
                    ).style.bottom = "-100%";
                  }}
                >
                  <img src={url.url} alt={url.heading} style={styles.url} />
                  <div style={styles.heading}>{url.heading}</div>
                  <div className="hover-content" style={styles.hoverContent}>
                    {url.description}
                  </div>
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
              We are one of the leading technology and infrastructure company in
              middle east
            </p>

            <div></div>
            <div></div>
            <p className="lg:text-[0.9rem] lg:leading-[1rem] sm:font-normal sm:text-[0.5rem] sm:leading-2 font-Montserrat text-left mt-3">
              We are an ISO 9001:2015 and ISO 27001:2022 and we have experience
              of more than 10 years in technology and infrastructure projects
              <br />
              EIT global is inclined towards achieving sustainability goals and
              digital transformation through infrastructure development and
              emerging technologies !
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroEnergy;
