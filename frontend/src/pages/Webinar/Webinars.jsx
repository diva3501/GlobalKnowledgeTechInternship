import React, { useState } from 'react';
import { motion } from 'framer-motion';
import webinarData from './webinarData';
import './Webinars.css';

const Webinars = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setShowEnrollModal(true);
  };

  const closeModal = () => {
    setShowEnrollModal(false);
  };

  const renderWebinarContent = () => {
    if (!selectedCategory) {
      return null;
    }

    const webinars = webinarData[selectedCategory];

    return (
      <motion.div
        className="webinars-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3>{selectedCategory}</h3>
        <div className="webinars-list">
          {webinars.map((webinar, index) => (
            <motion.div
              key={index}
              className="webinar-card"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleEnrollClick(webinar)}
            >
              <h4>{webinar.CourseTitle}</h4>
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
              <button className="enroll-button">Enroll</button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="webinars-container">
      <motion.div
        className="webinars-description"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="webinars-text">
          <h2>Upcoming Webinar</h2>
          <p>Join us for our upcoming webinar where we will cover the latest trends and insights in the industry. Our expert speakers will guide you through the most important topics and answer your questions.</p>
        </div>
        <div className="webinars-image">
          <motion.img
            src="/webinar.jpg"
            alt="Webinar"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      <div className="webinars-categories">
        {Object.keys(webinarData).map((category, index) => (
          <motion.button
            key={index}
            className="webinars-category-button"
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

      {showEnrollModal && (
        <div className="modal">
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h3>Enroll in {selectedCourse.Course}</h3>
            <form className="enroll-form">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" />

              <label htmlFor="mobile">Mobile Number:</label>
              <input type="text" id="mobile" />

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Webinars;
