import React, { useState } from 'react';
import { motion } from 'framer-motion';
import webinarData from './webinarData';
import './Webinars.css';

const Webinars = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderWebinarContent = () => {
    if (!selectedCategory) {
      return null;
    }

    const webinar = webinarData[selectedCategory];

    return (
      <motion.div 
        className="webinar-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3>{selectedCategory}</h3>
        <p><strong>Duration:</strong> {webinar.Duration}</p>
        <p><strong>Course:</strong> {webinar.Course}</p>
        <p><strong>Topics Covered:</strong></p>
        <ul>
          {webinar.TopicsCovered.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
        <p><strong>Benefits:</strong></p>
        <ul>
          {webinar.Benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </motion.div>
    );
  };

  return (
    <div className="webinars">
      <motion.div 
        className="webinar-description"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="webinar-text">
          <h2>Upcoming Webinar</h2>
          <p>Join us for our upcoming webinar where we will cover the latest trends and insights in the industry. Our expert speakers will guide you through the most important topics and answer your questions.</p>
        </div>
        <div className="webinar-image">
          <motion.img 
            src="/webinar.jpg" 
            alt="Webinar" 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      <div className="webinar-categories">
        {Object.keys(webinarData).map((category, index) => (
          <motion.button 
            key={index} 
            className="webinar-category-button" 
            onClick={() => setSelectedCategory(category)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {renderWebinarContent()}
    </div>
  );
};

export default Webinars;
