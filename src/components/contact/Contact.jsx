import React, { useEffect, useRef, useState } from "react";
import "./contact.css";
import { FaArrowRightLong, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { LuSendHorizonal } from "react-icons/lu";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("form-name", "contact");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      const response = await fetch("/", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setSubmitted(true);
        setError(false);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Submission failed!");
      }
    } catch (error) {
      setError(true);
      setSubmitted(false);
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
        threshold: 0.2,
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
      <h2 className="section__title from_top from_none">Get in touch</h2>
      <span className="section__subtitle from_none">Contact me</span>

      <div className="contact__container container grid from_bottom from_none">
        <div className="contact__content">
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
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="contact__form"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
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
              <label htmlFor="message" className="contact__form-tag">
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
              ></textarea>
            </div>
            <button type="submit" className="button button__flex">
              Send Message
              <LuSendHorizonal className="icon-hello" />
            </button>
          </form>
          {submitted && (
            <p
              style={{
                color: "green",
                marginTop: "1rem",
              }}
            >
              Thank you! Your message has been sent.
            </p>
          )}
          {error && (
            <p style={{ color: "red", marginTop: "1rem" }}>
              Failed to send message. Try later.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
