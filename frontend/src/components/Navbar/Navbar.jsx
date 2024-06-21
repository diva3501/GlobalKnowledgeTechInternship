import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <section className="position-relative">
        <nav className="navbar navbar-mainbg navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="pstls-assets/logos/logo-purple-white.svg" alt="Logo" />
            </a>
            <button className="btn p-0 d-lg-none navbar-burger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.7761 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z"
                  fill="#fff"
                ></path>
              </svg>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-1 mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-white" aria-current="page" href="#">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    OFFERS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    SCHEDULES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    BLOG
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    WEBINARS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    ACADEMICS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    DIGITAL
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    AWARDS & RECOGNITION
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    CONTACT
                  </a>
                </li>
              </ul>
              <div className="ms-auto">
                <a className="btn text-white" href="#">
                  Log In
                </a>
                <a className="btn btn-light mt-3 mt-md-0" href="#">
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
