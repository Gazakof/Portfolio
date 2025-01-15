import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Ezra
        </a>
        <div className="nav__menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                !icon! Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                !icon! About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                !icon! Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                !icon! Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                !icon! Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                !icon! Contact
              </a>
            </li>
          </ul>
          !icon!
        </div>

        <div className="nav__toggle">!icon!</div>
      </nav>
    </header>
  );
};

export default Header;
