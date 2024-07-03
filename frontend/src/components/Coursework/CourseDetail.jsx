import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import courseworkData from '../../data/courseworkData';
import './coursedetail.css';

const CourseDetail = () => {
  const { courseCode } = useParams();
  const navigate = useNavigate();

  const course = Object.values(courseworkData)
    .flat()
    .find((c) => c.courseCode === courseCode);

  if (!course) {
    return <div className="course-detail">Course not found</div>;
  }

  return (
    <div className="course-detail">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <img src={course.image} alt={course.courseTitle} className="course-detail-image" />
      <h3 className="course-detail-title">{course.courseTitle}</h3>
      
      <div className="course-detail-info">
        <div className="info-row">
          <div className="info-item">
            <p><strong>Course Code:</strong> {course.courseCode}</p>
          </div>
          <div className="info-item">
            <p><strong>Duration:</strong> {course.duration}</p>
          </div>
          <div className="info-item">
            <p><strong>Price:</strong> {course.price}</p>
          </div>
        </div>
        
        <p className="description"><strong>Description:</strong> {course.description}</p>
      </div>
      
      <div className="course-detail-section">
        <h4>Objectives:</h4>
        <ul>
          {course.objectives && course.objectives.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
      </div>
      
      <div className="course-detail-section">
        <h4>Audience:</h4>
        <p>{course.audience}</p>
      </div>
      
      <div className="course-detail-section">
        <h4>Prerequisites:</h4>
        <ul>
          {course.prerequisites && course.prerequisites.map((prerequisite, index) => (
            <li key={index}>{prerequisite}</li>
          ))}
        </ul>
      </div>
      
      <div className="course-detail-section">
        <p><strong>Certification Number:</strong> {course.certificationNumber}</p>
      </div>
      
      <div className="course-detail-section">
        <h4>Recommended Courses:</h4>
        <ul>
          {course.recommendedCourses && course.recommendedCourses.map((recommendedCourse, index) => (
            <li key={index}>{recommendedCourse}</li>
          ))}
        </ul>
      </div>
      
      <div className="course-detail-section">
        <h4>Content:</h4>
        <p>{course.content}</p>
      </div>
    </div>
  );
};

export default CourseDetail;
