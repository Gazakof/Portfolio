import React from "react";
import "./studies.css";
import { GiGraduateCap } from "react-icons/gi";
import { IoIosCalendar } from "react-icons/io";

const Studies = () => {
  return (
    <section className="studies section" id="studies">
      <h2 className="section__title">Studies</h2>
      <span className="section__subtitle">My pesonal journey</span>

      <div className="studies__container container">
        <div className="studies__tabs">
          <div className="studies__button button__flex">
            <GiGraduateCap />
            Education
          </div>
        </div>
      </div>
      <div className="studies__section">
        <div className="studies__content">
          <div className="studies__data">
            <div></div>
            <div>
              <span className="studies__rounder"></span>
              <span className="studies__line"></span>
            </div>
            <div>
              <h3 className="studies__title">Informatique</h3>
              <span className="studies__subtitle">ISPM</span>
              <p className="studies__description">Lorem</p>
              <div className="studies__calendar">
                <IoIosCalendar className="studies__icon" />
                2021 - 2024
              </div>
            </div>
          </div>

          <div className="studies__data">
            <div>
              <h3 className="studies__title">English for Specific Purpose</h3>
              <span className="studies__subtitle">
                Université d'Antananarivo
              </span>
              <p className="studies__description">Lorem</p>
              <div className="studies__calendar">
                <IoIosCalendar className="studies__icon" />
                2018 - 2021
              </div>
            </div>
            <div>
              <span className="studies__rounder"></span>
              <span className="studies__line"></span>
            </div>
          </div>

          <div className="studies__data">
            <div></div>
            <div>
              <span className="studies__rounder"></span>
              <span className="studies__line"></span>
            </div>
            <div>
              <h3 className="studies__title">Bacc</h3>
              <span className="studies__subtitle">Lycée Nanisana</span>
              <p className="studies__description">Lorem</p>
              <div className="studies__calendar">
                <IoIosCalendar className="studies__icon" />
                2017 - 2018
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studies;
