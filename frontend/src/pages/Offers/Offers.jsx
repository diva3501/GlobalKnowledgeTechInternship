// Offers.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OffersBanner from "./OffersBanner";
import { categories, courses, expectedCounts } from "./OffersData";

function Offers() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleAllCheckboxChange = () => {
    setSelectedCategory(null);
  };

  const countCoursesInCategory = (categoryId) => {
    return courses.filter((course) => course.category === categoryId).length;
  };

  const handleEnroll = (courseId) => {
    navigate(`/subscription/${courseId}`);
  };

  return (
    <>
      <section>
        <OffersBanner />
      </section>
      <div className="container" style={{ display: "flex" }}>
        <div className="category-list" style={{ marginRight: 20 }}>
          <h2>Technologies</h2>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 10 }}
          >
            <input
              type="checkbox"
              checked={!selectedCategory}
              onChange={handleAllCheckboxChange}
            />
            <span style={{ marginLeft: 10 }}>ALL</span>
          </div>
          {categories.map((category) => (
            <div
              key={category.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
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
        <div
          className="course-card-container"
          style={{ marginTop: 20, flex: 1, display: "flex", flexWrap: "wrap" }}
        >
          {courses
            .filter(
              (course) =>
                !selectedCategory || course.category === selectedCategory
            )
            .map((course) => (
              <div
                key={course.id}
                className="course-card"
                style={{ width: "30%", marginRight: "3%", marginBottom: 20 }}
              >
                <div
                  style={{
                    padding: 10,
                    borderRadius: 50,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <img
                      src={course.image}
                      alt={course.name}
                      style={{
                        marginBottom: 10,
                        width: "100%",
                        maxHeight: 200,
                        objectFit: "cover",
                      }}
                    />
                    <h3 style={{ marginBottom: 10 }}>{course.name}</h3>
                    <p>{course.description}</p>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <button
                      className="enroll-button btn rounded-pill btn-primary w-100"
                      style={{
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleEnroll(course.id)}
                    >
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            ))
            .slice(0, expectedCounts[selectedCategory])}
        </div>
      </div>
    </>
  );
}

export default Offers;
