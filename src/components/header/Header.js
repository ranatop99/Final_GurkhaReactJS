import React from "react";
import HeroPage from "./heropage/HeroPage";
import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar />
      <HeroPage />
    </div>
  );
};

export default Header;
