import React from "react";
import { data } from "../utilis/data";

const Services = () => {
  const { services } = data;
  return (
    <div>
      <div className="flex flex-col gap-4 py-8 px-16">
        <p className="text-2xl md:text-3xl font-medium uppercase">
          BraveGurkha
        </p>
        <p className="text-2xl md:text-3xl font-medium inline border-b-4 border-highlight-green">
          Our Services
        </p>
        <div className="flex-col md:flex flex-wrap gap-2">
          {services.map((service, index) => {
            const { title, history, imageUrl, btnLink } = service;
            return (
              <div className="w-full">
                <div className="w-full">
                  <img src={imageUrl} alt="soldiers of different country" />
                </div>
                <div>
                  <p>{title}</p>
                  <p>{history}</p>
                  <p>{btnLink}</p>
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
