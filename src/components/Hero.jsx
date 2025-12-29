// Ruta: src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src="/img/io.png" alt="Kate Winslet" className="hero-image" />
        <div className="hero-text">
          <h2>I'm</h2>
          <h1>Daniel Monroy</h1>
          <h3>Full Stack |  Developer</h3>
          <div className="hero-buttons">
            <a href="/cv.pdf" download className="btn">Download CV</a>
            {/* <button className="play-btn">
              <div className="play-circle"></div>
              Play Video
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;