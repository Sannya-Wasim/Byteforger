import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { approaches, case_studies, icons, services, ways } from "../constants";
import Footer from "../components/Footer";

const Home = () => {
  const [stacks, setStacks] = useState(icons[0].items);
  const [selectedIcon, setSelectedIcon] = useState(icons[0].name);
  return (
    <div>
      <Navbar />
      <Hero />
      {/* Services */}
      <p className="text-center mb-6 mt-14 text-black text-3xl font-semibold font-play">
        Services we offer
      </p>
      <div className="flex p-4 flex-wrap justify-center ">
        {services.map((service: any) => {
          return (
            <button className="lg:w-1/6 w-1/3 bg-white p-4 m-2 rounded-lg shadow-md flex flex-col justify-center items-center transition ease-out delay-30 hover:-translate-y-3 hover:shadow-lg hover:shadow-lightPink">
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
      <p className="text-center mb-12 mt-20 text-xl font-play">
        Our recent <br />{" "}
        <span className="text-3xl font-semibold">Case Studies</span>
      </p>
      <div>
        {case_studies.map((item: any) => {
          return (
            <div className="lg:flex lg:flex-row justify-center items-center pr-4  mx-36 mb-2 rounded-lg shadow-md">
              <div>{<item.image />}</div>
              <div className="m-4">
                <p className="text-xl text-darkBlue font-bold mb-4 font-play text-pretty">
                  {item.title}
                </p>
                <p className="text-textGray">{item.desc}</p>
                <button className="bg-darkPink text-cream py-1 px-2 my-4 rounded-md">
                  <p className="font-semibold">Read More</p>
                </button>
              </div>
            </div>
          );
        })}
      </div>
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
              className="border-[1px] border-lightBlue p-4 m-2 flex flex-row justify-between items-center"
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
    </div>
  );
};

export default Home;
