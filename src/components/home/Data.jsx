import React from "react";
import { LuSendHorizonal } from "react-icons/lu";

const Data = () => {
  return (
    <div className="home__data from_left from_none">
      <h1 className="home__title">Ezra RANDRIAMORASATA</h1>

      <h3 className="home__subtitle">Web Developer</h3>
      <p className="home__description">
        Passionate about web development and innovation, I can turn ideas into
        high-performing digital solutions.
      </p>
      <a href="#contact" className="button button__flex">
        Say, Hello
        <LuSendHorizonal className="icon-hello" />
      </a>
    </div>
  );
};

export default Data;
