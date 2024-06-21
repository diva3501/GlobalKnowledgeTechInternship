import React from 'react';
import './GlobalPartner.css';
import { motion } from 'framer-motion';

const logos = [
  { src: '/global1.png', alt: 'Global Partner 1' },
  { src: '/global2.png', alt: 'Global Partner 2' },
  { src: '/global3.png', alt: 'Global Partner 3' },
  { src: '/global4.png', alt: 'Global Partner 4' },
  { src: '/global5.png', alt: 'Global Partner 5' }
];

const GlobalPartner = () => {
  return (
    <div className="global-partner">
      <h2 className="global-partner-heading">Our Global Partners</h2>
      <div className="logo-container">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="logo-wrapper"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={logo.src} alt={logo.alt} className="logo-image" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GlobalPartner;
