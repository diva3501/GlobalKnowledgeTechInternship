import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import courseworkData from '../../data/courseworkData';
import { FiArrowLeft } from 'react-icons/fi'; 
import './coursedetail.css';

const CourseDetail = () => {
  const { courseCode } = useParams();
  const navigate = useNavigate();

  const course = Object.values(courseworkData)
    .flat()
    .find((c) => c.CourseCode === courseCode);

  if (!course) {
    return <div className="course-detail">Course not found</div>;
  }

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div className="course-detail">
      <div className="course-detail-header">
        <button className="back-button" onClick={handleBack}>
          <FiArrowLeft /> Back
        </button>
        <div className="breadcrumb">
          <span className="breadcrumb-item" onClick={() => navigate('/')}>Home</span> {'>>'} 
          <span className="breadcrumb-item" onClick={() => navigate('/all-courses')}>All</span> {'>>'}
          <span className="breadcrumb-item">{course.CourseTitle}</span>
        </div>
      </div>

      <div className="course-detail-content">
        <h3 className="course-detail-title">{course.CourseTitle}</h3>

        <div className="course-detail-info">
          <div className="info-item">
            <p><strong>Course Code:</strong> {course.CourseCode}</p>
          </div>
          <div className="info-item">
            <p><strong>Duration:</strong> {course.Duration}</p>
          </div>
          <div className="info-item">
            <p><strong>Price:</strong> {course.Price}</p>
          </div>
        </div>

        <p className="description"><strong>Description:</strong> {course.Description}</p>

        {course.Objectives && course.Objectives.length > 0 && (
          <div className="course-detail-section">
            <h4>Objectives:</h4>
            <ul>
              {course.Objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </div>
        )}

        {course.Audience && course.Audience.length > 0 && (
          <div className="course-detail-section">
            <h4>Audience:</h4>
            <p>{course.Audience}</p>
          </div>
        )}

        {course.Prerequisites && course.Prerequisites.length > 0 && (
          <div className="course-detail-section">
            <h4>Prerequisites:</h4>
            <ul>
              {course.Prerequisites.map((prerequisite, index) => (
                <li key={index}>{prerequisite}</li>
              ))}
            </ul>
          </div>
        )}

        {course.CertificationNumber && (
          <div className="course-detail-section">
            <p><strong>Certification Number:</strong> {course.CertificationNumber}</p>
          </div>
        )}

        {course.RecommendedCourses && course.RecommendedCourses.length > 0 && (
          <div className="course-detail-section">
            <h4>Recommended Courses:</h4>
            <ul>
              {course.RecommendedCourses.map((recommendedCourse, index) => (
                <li key={index}>{recommendedCourse}</li>
              ))}
            </ul>
          </div>
        )}

        {course.Content && course.Content.length > 0 && (
          <div className="course-detail-section">
            <h4>Content:</h4>
            <p>{course.Content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
