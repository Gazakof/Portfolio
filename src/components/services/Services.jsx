import React, { useEffect, useRef, useState } from "react";
import "./services.css";
import { FaArrowRightLong, FaCode } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { LiaCheckCircle } from "react-icons/lia";
import { LuQrCode } from "react-icons/lu";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const containerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const obesver = new IntersectionObserver(
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
      obesver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        obesver.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`services section ${isVisible ? "loaded" : ""}`}
      id="services"
      ref={containerRef}
    >
      <h2 className="section__title from_none from_top">Services</h2>
      <span className="section__subtitle from_none"> What I offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div className="from_left">
            <FaCode className="services__icon" />
            <h3 className="services__title">
              Develop <br />
              Website
            </h3>
          </div>
          <span
            className="services__button from_left"
            onClick={() => {
              toggleTab(1);
            }}
          >
            View more
            <FaArrowRightLong className="services__button-icon" />
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <IoClose
                className="services__modal-close"
                onClick={() => {
                  toggleTab(0);
                }}
              />
              <h3 className="services__modal-title">Develop Website</h3>
              <p className="services__modal-description">
                {" "}
                Lorem Service with more than 3 ...
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <LiaCheckCircle className="services__modal-icon" />
                  <p className="dervices__modal-info">
                    I develop the user interface
                  </p>
                </li>
                <li className="services__modal-service">
                  <LiaCheckCircle className="services__modal-icon" />
                  <p className="dervices__modal-info">
                    I develop the user interface
                  </p>
                </li>
                <li className="services__modal-service">
                  <LiaCheckCircle className="services__modal-icon" />
                  <p className="dervices__modal-info">
                    I develop the user interface
                  </p>
                </li>
                <li className="services__modal-service">
                  <LiaCheckCircle className="services__modal-icon" />
                  <p className="dervices__modal-info">
                    I develop the user interface
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div className="from_right">
            <LuQrCode className="services__icon" />
            <h3 className="services__title">
              {" "}
              Develop <br />
              App
            </h3>
          </div>
          <span
            className="services__button from_right"
            onClick={() => {
              toggleTab(2);
            }}
          >
            View more
            <FaArrowRightLong className="services__button-icon" />
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <IoClose
                className="services__modal-close"
                onClick={() => {
                  toggleTab(0);
                }}
              />
              <h3 className="services__modal-title">Develop App</h3>
              <p className="services__modal-description">
                {" "}
                Lorem Service with more than 3 ...
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <LiaCheckCircle className="services__modal-icon" />
                  <p className="dervices__modal-info">
                    I develop the user interface
                  </p>
                </li>
                <li className="services__modal-service">
                  <LiaCheckCircle className="services__modal-icon" />
                  <p className="dervices__modal-info">
                    I develop the user interface
                  </p>
                </li>
                <li className="services__modal-service">
                  <LiaCheckCircle className="services__modal-icon" />
                  <p className="dervices__modal-info">
                    I develop the user interface
                  </p>
                </li>
                <li className="services__modal-service">
                  <LiaCheckCircle className="services__modal-icon" />
                  <p className="dervices__modal-info">
                    I develop the user interface
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
