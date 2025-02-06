import React, { useEffect, useRef, useState } from "react";
import Social from "./Social";
import "./home.css";
import Data from "./Data";

const Home = () => {
  const containerRef = useRef(null);
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
      if (containerRef.current) {
        obsever.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div
          className={`home__content grid ${isVisible ? "loaded" : ""}`}
          ref={containerRef}
        >
          <Social />

          <div className="home__img from_bottom from_none"></div>

          <Data />
        </div>
      </div>
    </section>
  );
};

export default Home;
