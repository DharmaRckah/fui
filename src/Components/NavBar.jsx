import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const Navbar = ({ backgroundColor }) => {
  const [isOpen, setIsOpen] = useState(false); // State for menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu based on current state
  };

  return (
    <nav
      className={`h-[10vh] w-full text-white bg-[${backgroundColor}] flex justify-start items-center p-8 py-10 mt-3 cursor-pointer  ${
        isOpen ? "bg-opacity-75" : ""
      }`}
    >
      <Link to="/">
        <div>
          <img
            className=" py-3 "
            width={100}
            height={4}
            src={logo}
            alt="logo"
          />
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-9  ml-[30%] text-md font-Montserrat">
        <p>Media</p>
        <Link to="/contact">
          <p>Contact us</p>
        </Link>
        <p>Blogs</p>
      </div>

      {/* Hamburger menu button for mobile screens */}
      <button
        className="md:hidden focus:outline-none flex items-center justify-center p-2 rounded-md  "
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
        className={`absolute top-[10vh] left-0 bg-[rgba(0,0,0,0.9)] w-full text-white md:hidden ${
          isOpen
            ? "h-screen"
            : "h-0 overflow-hidden transition-all duration-300 ease-in-out"
        }`}
      >
        <ul className="flex flex-col items-center gap-9 font-bold text-xl p-8">
          <li onClick={toggleMenu}>
            <p>Media</p>
          </li>
          <li onClick={toggleMenu}>
            <p>Contact Us</p>
          </li>
          <li onClick={toggleMenu}>
            <p>Blogs</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
