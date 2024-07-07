import React, { useState } from "react";
import "./Cart.css";

function Cart() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showEntries, setShowEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    title: "",
    deliveryMode: "",
    duration: ""
  });

  const data = [
    {
      title: "Tableau Desktop I - Fundamentals",
      deliveryMode: "ILO",
      duration: "2 Days",
      price: "40000.00",
      enroll: true
    },
    {
      title: "Tableau Desktop II - Intermediate",
      deliveryMode: "ILO",
      duration: "2 Days",
      price: "40000.00",
      enroll: true
    },
    {
      title: "Tableau Desktop III - Advanced",
      deliveryMode: "ILO",
      duration: "2 Days",
      price: "40000.00",
      enroll: true
    }
  ];

  const applyFilters = (item) => {
    return (
      item.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      item.deliveryMode.toLowerCase().includes(filters.deliveryMode.toLowerCase()) &&
      item.duration.toLowerCase().includes(filters.duration.toLowerCase())
    );
  };

  const filteredData = data.filter((item) => applyFilters(item));

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setFilters({ ...filters, title: e.target.value });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  const startIndex = (currentPage - 1) * showEntries;
  const endIndex = startIndex + showEntries;
  const displayedData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="container">
      <div className="header">
        <h1>Courses</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>
              Title
              <div className="filter-inputs">
                <select
                  value={filters.title}
                  onChange={(e) => handleFilterChange("title", e.target.value)}
                >
                  <option value="">All</option>
                  <option value="Tableau Desktop I - Fundamentals">Tableau Desktop I - Fundamentals</option>
                  <option value="Tableau Desktop II - Intermediate">Tableau Desktop II - Intermediate</option>
                  <option value="Tableau Desktop III - Advanced">Tableau Desktop III - Advanced</option>
                </select>
              </div>
            </th>
            <th>
              Delivery Mode
              <div className="filter-inputs">
                <select
                  value={filters.deliveryMode}
                  onChange={(e) => handleFilterChange("deliveryMode", e.target.value)}
                >
                  <option value="">All</option>
                  <option value="ILO">ILO</option>
                  {/* Add more delivery modes as needed */}
                </select>
              </div>
            </th>
            <th>
              Duration
              <div className="filter-inputs">
                <select
                  value={filters.duration}
                  onChange={(e) => handleFilterChange("duration", e.target.value)}
                >
                  <option value="">All</option>
                  <option value="2 Days">2 Days</option>
                  {/* Add more durations as needed */}
                </select>
              </div>
            </th>
            <th>Price (INR)</th>
            <th>Enroll</th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((item) => (
            <tr key={item.title}>
              <td>{item.title}</td>
              <td>{item.deliveryMode}</td>
              <td>{item.duration}</td>
              <td>
                <span className="strikethrough">{item.price}</span>
                10000.00
              </td>
              <td>
                <button className="enroll-button">Add to Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="page-number">{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredData.length / showEntries)}
        >
          Next
        </button>
      </div>
      <p className="footer">
        Showing {startIndex + 1} to {endIndex} of{" "}
        {filteredData.length} entries
      </p>
    </div>
  );
}

export default Cart;
