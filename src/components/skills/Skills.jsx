import React from "react";
import "./skills.css";
import Front from "./Front";
import Back from "./Back";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <Front />
        <Back />
      </div>
    </section>
  );
};

export default Skills;
