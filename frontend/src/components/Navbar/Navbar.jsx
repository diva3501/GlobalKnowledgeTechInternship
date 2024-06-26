import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const catalogItems = {
  "Artificial Intelligence": {
    courses: ["Gen AI Course"],
    certifications: [],
  },
  IBM: {
    courses: ["Analytics", "Cloud", "Security", "Systems", "Industry", "IOT", "Watson Health"],
    certifications: [
      "Introduction to IBM SPSS Modeler and Data Science (vl 8.1.1)",
      "Data science without a Ph.D. Using IBM SPSS Modeler (VI g. 1.1)",
      "Advanced Machine Learning Models using IBM SPSS Modeler (VI 8.2)",
      "IBM SPSS Modeler Foundations (VI 8.2)",
      "IBM OpenPages - ORM Business Processes (v7.0)",
    ],
  },
  "Red Hat": {
    courses: ["Free", "Cloud Computing Virtualization and Storage", "OpenShift", "DevOps", "Ansible"],
    certifications: [],
  },
  Microsoft: {
    courses: ["Azure"],
    certifications: ["Designing and Implementing a Data Science Solution on Azure"],
  },
  Blockchain: {
    courses: ["Architect Design", "Solution Design"],
    certifications: [
      "Certified Blockchain Solution Architect",
      "Certified Blockchain Developer - Ethereum",
      "BTA Certified Blockchain Developer - Hyperledger Fabric (CBDH)",
      "Certified Blockchain Business Foundations",
      "Certified Blockchain Security Professional",
    ],
  },
  Tableau: {
    courses: ["Tableau -Desktop"],
    certifications: ["Tableau Desktop - Qualified Associate"],
  },
  "Process Certification": {
    courses: ["Agile", "Project Management", "IT Service Management"],
    certifications: [
      "Certified ScrumMaster (CSM) Certification",
      "Project Management Professional Training",
      "PRINCE2 Foundation and Practitioner",
      "ITIL 4 Foundation Training",
    ],
  },
  Mulesoft: {
    courses: ["Anypoint Platform Operations", "Anypoint Platform Architecture", "Anypoint Platform Development"],
    certifications: [
      "MuleSoft Certified Developer - Level 1 (Mule 4)",
      "MuleSoft Certified Developer - Level 1 (Mule 4) DELTAMCD - Integration and API Associate (Mule 3.9)",
      "MCD - API Design Associate (RAML 1.0)",
      "MCD - Integration Professional (Mule 3.8)",
      "MuleSoft Certified Platform Architect - Level 1",
      "MuleSoft Certified Integration Architect - Level 1",
    ],
  },
  "Trending Technologies": {
    courses: ["Cloud Architect", "Data Science", "Blockchain"],
    certifications: [],
  },
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        {/* Logo Section */}
        <a className="navbar-brand" href="#">
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </a>

        {/* First Row with Browse Catalog Dropdown */}
        <div className="dropdown nav-item">
          <a
            className="nav-link dropdown-toggle text-white"
            href="#"
            id="browseCatalogDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Browse Catalog
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark catalog-dropdown"
            aria-labelledby="browseCatalogDropdown"
          >
            {Object.keys(catalogItems).map((key) => (
              <li key={key} className="dropdown-submenu">
                <a className="dropdown-item dropdown-toggle" href="#">
                  {key}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <h6 className="dropdown-header">Courses</h6>
                    {catalogItems[key].courses.length > 0 ? (
                      catalogItems[key].courses.map((course, index) => (
                        <a key={index} className="dropdown-item" href="#">
                          {course}
                        </a>
                      ))
                    ) : (
                      <a className="dropdown-item" href="#">
                        No Courses Available
                      </a>
                    )}
                  </li>
                  <li>
                    <h6 className="dropdown-header">Certifications</h6>
                    {catalogItems[key].certifications.length > 0 ? (
                      catalogItems[key].certifications.map((certification, index) => (
                        <a key={index} className="dropdown-item" href="#">
                          {certification}
                        </a>
                      ))
                    ) : (
                      <a className="dropdown-item" href="#">
                        No Certifications Available
                      </a>
                    )}
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Second Row with Links */}
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              OFFERS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              SCHEDULES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              BLOG
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              WEBINARS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              ACADEMICS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              DIGITAL
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              AWARDS & RECOGNITION
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              CONTACT
            </a>
          </li>
        </ul>

        {/* Buttons Section */}
        <div className="d-flex">
          <a className="btn btn-outline-light me-2" href="#">
            Log In
          </a>
          <a className="btn btn-light" href="#">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
