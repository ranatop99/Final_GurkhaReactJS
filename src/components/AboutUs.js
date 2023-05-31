import React from "react";
import { data } from "../utilis/data";

const AboutUs = () => {
  const { aboutImageUrl, aboutSection1, aboutSection2 } = data;
  return (
    <div>
      <div className="flex flex-col gap-4 py-8 px-16 md:flex-col">
        <p className="text-2xl md:text-4xl font-medium">Why Brave Gurkha?</p>
        <div className=" gap-4 justify-center mx-auto items-cenetr md:flex">
          <img
            src={aboutImageUrl}
            alt="retired army personnel"
            className="rounded-full"
          />
          <p className="text-l pt-4">{aboutSection1}</p>
          <p className="text-l pt-4">{aboutSection2}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
