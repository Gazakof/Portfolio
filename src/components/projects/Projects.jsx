import React, { useEffect, useRef, useState } from "react";
import "./projects.css";
import { Data } from "./Data";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(1);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % Data.length);
  };
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + Data.length) % Data.length);
  };
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      className={`projects section ${isVisible ? "loaded" : ""}`}
      id="projects"
      ref={containerRef}
    >
      <h2 className="section__title from_top from_none"> Projects</h2>
      <span className="section__subtitle from_top from_none">
        Showcase of my recent projects
      </span>

      <div className="projects__container container from_bottom from_none">
        <div className="projects__content">
          <TbPlayerTrackPrev
            onClick={handlePrev}
            className="projects__buttonP"
          />
          <div className="projects__card">
            {Data.map((image, index) => (
              <div
                key={index}
                className={`projects__card-slide 
                  ${
                    index === activeIndex
                      ? "center"
                      : index === (activeIndex - 1 + Data.length) % Data.length
                      ? "left"
                      : index === (activeIndex + 1) % Data.length
                      ? "right"
                      : "hidden"
                  } 
                `}
                onClick={() => {
                  goToSlide(index);
                }}
              >
                <img src={image.image} className="projects__card-img" />
                {index === activeIndex && (
                  <div className="projects__card-description">
                    <p className="projects__card-title">{image.title}</p>
                    <p>{image.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <TbPlayerTrackNext
            onClick={handleNext}
            className="projects__buttonN"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
