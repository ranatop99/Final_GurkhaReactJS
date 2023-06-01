import React from "react";
import { data } from "../../../utilis/data";

const HeroPage = () => {
  const { heroTitle, heroMotto, heroImage } = data;
  return (
    <>
      <div className="w-full min-h-screen bg-light-green-color pt-24">
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full w-full p-14 gap-8 md:flex-row">
          <div className="flex flex-col justify-center w-full h-full">
            <h1 className="text-4xl sm:text-6xl font-bold text-dark-green">
              {heroTitle}
            </h1>
            <p className="text-xl max-w-md py-10">{heroMotto}</p>
            <div className="md:flex gap-8">
              <button className="py-5 px-10 bg-green-color border-none rounded-xl cursor-pointer hover:scale-110 duration-300">
                View Program
              </button>
              <button className="py-5 px-10 border-solid border-2 border-black-color rounded-xl cursor-pointer hover:scale-110 duration-300">
                Learn More...
              </button>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src={heroImage}
              alt="a young nepali british army"
              className="mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
