import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import { LuMouse } from "react-icons/lu";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__sroll-button button__flex">
        <LuMouse className="home__scroll-icon" />
        <span className="home__scroll-name">Sroll Down</span>
        <FaArrowDown className="home__scroll-arrow" />
      </a>
    </div>
  );
};

export default ScrollDown;
