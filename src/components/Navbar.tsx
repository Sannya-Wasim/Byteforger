import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center px-4 ">
      <img src={logo} className="w-64 h-18 m-4" />
      <div className="justify-center flex flex-row items-center">
        <button className="text-center text-xl mx-4 text-black font-play hover:text-lightBlue">
          About Us
        </button>
        <button className="text-center text-xl mx-4 text-black font-play hover:text-lightBlue">
          Services
        </button>
        <button className="text-center text-xl mx-4 text-black font-play hover:text-lightBlue">
          Case Studies
        </button>
        <button className="text-center text-xl mx-4 text-black font-play hover:text-lightBlue">
          How it works
        </button>
        <button className="bg-darkBlue text-cream rounded-xl py-2 px-4 mx-2 font-play transition duration-300 ease-in-out transform hover:bg-lightBlue hover:-translate-y-1">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
