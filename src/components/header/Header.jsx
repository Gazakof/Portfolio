import React, { useState } from "react";
import "./header.css";
import { CiHome, CiImageOn } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { LuSend } from "react-icons/lu";
import { FaBriefcase } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { TiThMenuOutline } from "react-icons/ti";
import { LiaFileDownloadSolid } from "react-icons/lia";
import CV from "../../assets/CV_Ezra.pdf";

const Header = () => {
  const [menu, showMenu] = useState(false);
  const [activeNav, setActiveNave] = useState("#home");

  return (
    <header className="header">
      <nav className="nav">
        <a href="index.html" className="nav__logo">
          Ezra
        </a>
        <div className={menu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNave("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <CiHome className="nav__icon" /> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#studies"
                onClick={() => setActiveNave("#studies")}
                className={
                  activeNav === "#studies"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <GoPerson className="nav__icon" /> Studies
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNave("#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <FaBriefcase className="nav__icon" /> Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                onClick={() => setActiveNave("#projects")}
                className={
                  activeNav === "#projects"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <CiImageOn className="nav__icon" /> Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNave("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
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
