import React from "react";
import Navbar from "../new/Navbar.jsx";
import "../new/styles.css";
import SectionOne from "../new/SectionOne";
import SectionTwo from "../new/SectionTwo";
import SectionThree from "../new/SectionThree";
import SectionFour from "../new/SectionFour";
import SectionFive from "../new/SectionFive";
import Footer from "../new/Footer";

function New_page() {
  return (
    <>
      <Navbar />
      <SectionOne />
      <hr className="container hrContainer" />
      <SectionTwo />
      <hr className="container hrContainer" />
      <SectionThree />
      <hr className="container hrContainer" />
      <SectionFour />
      <hr className="container hrContainer" />
      <SectionFive />

      <Footer />
    </>
  );
}

export default New_page;
