// Ruta: src/components/Portfolio.jsx
import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    '/img/nestle.jpg',
    '/img/tous.jpg',
    '/img/cuidado.jpg',
    '/img/bbva.jpg',
    '/img/banorte.png',
    '/img/ghandi.jpg'
  ];

  return (
    <section className="portfolio">
      <h2 className="section-title">BRANDS I'VE WORKED WITH</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div className="portfolio-item" key={index}>
            <img src={item} alt={`Portfolio ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;