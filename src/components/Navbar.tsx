import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import close icon for mobile

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navItems = [
    { id: 1, text: "About Us" },
    { id: 2, text: "Services" },
    { id: 3, text: "Case Studies" },
    { id: 4, text: "How it works" },
  ];

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white shadow-md ">
      {/* Logo */}
      <img src={logo} className="lg:w-1/5 m-4 w-1/3" alt="logo is absent" />

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
      <button onClick={() => setNav(!nav)} className="md:hidden p-2 rounded-lg z-50">
        <AiOutlineMenu size={24} />
      </button>

      {/* Mobile Navigation */}
      <div
        className={`${
          nav ? "translate-x-0" : "translate-x-full"
        } fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden`}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            className="my-4 text-center text-lg text-black font-play hover:text-lightBlue"
            onClick={() => setNav(false)} // Close menu on item click
          >
            {item.text}
          </button>
        ))}
        <button
          className="block text-lg bg-darkBlue text-white rounded-xl py-2 px-8 my-4 font-play transition duration-300 ease-in-out transform hover:bg-lightBlue hover:-translate-y-1"
          onClick={() => setNav(false)} // Close menu on contact click
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
