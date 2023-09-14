import React from 'react'
import {
  FaEnvelopeOpen,
  FaTwitter,
  FaGithubSquare,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";
import { FiSend, FiExternalLink } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get in <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Feel Free to Contact Me!</h3>

          <p className="contact__description">
            Always open to discuss new projects or opportunities to be part of!
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FiExternalLink />{" "}
              <a href="mailto:gomezlucas712@gmail.com">
                <FaEnvelopeOpen className="info__icon" />
              </a>
              <div>
                <span className="info__title">Mail me</span>
                <a href="mailto:gomezlucas712@gmail.com">
                  <h4 className="info__desc">gomezlucas712@gmail.com</h4>
                </a>
              </div>
            </div>

            <div className="info__item">
              <FiExternalLink />{" "}
              <a href="https://www.linkedin.com/in/lucasgomezapp/">
                <FaLinkedin className="info__icon" />{" "}
              </a>
              <div>
                <span className="info__title">LinkedIn</span>
                <a href="https://www.linkedin.com/in/lucasgomezapp/">
                  <h4 className="info__desc">Lucas Gomez</h4>
                </a>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://github.com/Vguetz"
              className="contact__social-link"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://twitter.com/Vguetz"
              className="contact__social-link"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/vguetz/"
              className="contact__social-link"
            >
              <FaInstagram className="contact_social-logo" />
            </a>
          </div>
        </div>
        <form
          action="https://formsubmit.co/f4c70f5c3d5663048bd0d4bbe4166dc4"
          method="POST"
          className="contact__form"
        >
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                name="email"
                id="email"
                required
                type="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                name="subject"
                required
                id="subject"
                placeholder="Your Subject"
                className="form__control"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              name="message"
              required
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact