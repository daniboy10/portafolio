// Ruta: src/components/Portfolio.jsx
import React from 'react';

const Portfolio = ({ onBrandClick }) => {
  const portfolioItems = [
    { id: 'nestle', image: '/img/nestle.jpg', name: 'Nestlé' },
    { id: 'tous', image: '/img/tous.jpg', name: 'Tous' },
    { id: 'cuidado', image: '/img/cuidado.jpg', name: 'Cuidado con el Perro' },
    { id: 'bbva', image: '/img/bbva.jpg', name: 'BBVA' },
    { id: 'banorte', image: '/img/banorte.png', name: 'Banorte' },
    { id: 'ghandi', image: '/img/ghandi.jpg', name: 'Gandhi' },
    { id: 'gnp', image: '/img/gnp.png', name: 'Gnp' }
  ];

  const handleItemClick = (item) => {
    //console.log(item.id)
    onBrandClick(item.id);
  };

  return (
    <section className="portfolio">
      <h2 className="section-title">BRANDS I'VE WORKED WITH</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div 
            className="portfolio-item" 
            key={item.id}
            onClick={() => handleItemClick(item)}
            style={{ cursor: 'pointer' }}
          >
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;