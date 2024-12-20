import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { globalSearch } from "../redux/slices/searchSlice";
import { RootState } from "../store";
import { links } from "../constants";
import { Link } from "react-router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const dispatch = useDispatch()
  // const searchTerm = useSelector((state:RootState) => state.search.value)

  // const handleSearch = (e: any) => {
  //   // setSearch(e.target.value);
  //   dispatch(globalSearch(e.target.value))
  //   // console.log("Search value", search);
  // };

  return (
    <div className="flex justify-between items-center p-4 bg-white  lg:absolute lg:z-10 lg:top-0 lg:right-0 lg:left-0">
      {/* Logo */}
      <Link to="/" className="w-2/5 md:w-1/4 lg:w-1/6 md:m-2 ">
        <img src={logo} alt="logo is absent" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex md:flex-row items-center lg:text-xl md:text-md text-sm">
        {links.map((item) => (
          <a
            key={item.id}
            className="text-center mx-4 text-black font-play hover:text-lightBlue"
            href={`${item.section}`}
          >
            {item.text}
          </a>
        ))}
        {/* <input
          value={searchTerm}
          placeholder="Search for keywords..."
          onChange={handleSearch}
          className="hidden md:block bg-lightGray py-2 px-4 text-sm rounded-3xl text-black"
        /> */}
        <Link to="/contact" className="md:text-md text-sm bg-darkBlue text-cream rounded-3xl py-2 px-4 mx-2 font-play transition duration-300 ease-in-out transform hover:bg-lightBlue hover:-translate-y-1">
          Contact Us
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <button
        onClick={() => setNav(!nav)}
        className="md:hidden p-2 rounded-lg z-50"
      >
        <AiOutlineMenu size={24} />
      </button>

      {/* Mobile Navigation */}
      <div
        className={`${
          nav ? "translate-x-0" : "translate-x-full"
        } fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden`}
      >
        {links.map((item) => (
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
          <Link to='/contact'>Contact Us</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
