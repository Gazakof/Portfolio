import React, { useEffect, useRef, useState } from "react";
import "./skills.css";
import Front from "./Front";
import Back from "./Back";

const Skills = () => {
  const containerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const obsever = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (containerRef.current) {
      obsever.observe(containerRef.current);
    }

    return () => {
      obsever.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section
      className={`skills section ${isVisible ? "loaded" : ""}`}
      id="skills"
      ref={containerRef}
    >
      <h2 className="section__title from_none">Skills</h2>
      <span className="section__subtitle from_none">My technical level</span>
      <div className="skills__container container grid from_none">
        <Front />
        <Back />
      </div>
    </section>
  );
};

export default Skills;
