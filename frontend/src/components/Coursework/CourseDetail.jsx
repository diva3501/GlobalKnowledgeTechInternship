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

  console.log("Course Code:", courseCode);
  console.log("Course Data:", course);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-detail">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <img src={course.image} alt={course.courseTitle} className="course-detail-image" />
      <h3 className="course-detail-title">{course.courseTitle}</h3>
      <div className="course-detail-info">
        <p><strong>Course Code:</strong> {course.courseCode}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Price:</strong> {course.price}</p>
        <p><strong>Description:</strong> {course.description}</p>
      </div>
    </div>
  );
};

export default CourseDetail;
