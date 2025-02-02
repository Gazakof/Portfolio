import React from "react";
import "./contact.css";
import {
  FaArrowRightLong,
  FaFacebookMessenger,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { LuSend } from "react-icons/lu";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <MdOutlineEmail className="contact__card-icon" />
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">ezra43v3@gmail.com</span>
              <a href="" className="contact__button">
                Write me
                <FaArrowRightLong className="contact__button-icon" />
              </a>
            </div>

            <div className="contact__card">
              <FaWhatsapp className="contact__card-icon" />
              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">+26138</span>
              <a href="" className="contact__button">
                Write me
                <FaArrowRightLong className="contact__button-icon" />
              </a>
            </div>

            <div className="contact__card">
              <FaFacebookMessenger className="contact__card_icon" />
              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">Ezra R-Sata</span>
              <a href="" className="contact__button">
                Write me
                <FaArrowRightLong className="contact__button-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
          <form className="contact__form">
            <div className="contact__form-container">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-container">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact__form-container contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                className="contact__form-input"
                placeholder="Write our project"
                cols={30}
                rows={10}
              />
            </div>
            <button className="button button__flex">
              Send Message
              <LuSend className="icon-hello" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
