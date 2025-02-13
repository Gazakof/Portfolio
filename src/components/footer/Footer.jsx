import React, { useEffect, useRef, useState } from "react";
import "./footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
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
    <footer className="footer">
      <div className={`${isVisible ? "loaded" : ""}`} ref={containerRef}>
        <div className="footer__container container from_bottom from_none">
          <h1 className="footer__title">Ezra</h1>
          <ul className="footer__list">
            <li>
              <a href="#" className="footer__link">
                Home
              </a>
            </li>
            <li>
              <a href="#studies" className="footer__link">
                Studies
              </a>
            </li>
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="footer__link">
                Projects
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://www.linkedin.com/in/ezra-randriamorasata"
              className="footer__social-icon"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Gazakof"
              className="footer__social-icon"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
