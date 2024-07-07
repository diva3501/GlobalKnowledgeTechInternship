import React, { useEffect, useRef, useState } from "react";
import "./TechnologyPrograms.css";
import { FaCloud, FaBrain, FaCube, FaRobot, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

const programs = [
  { name: "Cloud Architect", icon: <FaCloud className="tp-program-icon" /> },
  { name: "Data Science", icon: <FaBrain className="tp-program-icon" /> },
  { name: "Blockchain", icon: <FaCube className="tp-program-icon" /> },
  {
    name: "Artificial Intelligence",
    icon: <FaRobot className="tp-program-icon" />,
  },
  {
    name: "Machine Learning",
    icon: <FaDatabase className="tp-program-icon" />,
  },
];

const TechnologyPrograms = () => {
  const [isVisible, setIsVisible] = useState(Array(programs.length).fill(false));
  const cardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observers = cardRefs.current.map((cardRef, index) => {
      return new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
          observers[index].unobserve(entry.target); // Fixed observer disconnect
        }
      }, observerOptions);
    });

    cardRefs.current.forEach((cardRef, index) => {
      observers[index].observe(cardRef);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="tp-technology-programs">
      <h2 className="tp-heading">Technological Programs</h2>
      <div className="tp-card-container">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="tp-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible[index] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="tp-icon-container">
              <motion.div whileHover={{ scale: 1.2 }}>{program.icon}</motion.div>
            </div>
            <div className="tp-program-name">{program.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyPrograms;
