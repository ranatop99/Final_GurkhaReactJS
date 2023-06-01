import React from "react";
import { data } from "../../../utilis/data";

const Navbar = () => {
  const { menuslist } = data;
  return (
    <div className="flex items-center justify-between w-full h-20 px-4">
      <div>
        <p className="text-2xl font-signature text-primary-color uppercase tracking-wide ml-2">
          BraveGurkha
        </p>
      </div>
      <div>
        <ul className="hidden md:flex">
          {menuslist.map((singlemenu, id) => {
            const { menu } = singlemenu;
            return (
              <li
                key={id}
                className="px-4 captalize cursor-pointer font-medium  text-primary-color"
              >
                {menu}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
