import React, { useState } from 'react';
import courseworkData from '../../data/courseworkData';
import './Coursework.css';

const Coursework = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [displayedCourses, setDisplayedCourses] = useState(courseworkData[selectedCategory].slice(0, 6));
  const [showAll, setShowAll] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [animationDirection, setAnimationDirection] = useState('left'); // Animation direction for slide effect

  const handleCategoryChange = (category) => {
    // Determine animation direction based on selected category position
    if (Object.keys(courseworkData).indexOf(selectedCategory) < Object.keys(courseworkData).indexOf(category)) {
      setAnimationDirection('left');
    } else {
      setAnimationDirection('right');
    }

    setSelectedCategory(category);
    setShowAll(false);
    setSelectedCourse(null);

    // Wait for animation to finish before updating displayed courses
    setTimeout(() => {
      setDisplayedCourses(courseworkData[category].slice(0, 6));
    }, 300); // Adjust timing to match your CSS animation duration
  };

  const handleShowMore = () => {
    setDisplayedCourses(courseworkData[selectedCategory]);
    setShowAll(true);
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="coursework">
      <nav className="coursework-nav">
        {Object.keys(courseworkData).map((category) => (
          <button
            key={category}
            className={`nav-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </nav>
      <div className={`coursework-content ${animationDirection}`}>
        {selectedCourse ? (
          <div className="course-detail">
            <button className="back-button" onClick={() => setSelectedCourse(null)}>Back</button>
            <img src={selectedCourse.image} alt={selectedCourse.title} className="course-detail-image" />
            <h3 className="course-detail-title">{selectedCourse.title}</h3>
            <p className="course-detail-description">{selectedCourse.description}</p>
          </div>
        ) : (
          <div className="coursework-cards">
            {displayedCourses.map((course, index) => (
              <div key={index} className="course-card" onClick={() => handleCourseClick(course)}>
                <img src={course.image} alt={course.title} className="course-image" />
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">
                  {course.description.length > 100 ? `${course.description.substring(0, 100)}...` : course.description}
                </p>
              </div>
            ))}
          </div>
        )}
        {!showAll && displayedCourses.length < courseworkData[selectedCategory].length && (
          <button className="show-more" onClick={handleShowMore}>Explore More</button>
        )}
      </div>
    </div>
  );
};

export default Coursework;
