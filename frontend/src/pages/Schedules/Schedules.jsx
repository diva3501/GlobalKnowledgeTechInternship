import React, { useState, useEffect } from 'react';
import './Schedules.css'; // Import your CSS file

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
    // Simulate an initial API call to fetch courses
    const initialCourses = [
      { id: 1, title: 'AI for Beginners', deliveryMode: 'Online', date: '2024-08-01', price: '$100', duration: '4 weeks', categories: ['Artificial Intelligence'] },
      { id: 2, title: 'Process Certification Basics', deliveryMode: 'In-person', date: '2024-09-01', price: '$200', duration: '2 days', categories: ['Process Certification'] },
      { id: 3, title: 'Microsoft Azure Fundamentals', deliveryMode: 'Online', date: '2024-07-15', price: '$150', duration: '3 weeks', categories: ['Microsoft'] },
      { id: 4, title: 'Anglepoint SAM Essentials', deliveryMode: 'In-person', date: '2024-10-01', price: '$300', duration: '1 day', categories: ['Anglepoint'] },
      { id: 5, title: 'Red Hat System Administration', deliveryMode: 'Online', date: '2024-08-10', price: '$400', duration: '5 weeks', categories: ['Red Hat'] },
      { id: 6, title: 'Tableau for Data Visualization', deliveryMode: 'Online', date: '2024-09-15', price: '$250', duration: '3 weeks', categories: ['Tableau'] },
      { id: 7, title: 'Mulesoft Integration Basics', deliveryMode: 'In-person', date: '2024-11-05', price: '$350', duration: '2 weeks', categories: ['Mulesoft'] },
      { id: 8, title: 'Blockchain Essentials', deliveryMode: 'Online', date: '2024-12-01', price: '$500', duration: '6 weeks', categories: ['Blockchain'] },
      { id: 9, title: 'IBM Cloud Computing', deliveryMode: 'In-person', date: '2024-07-25', price: '$600', duration: '4 weeks', categories: ['IBM'] },
    ];
    setCourses(initialCourses);
    setFilteredCourses(initialCourses);
  }, []);

  const handleSearch = () => {
    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);

    // Reset categories to "All Courses"
    setCategories(categories.map((category, index) => ({
      ...category,
      checked: index === 0,
    })));
  };

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
    <div className="app-container">
      <header className="catalog-header">
        <h1>Schedules</h1>
        <h3>Looking for flexible learning options?</h3>
        <h2> We are here to help you. Following are our upcoming training schedules.</h2>
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
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
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
