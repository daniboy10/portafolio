// Ruta: src/App.jsx
import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { portfolioData } from './data/portfolioData';
import Projects from './components/Projects';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleBrandClick = (brandId) => {
    console.log(brandId)
    const projectData = portfolioData[brandId];
   
    if (projectData) {
      setSelectedProject(projectData);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300); // Wait for animation to complete
  };

  return (
    <div className="App">
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Services />
      <Portfolio onBrandClick={handleBrandClick} />
      <Projects onProjectClick={(project) => console.log(project)} />
      <Contact />
      <Footer />
      
      <Modal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        content={selectedProject}
      />
    </div>
  );
}

export default App;