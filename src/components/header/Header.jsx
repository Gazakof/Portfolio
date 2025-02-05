import React, { useState } from "react";
import "./header.css";
import { CiHome, CiImageOn } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { LuSend } from "react-icons/lu";
import { FaBriefcase } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { TiThMenuOutline } from "react-icons/ti";
import { LiaFileDownloadSolid } from "react-icons/lia";
import CV from "../../assets/CV.pdf";

const Header = () => {
  const [menu, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <a href="index.html" className="nav__logo">
          Ezra
        </a>
        <div className={menu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <CiHome className="nav__icon" /> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#studies" className="nav__link">
                <GoPerson className="nav__icon" /> Studies
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <FaBriefcase className="nav__icon" /> Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <CiImageOn className="nav__icon" /> Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <LuSend className="nav__icon" /> Contact
              </a>
            </li>
            <li className="nav__item">
              <a download="" href={CV} className="button__download">
                <p>Download CV</p>
                <LiaFileDownloadSolid className="icon__download" />
              </a>
            </li>
          </ul>

          <IoClose className="nav__close" onClick={() => showMenu(false)} />
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!menu)}>
          <TiThMenuOutline />
        </div>
      </nav>
    </header>
  );
};

export default Header;
