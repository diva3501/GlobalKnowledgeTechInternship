import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import courseworkData from '../../data/courseworkData';
import './Coursework.css';

const Coursework = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [displayedCourses, setDisplayedCourses] = useState(courseworkData[selectedCategory].slice(0, 6));
  const [showAll, setShowAll] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('left');
  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    if (Object.keys(courseworkData).indexOf(selectedCategory) < Object.keys(courseworkData).indexOf(category)) {
      setAnimationDirection('left');
    } else {
      setAnimationDirection('right');
    }

    setSelectedCategory(category);
    setShowAll(false);

    setTimeout(() => {
      setDisplayedCourses(courseworkData[category].slice(0, 6));
    }, 300);
  };

  const handleShowMore = () => {
    setDisplayedCourses(courseworkData[selectedCategory]);
    setShowAll(true);
  };

  const handleCourseClick = (courseCode) => {
    navigate(`/course/${courseCode}`);
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
        <div className="coursework-cards">
          {displayedCourses.map((course, index) => (
            <div key={index} className="course-card" onClick={() => handleCourseClick(course.courseCode)}>
              <img src={course.image} alt={course.courseTitle} className="course-image" />
              <h3 className="course-title">{course.courseTitle}</h3>
              <p className="course-description">
                {course.description.length > 100 ? `${course.description.substring(0, 100)}...` : course.description}
              </p>
            </div>
          ))}
        </div>
        {!showAll && displayedCourses.length < courseworkData[selectedCategory].length && (
          <button className="show-more" onClick={handleShowMore}>Explore More</button>
        )}
      </div>
    </div>
  );
};

export default Coursework;
