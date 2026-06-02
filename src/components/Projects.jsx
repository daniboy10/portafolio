// Ruta: src/components/Projects.jsx
import React from 'react';
import './Projects.css';

const Projects = ({ onProjectClick }) => {
    const projects = [
        {
            id: 'project-entrefamilia',
            title: 'EntreFamilia',
            category: 'PWA · Laravel · jQuery',
            description:
                'Progressive Web App designed to help families manage and track shared expenses in a collaborative environment. Features intuitive expense logging, category breakdowns, and real-time balance tracking across family members.',
            image: '/img/entre.png',
            link: 'https://entrefamilia.unextly.com/',
        },
        {
            id: 'project-vital',
            title: 'Vital – Kitchen Remodeling Platform',
            category: 'Full Stack · PHP · React',
            description:
                'Web platform for a kitchen remodeling company, featuring an interactive product showcase, appointment scheduling for clients, and a full admin panel to manage employees, orders, and customers.',
            image: '/img/vital.jpg',
            link: 'https://vital.unextly.com/',
        },
    ];

    const handleClick = (project) => {
        console.log('Project clicked:', project);
        if (onProjectClick) onProjectClick(project);
    };

    return (
        <section className="projects-section" id="projects">
            <h2 className="section-title">PORTFOLIO</h2>
            <p className="projects-subtitle">A selection of projects I've built and shipped</p>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div
                        className="project-card"
                        key={project.id}
                        onClick={() => handleClick(project)}
                    >
                        <div className="project-image-wrapper">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-overlay">
                                <span className="project-cta">View Detailss →</span>
                            </div>
                        </div>

                        <div className="project-info">
                            <span className="project-category">{project.category}</span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <a
                                className="project-btn"
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                            >
                                See Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;