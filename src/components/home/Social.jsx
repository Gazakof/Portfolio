import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Social = () => {
  return (
    <div className="home__social from_left from_none">
      <a
        href="https://www.linkedin.com/in/ezra-randriamorasata"
        className="home__social-icon"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/Gazakof"
        className="home__social-icon"
        target="_blank"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Social;
