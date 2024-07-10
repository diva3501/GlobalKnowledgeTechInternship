import React, { useState } from 'react';
import { motion } from 'framer-motion';
import webinarData from './webinarData';
import './Webinars.css';

const Webinars = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEnrollButtonClick = () => {
    setShowEnrollModal(true);
  };

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
 
    console.log(formData);
  
    setFormData({
      name: '',
      email: '',
      phone: '',
    });
    setShowEnrollModal(false);
  };

  const closeModal = () => {
    setShowEnrollModal(false);
  };

  const renderWebinarContent = () => {
    if (!selectedCategory) {
      return (
        <div className="initial-message">
          
        </div>
      );
    }

    if (selectedCategory === 'Upcoming Webinar') {
      const upcomingWebinars = webinarData[selectedCategory];

      return (
        <motion.div
          className="webinars-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>{selectedCategory}</h3>
          <div className="webinars-list">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={index}
                className="webinar-card"
                whileHover={{ scale: 1.05 }}
              >
                <h4>{webinar.CourseTitle}</h4>
                <p>{webinar.Description}</p>
                <motion.button
                  className="enroll-button"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onClick={handleEnrollButtonClick}
                >
                  Enroll
                </motion.button>
              </motion.div>
            ))}
          </div>

          {showEnrollModal && (
            <motion.div
              className="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="modal-content"
                initial={{ y: -50 }}
                animate={{ y: 0 }}
              >
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <form onSubmit={handleEnrollSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone"
                    required
                  />
                  <button type="submit" className="submit-button">
                    Submit
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      );
    }

    const webinars = webinarData[selectedCategory];

    return (
      <motion.div
        className="webinars-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="back-arrow" onClick={() => setSelectedCategory(null)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 11H7.41l2.29-2.29c.39-.39.39-1.02 0-1.41s-1.02-.39-1.41 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L7.41 13H20c.55 0 1-.45 1-1s-.45-1-1-1z" />
          </svg>
        </div>
        <h3>{selectedCategory}</h3>
        <div className="webinars-list">
          {webinars.map((webinar, index) => (
            <motion.div
              key={index}
              className="webinar-card"
              whileHover={{ scale: 1.05 }}
            >
              <h4>{webinar.CourseTitle}</h4>
              <p>{webinar.Description}</p>
              <motion.button
                className="enroll-button"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={handleEnrollButtonClick}
              >
                Enroll
              </motion.button>
            </motion.div>
          ))}
        </div>

        {showEnrollModal && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="modal-content"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
            >
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <form onSubmit={handleEnrollSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone"
                  required
                />
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="webinars-container">
      <motion.div
        className="webinars-top-section"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="webinars-categories">
          {Object.keys(webinarData)
            .filter((category) => category !== 'Upcoming Webinar')
            .map((category, index) => (
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

      {renderWebinarContent()}

      <motion.div
        className="webinars-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p>
          Join us for our upcoming webinar where we will cover the latest
          trends and insights in the industry. Our expert speakers will guide
          you through the most important topics and answer your questions.
        </p>
        <motion.button
          className="upcoming-webinar-button"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onClick={() => setSelectedCategory('Upcoming Webinar')}
        >
          Upcoming Webinar
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Webinars;
