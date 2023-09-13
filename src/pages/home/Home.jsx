import React from 'react';
import Profile from "../../assets/home.jpg";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css"

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>Lucas Gómez. </span>
            Developer
          </h1>
          <p className="home__description">
            Hey! My name is Lucas Gómez, a Full-Stack Developer. I began the
            path of programming when I realized that it was the first thing I
            could study and work on without realizing that it was an obligation.
            So there I discovered what they so often call a vocation.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
}

export default Home