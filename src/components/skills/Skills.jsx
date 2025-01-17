import React from "react";
import "./skills.css";
import View from "./View";
import Model from "./Model";

const Skills = () => {
  return (
    <section className="skills section" id="skils">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <View />
        <Model />
      </div>
    </section>
  );
};

export default Skills;
