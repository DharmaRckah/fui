import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import Lan from "../Components/tech/Lan";
const Navbar = ({ backgroundColor }) => {
  const [isOpen, setIsOpen] = useState(false); // State for menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`h-[10vh] w-full text-white  flex justify-start items-center p-8 py-10  cursor-pointer  ${
        isOpen ? "bg-opacity-75" : ""
      }`}
    >
      <Link to="/">
        <div>
          <img
            className=" py-6 p-1   "
            width={75}
            height={4}
            src={logo}
            alt="logo"
          />
        </div>
      </Link>

      <div className="hidden md:flex items-center  gap-9  ml-[30%] text-md font-Montserrat italic font-Aleggra">
        <Link to="/technology">
          <p>Technology</p>
        </Link>
        <Link to="/contact">
          <p>Contact us</p>
        </Link>

        <Link to="/blog">
          <p>Blogs</p>
        </Link>

        <div className="mt-12">
          {" "}
          <Lan />
        </div>
      </div>

      {/* Hamburger menu button for mobile screens */}
      <button
        className="md:hidden focus:outline-none flex items-center justify-center p-2 rounded-md mobile-btn "
        style={{ position: "absolute", right: "4px" }}
        onClick={toggleMenu}
      >
        {isOpen ? (
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* Mobile menu overlay using conditional rendering */}
      <div
        className={`absolute top-0 z-10 left-0 bg-[rgba(0,0,0,0.9)] w-full text-white md:hidden ${
          isOpen
            ? "h-screen"
            : "h-0 overflow-hidden transition-all duration-300 ease-in-out"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col items-center gap-9 font-bold text-xl p-8 italic font-Aleggra">
          <li onClick={toggleMenu}>
            <Link to="/technology">Technology</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/blog">Blogs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
