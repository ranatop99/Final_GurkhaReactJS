import React from "react";
import { data } from "../utilis/data";

const Testimonials = () => {
  const { testimonials } = data;

  return (
    <div>
      <div className="flex flex-col gap-4 py-8 px-16">
        <div className="sm:flex-col text-center">
          <p className="text-2xl md:text-3xl capitalize">
            What our trainee says
          </p>
          <p className="py-2 text-xl">Testimonials</p>
        </div>
        <div className="sm:flex flex-wrap gap-4">
          {testimonials.map((testimonial, index) => {
            const { imageLink, statement, name, position } = testimonial;
            return (
              <div key={index} className="w-96">
                <div className="w-full bg-light-green-color">
                  <img
                    src={imageLink}
                    alt="trainee photos"
                    className="w-full h-1/2 object-contain rounded-full"
                  />
                </div>
                <div className="bg-light-green-color sm:flex flex-col gap-4 px-16 py-4 text-center mx-auto">
                  <div>
                    <p>{statement}</p>
                  </div>
                  <div>
                    <p className="text-dark-green text-base font-medium">
                      {name}
                    </p>
                    <p className="text-secondary-color">{position}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
