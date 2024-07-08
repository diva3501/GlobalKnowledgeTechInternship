// Offers.js

import React, { useState } from 'react';
import OffersBanner from './OffersBanner';
import { categories, courses, expectedCounts } from './OffersData';

function Offers() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleAllCheckboxChange = () => {
    setSelectedCategory(null); // Selecting "ALL" clears the category selection
  };

  // Function to count courses in each category
  const countCoursesInCategory = (categoryId) => {
    return courses.filter((course) => course.category === categoryId).length;
  };

  return (
    <>
      <section>
        <OffersBanner />
      </section>
      <div className="container" style={{ display: 'flex' }}>
        <div className="category-list" style={{ marginRight: 20 }}>
          <h2>Technologies</h2> {/* Adding the heading for categories */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
            <input
              type="checkbox"
              checked={!selectedCategory} // Checkbox is checked if no category is selected
              onChange={handleAllCheckboxChange}
            />
            <span style={{ marginLeft: 10 }}>ALL</span>
          </div>
          {categories.map((category) => (
            <div key={category.id} style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
              <input
                type="checkbox"
                checked={selectedCategory === category.id}
                onChange={() => handleCategoryChange(category.id)}
              />
              <span style={{ marginLeft: 10 }}>
                {category.name} ({expectedCounts[category.id]})
              </span>
            </div>
          ))}
        </div>
        <div className="course-card-container" style={{ marginTop: 20, flex: 1, display: 'flex', flexWrap: 'wrap' }}>
          {courses
            .filter((course) => !selectedCategory || course.category === selectedCategory) // Filter by selected category or show all if no category selected
            .map((course) => (
              <div key={course.id} className="course-card" style={{ width: '30%', marginRight: '3%', marginBottom: 20 }}>
                <div
                  style={{
                    border: '1px solid #ddd',
                    padding: 10,
                    borderRadius: 10,
                    height: '100%', // Ensures the card takes full height of its container
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between', // Aligns content vertically
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <img src={course.image} alt={course.name} style={{ marginBottom: 10, width: '100%', maxHeight: 200, objectFit: 'cover' }} />
                    <h3 style={{ marginBottom: 10 }}>{course.name}</h3>
                    <p>{course.description}</p> {/* Display course description */}
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <button className="enroll-button" style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Enroll</button>
                  </div>
                </div>
              </div>
            ))
            .slice(0, expectedCounts[selectedCategory])} {/* Limit the displayed cards based on expected count */}
        </div>
      </div>
    </>
  );
}

export default Offers;
