import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const Addresses = [
    {
      url: "https://cdn4.iconfinder.com/data/icons/buildings-and-places-line-vol-1/74/building__monument__united_arab_emirates__dubai-512.png",
      country: "UAE",
      place: "Sharjah innovation & Technology park, Block B. B-08 42",
    },
    {
      url: "https://www.shutterstock.com/shutterstock/photos/1561624051/display_1500/stock-vector-statue-of-liberty-detailed-view-of-freedom-1561624051.jpg",
      country: "USA",
      place: "24, Beacon way, Jersey City, 07304 New Jersey, USA",
    },
    {
      url: "https://cdn-icons-png.freepik.com/512/1283/1283982.png",
      country: "INDIA",
      place: "501, West One, Hinijewadi, Pune, Maharashtra - 411057",
    },
    {
      url: "https://cdn-icons-png.flaticon.com/512/2195/2195663.png",
      country: "SAUDI ARABIA",
      place: "Khobar 19 Street. Al. Khobaar, Shamaliya, P.O Box",
    },
    {
      url: "https://cdn-icons-png.freepik.com/512/1283/1283982.png",
      country: "India",
      place:
        "Co karma, plot no.4 Durgam Cheruvu, Behind inorbit mall, Hitech city, 500081 Hyderabad Telangana",
    },
  ];
  return (
    <div className="h-screen w-screen bg-white overflow-x-hidden">
      <NavBar backgroundColor={"#152E3A"} />
      <div className="h-[1.5vh] w-full bg-black"></div>
      <div className="text-center p-8 mt-10">
        <p className="text-3xl font-Montserrat font-bold text-[#F6AF03]">
          Contact Us
        </p>
        <p className="font-DMsans p-2">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <div className="w-[90%] m-auto mb-10 flex justify-between align-middle rounded-md row">
        <div className="h-full col-md-5 bg-[#152E3A] rounded-md relative overflow-hidden text-white p-5">
          <div className="flex   flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Contact Information</h1>
            <p className="mt-3">Say something to start a live chat!</p>
          </div>
          <div className="mt-5 flex flex-col justify-start">
            <div className="flex items-center justify-start mb-3">
              <FontAwesomeIcon className="p-0" icon={faPhoneVolume} />
              <p className="p-2">00971522449584</p>
            </div>
            <div className="flex items-center justify-start mb-3">
              <FontAwesomeIcon className="p-0" icon={faEnvelope} />
              <p className="p-2">reach@everestdg.com</p>
            </div>
            <div className="flex items-center justify-start">
              <FontAwesomeIcon className="p-0" icon={faLocationDot} />
              <p className="p-2">
                26 floor, dar al awadhi tower, <br /> Kuwait City, Safat kuwait
              </p>
            </div>
          </div>

          <div className="flex items-start justify-between mt-5 w-28">
            <p className="p-2 rounded-full bg-amber-400 text-white hover:text-yellow-500 hover:bg-white transition duration-300">
              <FaTwitter />
            </p>
            <p className="p-2 rounded-full bg-amber-400 text-white hover:text-yellow-500 hover:bg-white transition duration-300">
              <FaInstagram />
            </p>
            <p className="p-2 rounded-full bg-amber-400 text-white hover:text-yellow-500 hover:bg-white transition duration-300">
              <FaDiscord />
            </p>
          </div>

          <div
            className="md:absolute -translate-x-1/2"
            style={{ bottom: "12em", left: "30em" }}
          >
            <div
              className="h-40 w-40 rounded-full bg-[rgba(255,255,255,0.2)] absolute transform -translate-x-1/2"
              style={{ left: "-4em", bottom: "-5em" }}
            ></div>
            <div className="h-60 w-60 rounded-full bg-[rgba(255,255,255,0.2)] absolute transform -translate-x-1/2"></div>
          </div>
        </div>

        <div className="h-full col-md-6 bg-[#ffff] align-items-center justify-center rounded-md relative overflow-hidden text-dark">
          <div className="container p-3 mt-5">
            <div className="row">
              <div className="col-md-6 flex flex-col p-2">
                <p>First Name</p>
                <input className="border-bottom border-dark w-75" />
              </div>
              <div className="col-md-6 flex flex-col p-2">
                <p>Last Name</p>
                <input className="border-bottom border-dark w-75" />
              </div>
              <div className="col-md-6 flex flex-col p-2">
                <p>Email</p>
                <input className="border-bottom border-dark w-75" type="text" />
              </div>

              <div className="col-12 d-flex flex-col p-2">
                <p>Select Subject?</p>

                <div className=" d-flex align-items-center justify-content-between col-10 mt-2">
                  <div className="d-flex align-items-center justify-content-between">
                    <input
                      className="border-bottom border-dark "
                      type="radio"
                    />
                    <p className="ps-1 text-xs ">General Inquiry </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <input
                      className="border-bottom border-dark "
                      type="radio"
                    />
                    <p className="ps-1 text-xs">General Inquiry </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <input
                      className="border-bottom border-dark "
                      type="radio"
                    />
                    <p className="ps-1 text-xs">General Inquiry </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-start">
                    <input
                      className="border-bottom border-dark "
                      type="radio"
                    />
                    <p className="ps-1 text-xs">General Inquiry </p>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-2 d-flex flex-col p-2">
                <p>message?</p>

                <div className="d-flex align-items-center justify-content-between col-11 px-1">
                  <input
                    className="border-bottom border-dark  w-100"
                    type="text"
                    placeholder=" Write your message.."
                  />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-end col-11 mt-3 px-1">
                <button
                  className="btn text-white w-36 px-2 px-md-0 "
                  style={{ backgroundColor: "#152E3A" }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container w-[93%] mt-16 mb-16">
        <div className="row">
          {Addresses.map((item, index) => (
            <div key={index - 1} className="col-md-4  text-white row">
              <div className="">
                <div
                  className=" m-2 p-4 rounded-3 "
                  style={{ backgroundColor: "#152E3A" }}
                >
                  <div className="d-flex align-items-center justify-content-start">
                    <img
                      src={item.url}
                      alt=""
                      width={25}
                      height={10}
                      style={{ filter: "invert(100%)" }}
                    />
                    <h2 className="h4 px-2">{item.country.toUpperCase()}</h2>
                  </div>
                  <h6 className="p">{item.place}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
