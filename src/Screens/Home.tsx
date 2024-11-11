import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { approaches, case_studies, icons, services, ways } from "../constants";
import Footer from "../components/Footer";
import { useIsVisible } from "../hooks/useIsVisible";

const Home = () => {
  const [stacks, setStacks] = useState(icons[0].items);
  const [selectedIcon, setSelectedIcon] = useState(icons[0].name);
  const ref1 = useRef<HTMLDivElement | null>(null);
  const visible1 = useIsVisible(ref1);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const visible2 = useIsVisible(ref2);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const visible3 = useIsVisible(ref3);
  const ref4 = useRef<HTMLDivElement | null>(null);
  const visible4 = useIsVisible(ref4);
  return (
    <div className="">
      <Navbar />
      <Hero />
      {/* Services */}
      <div
        ref={ref1}
        className={`transition-opacity ease-in duration-700 ${
          visible1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <p
          className={`text-center mb-6 mt-14 text-black text-3xl font-semibold font-play`}
        >
          Services we offer
        </p>
        <div className="flex p-4 flex-wrap justify-center">
          {services.map((service: any) => {
            return (
              <button
                key={service.id} // Add a unique key for each item
                className="lg:w-1/6 md:w-1/4 sm:w-1/2 w-full bg-white p-4 m-2 rounded-lg shadow-md flex flex-col justify-center items-center transition ease-out duration-300 hover:-translate-y-3 hover:shadow-lg hover:shadow-lightPink"
              >
                <div className="my-2">{<service.image />}</div>
                <p className="font-semibold font-play text-center my-2 text-lg text-darkBlue">
                  {service.title}
                </p>
                <p className="text-pretty mb-2 text-sm text-textGray">
                  {service.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>
      {/* Recent Case Studies */}
      <p className="text-center mb-12 mt-20 text-xl font-play">
        Our recent <br />{" "}
        <span className="text-3xl font-semibold">Case Studies</span>
      </p>
      <div
        ref={ref2}
        className={`transition-opacity ease-in duration-700 ${
          visible2 ? "opacity-100" : "opacity-0"
        }`}
      >
        {case_studies.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className={`flex flex-col lg:flex-row justify-center items-stretch lg:pr-4 px-4 lg:mx-36 my-4 rounded-lg shadow-md `}
            >
              {/* Image Container */}
              <div className="flex-1 flex items-center justify-center mb-4 lg:mb-0 lg:mr-4">
                {
                  <item.image className="w-full h-full object-cover rounded-lg" />
                }
              </div>

              {/* Text Content */}
              <div className="flex-1 w-full m-4 text-start lg:text-left">
                <p className="text-xl font-bold mb-4 font-play text-darkBlue">
                  {item.title}
                </p>
                <p className="text-textGray">{item.desc}</p>
                <button className="bg-darkPink text-cream py-1 px-4 my-4 rounded-md hover:bg-lightPink transition duration-200 ease-in-out">
                  <p className="font-semibold">Read More</p>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* Design and Development Approach */}
      <div className="bg-darkBlue mt-10">
        <p className="text-center text-white mb-8 pt-8 text-2xl font-play ">
          Our design and <br />{" "}
          <span className="text-4xl font-semibold text-neonPink">
            development approach
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2  p-4">
          {approaches.map((item: any, index: number) => (
            <div
              key={index}
              className={`border-[1px] border-lightBlue p-4 m-2 flex flex-row justify-between items-center transition-opacity ease-in duration-700 ${
                visible3 ? "opacity-100" : "opacity-0"
              }`}
              ref={ref3}
            >
              <div className="mx-2">{<item.image />}</div>
              <div className="mx-2">
                <p className="text-lg font-bold font-play text-neonBlue">
                  {item.title}
                </p>
                <p className="text-cream font-thin">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center mb-12 mt-20 text-xl font-play">
        Way of building <br />{" "}
        <span className="text-3xl font-semibold">Great Software</span>
      </p>
      <div className="mt-20 mx-4 ">
        {ways.map((item: any, index: number) => (
          <div
            ref={ref4}
            key={index}
            className={`flex flex-col md:flex-row justify-center items-center my-14 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="w-full md:w-1/2 px-10 my-6">
              <p className="font-play font-bold text-2xl text-darkBlue mb-2">
                {item.title}
              </p>
              <p className="font-thin mb-6">{item.desc}</p>
              <p className="border-l-4 border-darkPink px-2 italic text-darkPink font-thin">
                {item.quote}
              </p>
              <div className="flex flex-row justify-start items-center my-6">
                {<item.profileIcon />}
                <div className="mx-2 font-thin">
                  <p className="text-sm">{item.profileName}</p>
                  <p className="text-sm">{item.profileTitle}</p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <item.image className="w-full md:w-2/5 h-1/5 px-10" />
          </div>
        ))}
      </div>
      {/* Our Techstack */}
      <p className="text-center mb-12 mt-20 text-xl font-play">
        Our <br /> <span className="text-3xl font-semibold">Techstack</span>
      </p>
      <div
        ref={ref4}
        className={`transition-opacity ease-in duration-700 ${
          visible4 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          ref={ref4}
          className={`flex flex-wrap justify-center items-center mx-4 md:justify-evenly md:mx-20 space-y-4 lg:mx-44 md:space-y-0`}
        >
          {icons.map((icon: any) => (
            <button
              key={icon.name}
              onClick={() => {
                setStacks(icon.items);
                setSelectedIcon(icon.name);
              }}
              className={`font-semibold mt-6 text-center my-2 md:my-4 text-${
                selectedIcon === icon.name ? "darkPink" : "darkBlue"
              } text-sm md:text-md lg:text-lg mx-2`}
            >
              {icon.name}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center md:justify-evenly items-center my-8 md:my-16 space-y-4 md:space-y-0">
          {stacks.map((StackIcon: any, index: number) => (
            <StackIcon
              key={index}
              className="w-20 h-20 md:w-24 md:h-24 lg:w-36 lg:h-36 py-2"
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
