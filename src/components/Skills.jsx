// Ruta: src/components/Skills.jsx
import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skills = [
    { name: 'TYPESCRIPT', percentage: 70, color: '#0047ab' },
    { name: 'React Native', percentage: 80, color: '#ffc107' },
    { name: 'PHP', percentage: 90, color: '#dc3545' },
    { name: 'Javascript', percentage: 90, color: '#dc3545' },
    { name: 'React JS', percentage: 95, color: '#333' },
    { name: 'Laravel', percentage: 70, color: '#0047ab' },
    { name: 'MySQLi', percentage: 85, color: '#00758f' },
    { name: 'CSS', percentage: 88, color: '#264de4' },
  ];

  return (
    <section className="skills" ref={skillsRef}>
      <h2 className="section-title">MY SKILLS</h2>
      <div className="skills-grid">
        <div>
          {skills.slice(0, 4).map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skill-header">
                <h4>{skill.name}</h4>
                <span>{skill.percentage}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ 
                    width: isVisible ? `${skill.percentage}%` : '0%',
                    background: skill.color 
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div>
          {skills.slice(4, 8).map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skill-header">
                <h4>{skill.name}</h4>
                <span>{skill.percentage}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ 
                    width: isVisible ? `${skill.percentage}%` : '0%',
                    background: skill.color 
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;