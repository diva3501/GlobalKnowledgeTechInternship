import React, { useState } from 'react';
import OffersBanner from './OffersBanner';

function Offers() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    { id: 1, name: 'Artificial Intelligence' },
    { id: 2, name: 'Process Certification' },
    { id: 3, name: 'Microsoft' },
    { id: 4, name: 'Anglepoint' },
    { id: 5, name: 'Red Hat' },
    { id: 6, name: 'Tableau' },
    { id: 7, name: 'Mulesoft' },
    { id: 8, name: 'Blockchain' },
    { id: 9, name: 'IBM' },
  ];

  const courses = [
    { id: 1, name: 'Red Hat Linux Administration', category: 5, description: 'Learn the essentials of Red Hat Linux administration.', image: 'https://kineo.com/glide/containers/main/case_studies_images/Redhat/microsoftteams-image-%2818%29-%281%29.png/27610923d84dab46f32f3d30bcbb1e53.png' },
    { id: 2, name: 'Tableau Data Visualization ', category: 6, description: 'Master data visualization techniques using Tableau.', image: 'https://img.freepik.com/free-vector/entrepreneur-analyzing-business-data-diagrams_1262-21466.jpg?t=st=1720205640~exp=1720209240~hmac=882cb6fed5787d4690340338295caad41fa180260fa71364bb5eda16ade0059e&w=900' },
    { id: 3, name: 'Tableau Intermediate', category: 6, description: 'Advance your skills in Tableau with advanced features.', image: 'https://img.freepik.com/free-vector/flat-hand-drawn-people-analyzing-growth-chart-illustration_23-2148859388.jpg?t=st=1720205712~exp=1720209312~hmac=25a8f22f31aea9afdb14f3e2cc95020e433120a8d5ea44021bd2e412a092b370&w=900' },
    { id: 4, name: 'Tableau Advanced', category: 6, description: 'Become a Tableau expert with in-depth knowledge.', image: 'https://img.freepik.com/premium-vector/market-forecast-trend-use-chart-graphic-vector-business-market-forecast-graph-data-financial-analysis-trend-illustration_102902-6006.jpg?w=900' },
  ];

  // Calculate expected counts based on provided numbers
  const expectedCounts = {
    1: 0, // Artificial Intelligence
    2: 0, // Process Certification
    3: 0, // Microsoft
    4: 0, // Anglepoint
    5: 1, // Red Hat
    6: 3, // Tableau
    7: 0, // Mulesoft
    8: 0, // Blockchain
    9: 0, // IBM
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
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
