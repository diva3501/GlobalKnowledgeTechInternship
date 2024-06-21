import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  return (
    <div>
      <section className="position-relative">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="/path/to/logo.svg" alt="Logo" />
            </a>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="collectionsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Collections
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="collectionsDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Offers
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Schedules
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Webinar
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Academics
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Digital
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Awards & Recognition
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="d-flex">
                <a className="btn btn-outline-light me-2" href="#">
                  Log In
                </a>
                <a className="btn btn-light" href="#">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
