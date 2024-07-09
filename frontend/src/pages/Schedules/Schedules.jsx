import React, { useState, useEffect } from "react";
import "./Schedules.css";
import { coursesData } from "./SchedulesData"; // Import coursesData from data.js
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

function Schedules() {
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [categories, setCategories] = useState([
    { name: "All Training Schedules", checked: true },
    { name: "Artificial Intelligence", checked: false },
    { name: "Process Certification", checked: false },
    { name: "Microsoft", checked: false },
    { name: "Anglepoint", checked: false },
    { name: "Red Hat", checked: false },
    { name: "Tableau", checked: false },
    { name: "Mulesoft", checked: false },
    { name: "Blockchain", checked: false },
    { name: "IBM", checked: false },
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
    <div className="container py-3">
      <motion.header
        className="catalog-header mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>We are here to help you.</h2>
        <h3>Following are our upcoming training schedules.</h3>
        <h4>
          Navigate across the available Training Courses in Bangalore and learn
          at your own convenience.
        </h4>
      </motion.header>
      <main>
        <motion.div
          className="search-bar mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <input
            type="text"
            placeholder="Search courses..."
            className="mt-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </motion.div>
        <div className="filter-options mb-4">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`btn btn-outline-primary me-2 mb-2 ${
                category.checked ? "active" : ""
              }`}
              onClick={() => handleCategoryChange(index)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
        <motion.table
          className="table table-dark table-hover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
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
                <motion.tr
                  key={course.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <td>{course.title}</td>
                  <td>{course.deliveryMode}</td>
                  <td>{course.date}</td>
                  <td>{course.price}</td>
                  <td>{course.duration}</td>
                  <td>{course.categories.join(", ")}</td>
                  <td>
                    <button className="btn btn-primary">Enroll</button>
                  </td>
                </motion.tr>
              ))
            )}
          </tbody>
        </motion.table>
        {filteredCourses.length > 0 && (
          <div className="d-flex justify-content-between my-3">
            <button className="btn btn-outline-secondary">Previous</button>
            <button className="btn btn-outline-secondary">Next</button>
          </div>
        )}
        <footer>
          <p className="text-center">
            * Prices quoted above are inclusive of taxes.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default Schedules;
