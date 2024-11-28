import React from "react";
import logo from "../assets/images/logo.png";
import { ReactComponent as Facebook } from "../assets/svgs/facebook-svgrepo-com.svg";
import { ReactComponent as Instagram } from "../assets/svgs/instagram-svgrepo-com.svg";
import { ReactComponent as Twitter } from "../assets/svgs/twitter-154-svgrepo-com.svg";
import { ReactComponent as Linkedin } from "../assets/svgs/linkedin-svgrepo-com.svg";
import { links } from "../constants";

const icons = [Facebook, Instagram, Twitter, Linkedin];

const Footer = () => {
  return (
    <div id="contact" className="shadow-inner mt-36 p-4 md:p-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center lg:space-x-10 lg:space-y-0 space-y-6">
        {/* 1 */}
        <div className="lg:w-2/5 w-full px-4 md:px-6 lg:px-0">
          <img src={logo} className="w-32 h-12 md:w-48 md:h-16 lg:w-64 lg:h-18" alt="img is absent" />
          <p className="text-textGray my-4 text-sm md:text-base">
          We help build and manage a team of world-class developers to bring your vision to life
          </p>
          {/* <div className="flex flex-row justify-start items-center space-x-4">
            {icons.map((Item, index) => (
              <div key={index} className="p-3 shadow-xl rounded-full items-center bg-gray-100 hover:bg-darkBlue hover:text-white">
                <Item className="w-4 h-4" />
              </div>
            ))}
          </div> */}
        </div>
        {/* 2 */}
        <div className="flex flex-col justify-start items-start w-full md:w-1/2 lg:w-1/5">
          <p className="font-bold font-play text-lg lg:text-xl text-darkBlue my-2">
            Links
          </p>
          {links.map((link, index) => (
            <a href={`${link.section}`} key={index}  className="text-textGray hover:text-darkPink my-1 text-sm md:text-base">
              {link.text}
            </a>
          ))}
        </div>
        {/* 3 */}
        <div className="w-full md:w-1/2 lg:w-2/5">
          <p className="font-bold font-play text-lg lg:text-xl text-darkBlue my-2">
            Contact Us
          </p>
          {/* <p className="text-textGray my-4 text-sm md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p> */}
          <p className="text-textGray text-sm md:text-base">+921234567890</p>
        </div>
      </div>
      <p className="text-center text-textGray text-xs md:text-sm p-4 mt-4">
        © 2023 Copyright by IK Developers. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
