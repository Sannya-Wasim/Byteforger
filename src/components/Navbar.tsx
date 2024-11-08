import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navItems = [
    { id: 1, text: "About Us" },
    { id: 2, text: "Services" },
    { id: 3, text: "Case Studies" },
    { id: 4, text: "How it works" },
  ];

  return (
    <div className="flex justify-between items-center px-4 py-2">
      {/* Logo */}
      <img src={logo} className="lg:w-1/5 m-4 w-1/3" />

      {/* Desktop Navigation */}
      <div className="hidden md:flex md:flex-row items-center lg:text-xl md:text-md text-sm">
        {navItems.map((item) => (
          <button
            key={item.id}
            className="text-center mx-4 text-black font-play hover:text-lightBlue"
          >
            {item.text}
          </button>
        ))}
        <button className="lg:text-lg md:text-md text-sm bg-darkBlue text-cream rounded-xl py-2 px-4 mx-2 font-play transition duration-300 ease-in-out transform hover:bg-lightBlue hover:-translate-y-1">
          Contact Us
        </button>
      </div>

      {/* Hamburger Icon for Mobile */}
      <button onClick={() => setNav(!nav)} className="md:hidden p-2 rounded-lg">
        <AiOutlineMenu size={24} />
      </button>

      {/* Mobile Navigation */}
      <div
        className={
          nav
            ? "flex flex-col justify-start items-end shadow-md fixed right-0 top-0 w-[30%] h-full ease-in-out duration-500 bg-white p-4"
            : "flex flex-col justify-start items-end shadow-md fixed top-0 right-[-100%] w-[30%] h-full ease-in-out duration-500"
        }
      >
        <button
          onClick={() => setNav(!nav)}
          className="md:hidden p-2 rounded-lg mb-6 mt-3"
        >
          <AiOutlineMenu size={24} />
        </button>
        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <button
            key={item.id}
            className="my-4 text-center mx-4 text-black font-play hover:text-lightBlue"
          >
            {item.text}
          </button>
        ))}
        <button className="block p-2 text-white bg-darkBlue rounded-xl my-2 mx-4 md:text-md lg:text-lg font-play transition duration-300 ease-in-out transform hover:bg-lightBlue hover:-translate-y-1">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
