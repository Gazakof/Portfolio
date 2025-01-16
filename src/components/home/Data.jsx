import React from "react";
import { LuSend } from "react-icons/lu";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Ezra RANDRIAMORASATA</h1>

      <h3 className="home__subtitle">Web Developer</h3>
      <p className="home__description">Lorem ipsum</p>
      <a href="#contact" className="button button__flex">
        Say, Hello
        <LuSend className="icon-hello" />
      </a>
    </div>
  );
};

export default Data;
