import React from "react";
import "./about.css";
import Info from "./Info";
import AboutImg from "../../assets/profile.jpg";
import CV from "../../assets/CV.pdf";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">Frontend developer ...</p>
          <a download="" href={CV} className="button button__flex">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
