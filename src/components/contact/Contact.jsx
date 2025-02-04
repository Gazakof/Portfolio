import React, { useEffect, useRef, useState } from "react";
import "./contact.css";
import {
  FaArrowRightLong,
  FaFacebookMessenger,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { LuSendHorizonal } from "react-icons/lu";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("formulaire", "contact");
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    try {
      await fetch("/", {
        method: "POST",
        body: "form",
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting the form.", error);
    }
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
      className={`contact section ${isVisible ? "loaded" : ""}`}
      id="contact"
      ref={containerRef}
    >
      <h2 className="section__title from_none">Get in touch</h2>
      <span className="section__subtitle from_none">Contact me</span>

      <div className="contact__container container grid">
        <div className="contact__content from_left from_none">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <MdOutlineEmail className="contact__card-icon" />
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                randriamorasata08@gmail.com
              </span>
              <a
                href="mailto:randriamorasata08@gmail.com"
                className="contact__button"
              >
                Write me
                <FaArrowRightLong className="contact__button-icon" />
              </a>
            </div>

            <div className="contact__card">
              <FaWhatsapp className="contact__card-icon" />
              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">+261 38 54 265 13</span>
              <a
                href="https://wa.me/261385426513"
                target="_blank"
                className="contact__button"
              >
                Write me
                <FaArrowRightLong className="contact__button-icon" />
              </a>
            </div>

            <div className="contact__card">
              <FaFacebookMessenger className="contact__card-icon" />
              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">Ezra R-Sata</span>
              <a
                href="https://m.me/Ezra_R-Sata"
                target="_blank"
                className="contact__button"
              >
                Write me
                <FaArrowRightLong className="contact__button-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content from_right from_none">
          <h3 className="contact__title">Write me your project</h3>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="contact__form"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="formulaire" value="contact" />
            <div className="contact__form-container">
              <label htmlFor="name" className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact__form-input"
                placeholder="Insert your name"
                required
              />
            </div>

            <div className="contact__form-container">
              <label htmlFor="email" className="contact__form-tag">
                Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact__form-input"
                placeholder="Insert your email"
                required
              />
            </div>

            <div className="contact__form-container contact__form-area">
              <label for="message" className="contact__form-tag">
                Project
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact__form-input"
                placeholder="Write our project"
                cols={30}
                rows={10}
                required
              />
            </div>
            <button type="submit" className="button button__flex">
              Send Message
              <LuSendHorizonal className="icon-hello" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
