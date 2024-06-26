import React, { useState } from "react";
import courseworkData from "../../data/courseworkData";
import "./Coursework.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Coursework = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [displayedCourses, setDisplayedCourses] = useState(
    courseworkData[selectedCategory].slice(0, 6)
  );
  const [showAll, setShowAll] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setDisplayedCourses(courseworkData[category].slice(0, 6));
    setShowAll(false);
    setSelectedCourse(null);
  };

  const handleShowMore = () => {
    setDisplayedCourses(courseworkData[selectedCategory]);
    setShowAll(true);
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="coursework-section container py-5">
      <nav className="coursework-nav d-flex justify-content-center mb-4">
        {Object.keys(courseworkData).map((category) => (
          <button
            key={category}
            className={`nav-button btn btn-outline-primary mx-2 ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </nav>
      <div className="coursework-content mt-4">
        {selectedCourse ? (
          <div className="course-detail card p-4 shadow animate__animated animate__fadeIn">
            <button
              className="back-button btn btn-primary mb-4"
              onClick={() => setSelectedCourse(null)}
            >
              Back
            </button>
            <img
              src={selectedCourse.image}
              alt={selectedCourse.title}
              className="course-detail-image mb-4"
            />
            <h3 className="course-detail-title">{selectedCourse.title}</h3>
            <p className="course-detail-description">
              {selectedCourse.description}
            </p>
          </div>
        ) : (
          <div className="coursework-cards row">
            {displayedCourses.map((course, index) => (
              <div
                key={index}
                className="course-card col-md-4 mb-4"
                onClick={() => handleCourseClick(course)}
              >
                <div className="card h-100 shadow-sm animate__animated animate__fadeInUp">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="course-image card-img-top"
                  />
                  <div className="card-body">
                    <h3 className="course-title card-title">{course.title}</h3>
                    <p className="course-description card-text">
                      {course.description.length > 100
                        ? `${course.description.substring(0, 100)}...`
                        : course.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {!showAll &&
          displayedCourses.length < courseworkData[selectedCategory].length && (
            <button
              className="show-more btn btn-primary mt-4"
              onClick={handleShowMore}
            >
              Explore More
            </button>
          )}
      </div>
    </div>
  );
};

export default Coursework;
