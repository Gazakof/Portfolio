import React from "react";
import "./contact.css";
import {
  FaArrowRightLong,
  FaFacebookMessenger,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

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
          <h3>Write me your project</h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;
