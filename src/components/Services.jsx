// Ruta: src/components/Services.jsx
import React from 'react';

const Services = () => {
    const services = [
      {
        icon: '💻',
        title: 'Full Stack Web Development',
        description:
          'Design and development of complete web applications, covering frontend and backend, with focus on clean architecture, performance, and scalability.'
      },
      {
        icon: '⚛️',
        title: 'Frontend Development',
        description:
          'Building modern, responsive user interfaces using React, focusing on usability, performance, and maintainable component-based architectures.'
      },
      {
        icon: '📱',
        title: 'Mobile App Development',
        description:
          'Cross-platform mobile application development using React Native, delivering native-like experiences for both Android and iOS.'
      },
      {
        icon: '🧠',
        title: 'Backend & API Development',
        description:
          'Development of RESTful APIs and backend services, handling business logic, authentication, and system integrations.'
      },
      {
        icon: '🗄️',
        title: 'Database Design & Management',
        description:
          'Strong experience in relational databases, data modeling, query optimization, and maintaining reliable and efficient data structures.'
      },
      {
        icon: '🛠️',
        title: 'System Maintenance & Optimization',
        description:
          'Improving existing systems through refactoring, performance optimization, bug fixing, and feature enhancements.'
      }
    ];
  

  return (
    <section className="services">
      <h2 className="section-title">MY SERVICES</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#" className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;