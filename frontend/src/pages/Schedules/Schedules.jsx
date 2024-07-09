// Schedules.js

import React, { useState, useEffect } from 'react';
import './Schedules.css';
import { coursesData } from './SchedulesData'; // Import coursesData from data.js

function Schedules() {
  const [searchTerm, setSearchTerm] = useState('');
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [categories, setCategories] = useState([
    { name: 'All Training Schedules', checked: true },
    { name: 'Artificial Intelligence', checked: false },
    { name: 'Process Certification', checked: false },
    { name: 'Microsoft', checked: false },
    { name: 'Anglepoint', checked: false },
    { name: 'Red Hat', checked: false },
    { name: 'Tableau', checked: false },
    { name: 'Mulesoft', checked: false },
    { name: 'Blockchain', checked: false },
    { name: 'IBM', checked: false },
  ]);

  useEffect(() => {
    // Initialize courses with data from coursesData
    setCourses(coursesData);
    setFilteredCourses(coursesData);
  }, []);

  useEffect(() => {
    // Function to filter courses based on searchTerm
    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  }, [searchTerm, courses]);

  const handleCategoryChange = (index) => {
    const updatedCategories = categories.map((category, idx) => ({
      ...category,
      checked: idx === index,
    }));
    setCategories(updatedCategories);

    if (index === 0) {
      setFilteredCourses(courses);
    } else {
      const selectedCategory = updatedCategories[index].name;
      const filteredCourses = courses.filter((course) =>
        course.categories.includes(selectedCategory)
      );
      setFilteredCourses(filteredCourses);
    }
  };

  return (
    <div className="app container py-3">
      <header className="catalog-header">
       
        <h2>We are here to help you. </h2>
          <h3>Following are our upcoming training schedules.</h3>
        <h4>Navigate across the available Training Courses in Bangalore and learn at your own convenience.</h4>
      </header>
      <main>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-options">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-button ${category.checked ? 'selected' : ''}`}
              onClick={() => handleCategoryChange(index)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <table className="course-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Delivery Mode</th>
              <th>Date</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Categories</th>
              <th>Enroll</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.length === 0 ? (
              <tr>
                <td colSpan="7">No courses found.</td>
              </tr>
            ) : (
              filteredCourses.map((course) => (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>{course.deliveryMode}</td>
                  <td>{course.date}</td>
                  <td>{course.price}</td>
                  <td>{course.duration}</td>
                  <td>{course.categories.join(', ')}</td>
                  <td>
                    <button className="enroll-button">Enroll</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {filteredCourses.length > 0 && (
          <div className="pagination">
            <button className="pagination-button">Previous</button>
            <button className="pagination-button">Next</button>
          </div>
        )}
        <footer>
          <p>
            * Prices quoted above are inclusive of taxes.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default Schedules;

