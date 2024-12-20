import React from "react";
import { ReactComponent as HeroImage } from "../assets/svgs/heroImage.svg";
import Lottie from "lottie-react";
import HeroJSON from "../assets/json/Hero.json";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="p-4 flex flex-row justify-between">
      <div className="flex flex-col justify-center px-8 ">
        <p className="text-5xl text-darkBlue font-play font-400 my-6">
          Great <span className="text-darkPink">Product</span> is built by great
          teams.
        </p>
        <p className="text-xl text-black tracking-tight">
          We help build and manage a team of world-class developers to bring
          your vision to life
        </p>
        <Link to='/contact' className="border-2 border-darkBlue text-darkBlue font-play font-bold rounded-lg py-2 px-4 my-6 self-start hover:bg-darkBlue hover:text-cream">
          Let's get started!
        </Link >
      </div>
      <div className="hidden lg:block lg:-mt-10 lg:w-3/4 ">
        <Lottie animationData={HeroJSON} loop={true} className="" />
      </div>
      {/* <div className='hidden lg:block'><HeroImage/></div> */}
      {/* <video
      className="hidden lg:w-2/5 lg:block"
        autoPlay
        loop
        muted
        playsInline
        src="https://gojilabs.com/wp-content/uploads/2024/09/New_Hero_1.5.mp4"
      ></video> */}
    </div>
  );
};

export default Hero;
