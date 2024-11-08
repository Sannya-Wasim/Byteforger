import React from "react";
import logo from "../assets/images/logo.png";
import { ReactComponent as Facebook } from "../assets/svgs/facebook-svgrepo-com.svg";
import { ReactComponent as Instagram } from "../assets/svgs/instagram-svgrepo-com.svg";
import { ReactComponent as Twitter } from "../assets/svgs/twitter-154-svgrepo-com.svg";
import { ReactComponent as Linkedin } from "../assets/svgs/linkedin-svgrepo-com.svg";

const icons = [Facebook, Instagram, Twitter, Linkedin];

const Footer = () => {
  return (
    <div className="shadow-inner mt-36 ">
      <div className="flex flex-row justify-start items-start p-6">
        {/* 1 */}
        <div className="w-2/5 px-6">
          <img src={logo} className="w-64 h-18" alt="img is absent"/>
          <p className="text-textGray my-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <div className="flex flex-row justify-start items-center">
            {icons.map((Item: any) => {
              return (
                <div className="p-3 m-2 shadow-xl rounded-full items-center">
                  <Item className="w-4 h-4" />
                </div>
              );
            })}
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col justify-start items-start w-1/5">
          <p className="font-bold font-play text-xl text-darkBlue my-2">
            Links
          </p>
          <button className="text-textGray hover:text-darkPink my-1">
            About Us
          </button>
          <button className="text-textGray hover:text-darkPink my-1">
            Services
          </button>
          <button className="text-textGray hover:text-darkPink my-1">
            Case Studies
          </button>
          <button className="text-textGray hover:text-darkPink my-1">
            How it works
          </button>
          <button className="text-textGray hover:text-darkPink my-1">
            Blog
          </button>
          <button className="text-textGray hover:text-darkPink my-1">
            Careers
          </button>
        </div>
        {/* 3 */}
        <div className="w-2/5">
          <p className="font-bold font-play text-xl text-darkBlue my-2">
            Contact Us
          </p>
          <p className="text-textGray my-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <p className="text-textGray">+921234567890</p>
        </div>
      </div>
        <p className="text-center text-textGray p-4 mt-4">© 2023 Copyright by IK Developers. All rights reserved.</p>
    </div>
  );
};

export default Footer;
