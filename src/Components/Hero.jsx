import React from "react";
import Navbar from "./NavBar";
import HeroText from "./HeroText";
import HeroEnergy from "./HeroEnergy";
import VideoFullPage from "./VideoFullPage";
import RecentProject from "./RecentProject";
import OurStrategyImage from "./OurStrategyImage";
import OurClient from "./OurClient";
import Readmore from "./Readmore";
import { ReviewSlider } from "./ReviewSlider";
import OurLatestBlog from "./OurLatestBlog";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import TestimonialSlider from "./TestimonialSlider";
import Testom from "./Testom";
import Lan from "../Components/tech/Lan";
// import backgroundImgae from "../assets/infrastructure/background.png";

const Hero = () => {
  return (
    <div
      className=" h-[100vh] "
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        // backgroundImage: `url(${backgroundImgae})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "100vh",
        overflowY: "none",
      }}
    >
      <div className="h-[100vh] w-[100%] bg-[rgba(0,0,0,0.7)]  overflow-y-hidden overlow-x-hidden bg-gradient-to-b from-0B1D26 to-0B1D26">
        <Navbar backgroundColor={"#152E3A"} />
        <HeroText />
      </div>
      <HeroEnergy />
      <VideoFullPage />
      <Testom />
      {/* <RecentProject /> */}
      {/* <OurStrategyImage /> */}
      <OurClient />
      <Readmore />
      {/* <ReviewSlider /> */}
      <OurLatestBlog />
      <TestimonialSlider />
      <NewsLetter />

      <Footer />
    </div>
  );
};

export default Hero;
