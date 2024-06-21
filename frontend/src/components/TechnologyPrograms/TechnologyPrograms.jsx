import React, { useEffect, useRef, useState } from 'react';
import './TechnologyPrograms.css';
import { FaCloud, FaBrain, FaCube, FaRobot, FaDatabase } from 'react-icons/fa';

const programs = [
  { name: 'Cloud Architect', icon: <FaCloud className="tp-program-icon" /> },
  { name: 'Data Science', icon: <FaBrain className="tp-program-icon" /> },
  { name: 'Blockchain', icon: <FaCube className="tp-program-icon" /> },
  { name: 'Artificial Intelligence', icon: <FaRobot className="tp-program-icon" /> },
  { name: 'Machine Learning', icon: <FaDatabase className="tp-program-icon" /> }
];

const TechnologyPrograms = () => {
  const [isVisible, setIsVisible] = useState(Array(programs.length).fill(false));
  const cardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null, // use document as viewport
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of element is visible
    };

    const observers = cardRefs.current.map((cardRef, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            observer.unobserve(entry.target);
          }
        },
        observerOptions
      );
    });

    cardRefs.current.forEach((cardRef, index) => {
      observers[index].observe(cardRef);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="tp-technology-programs">
      <h2 className="tp-heading">Technological Programs</h2>
      <div className="tp-card-container">
        {programs.map((program, index) => (
          <div ref={el => cardRefs.current[index] = el} className={`tp-card ${isVisible[index] ? 'animate-in' : ''}`} key={index}>
            <div className="tp-icon-container">
              {program.icon}
            </div>
            <div className="tp-program-name">{program.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyPrograms;
