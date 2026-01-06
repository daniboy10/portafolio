// Ruta: src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">ABOUT ME</h2>
      <div className="about-content">
        <img src="/img/completo.jpg" alt="About" className="about-image" />
        <div className="about-info">
          <h3>Full Stack Developer</h3>
          <p>
            Full Stack Developer with solid experience building end-to-end web applications.
            Skilled in designing and developing responsive user interfaces, implementing
            robust backend logic, and integrating databases and APIs. Comfortable working
            across the entire development lifecycle, from planning and architecture to
            implementation, testing, and maintenance, always focused on clean code,
            performance, and user experience.
          </p>

          <div className="info-grid">
            <div className="info-item"><strong>Name:</strong> Daniel Monroy</div>
            <div className="info-item"><strong>Birthday:</strong> 10 Marzo 1994</div>
            <div className="info-item"><strong>Degree:</strong> Master</div>
            <div className="info-item"><strong>Experience:</strong> 5 Years</div>
            <div className="info-item"><strong>Phone:</strong> 5525219488</div>
            <div className="info-item"><strong>Email:</strong> monroydaniiel@gmail.com</div>
            <div className="info-item"><strong>Freelance:</strong> Available</div>
          </div>

          <div className="hero-buttons">
            <a href="#contact" className="btn">Hire Me</a>
            <a href="#about" className="btn">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;