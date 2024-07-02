import React from 'react';
import { IoMdQuote } from 'react-icons/io';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-column">
        <h3 className="footer-heading">Follow Us!</h3>
        <div className="social-icons">
          <FaFacebookF className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaYoutube className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaLinkedinIn className="social-icon" />
        </div>
      </div>
      <div className="footer-column">
        <h3 className="footer-heading">Company</h3>
        <ul className="footer-links">
          <li><a href="/">About Us</a></li>
          <li><a href="/">Our Team</a></li>
          <li><a href="/">Careers</a></li>
          <li><a href="/">Contact Us</a></li>
          <li><a href="/">Help & Support</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="footer-heading">Discover</h3>
        <ul className="footer-links">
          <li><a href="/">Become An Instructor</a></li>
          <li><a href="/">Be A Partner</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="footer-heading">For Business</h3>
        <ul className="footer-links">
          <li><a href="/">Corporate Training</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="footer-heading">Subscribe To Our Newsletter</h3>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Global Knowledge Technologies</p>
        <div className="footer-policies">
          <a href="/">Privacy Policy</a>
          <a href="/">Refund Policy</a>
          <a href="/">Terms Of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
