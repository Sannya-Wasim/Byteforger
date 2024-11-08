import React from "react";
import { ReactComponent as HeroImage } from "../assets/svgs/heroImage.svg";

const Hero = () => {
  return (
    <div className="p-4 flex flex-row justify-evenly mt-10">
      <div className="flex flex-col justify-center px-8 lg:w-2/5">
        <p className="text-5xl text-darkBlue font-play font-400 my-6">
          Great <span className="text-darkPink">Product</span> is built by great
          teams.
        </p>
        <p className="text-xl text-black tracking-tight">
          We help build and manage a team of world-class developers to bring
          your vision to life
        </p>
        <button className="border-2 border-darkBlue text-darkBlue font-play font-bold rounded-lg py-2 px-4 my-6 self-start hover:bg-darkBlue hover:text-cream">
          Let's get started!
        </button>
      </div>
      {/* <div className=''><HeroImage/></div> */}
      <video
      className="hidden lg:w-2/5 lg:block"
        autoPlay
        loop
        muted
        playsInline
        src="https://gojilabs.com/wp-content/uploads/2024/09/New_Hero_1.5.mp4"
      ></video>
    </div>
  );
};

export default Hero;
