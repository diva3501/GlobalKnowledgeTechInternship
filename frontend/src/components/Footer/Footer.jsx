import React from 'react';
import { IoMdQuote } from 'react-icons/io';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css'; 

const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-column">
        <h3 className="footer-heading">FOLLOW US!</h3>
        <div className="social-icons">
          <FaFacebookF className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaYoutube className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaLinkedinIn className="social-icon" />
        </div>
      </div>
      <div className="footer-column">
        <h3 className="footer-heading">COMPANY</h3>
        <ul className="footer-links">
          <li><a href="/">About us</a></li>
          <li><a href="/">Our team</a></li>
          <li><a href="/">Careers</a></li>
          <li><a href="/">Contact us</a></li>
          <li><a href="/">Help & Support</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="footer-heading">DISCOVER</h3>
        <ul className="footer-links">
          <li><a href="/">Become an Instructor</a></li>
          <li><a href="/">Be a Partner</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="footer-heading">FOR BUSINESS</h3>
        <ul className="footer-links">
          <li><a href="/">Corporate training</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="footer-heading">SUBSCRIBE TO OUR NEWSLETTER</h3>
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
