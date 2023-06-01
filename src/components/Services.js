import React from "react";
import { data } from "../utilis/data";

const Services = () => {
  const { services } = data;
  return (
    <div>
      <div className="flex flex-col gap-4 py-8 px-16">
        <p className="text-2xl md:text-3xl text-center font-medium uppercase text-secondary-color">
          BraveGurkha
        </p>
        <p className="text-2xl md:text-3xl text-center font-medium inline border-b-4 border-highlight-green">
          Our Services
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const { title, history, imageUrl, btnLink } = service;
            return (
              <div className="w-96">
                <div className="w-full">
                  <img
                    src={imageUrl}
                    alt="soldiers of different country"
                    className="bg-dark-green w-full h-screen max-h-[50vh] object-contain"
                  />
                </div>
                <div className="flex md:flex flex-col justify-center p-4 w-full min-h-[70vh] bg-secondary-color">
                  <p className="text-dark-green font-bold text-xl text-center">
                    {title}
                  </p>
                  <p className="text-white-color">{history}</p>
                  <p className="py-4 px-12 bg-dark-green text-center text-white-color hover:scale-110 duration-300">
                    {btnLink}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
