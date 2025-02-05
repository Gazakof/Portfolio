import React from "react";
import "./projects.css";
import { Data } from "./Data";

const Projects = () => {
  return (
    <section className="projects container section" id="projects">
      <h2 className="section__title"> Projects</h2>
      <span className="section__subtitle">List of my recent works</span>

      <div className="projects__container">
        {Data.map(({ id, image, title, description }) => {
          return (
            <div className="projects__card" key={id}>
              <img src={image} alt="" className="projects__img" />
              <h3 className="projects__name">{title}</h3>
              <p className="projects__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
