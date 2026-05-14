// Ruta: src/components/Modal.jsx
import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, content }) => {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !content) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="modal-content">
          <div className="modal-header">
            <img src={content.logo} alt={content.title} className="modal-logo" />
            <h2 className="modal-title">{content.title}</h2>
            <p className="modal-subtitle">{content.subtitle}</p>
          </div>

          <div className="modal-image-container">
            <img src={content.mainImage} alt={content.title} className="modal-main-image" />
          </div>

          <div className="modal-body">
            <div className="modal-section">
              <h3>Project Overview</h3>
              <p>{content.overview}</p>
            </div>

            <div className="modal-section">
              <h3>Key Features</h3>
              <ul className="modal-features-list">
                {content.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <h3>Technologies Used</h3>
              <div className="modal-tech-tags">
                {content.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="modal-section">
              <h3>My Role</h3>
              <p>{content.role}</p>
            </div>

            {content.achievements && (
              <div className="modal-section">
                <h3>Achievements</h3>
                <ul className="modal-achievements-list">
                  {content.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;