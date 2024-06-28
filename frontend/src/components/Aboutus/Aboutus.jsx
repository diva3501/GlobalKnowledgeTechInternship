import React from "react";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <section className="about-us">
      <div className="about-container">
        <div className="video-background">
          <iframe
            className="video-frame"
            src="https://www.youtube.com/embed/97XNN_aoxpg?autoplay=1&mute=1&loop=1&controls=0&playlist=97XNN_aoxpg"
            title="About Us Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <div className="about-content">
        <h2 className="about-heading">About Us</h2>
          <p className="about-text">
            A leader in IT Training domain, Global Knowledge Technologies
            delivers quality and customized academic and corporate training
            offering a range of IT courses in latest technologies and handing
            over globally recognized Certifications. In the era where technology
            is entirely reshaping the workplace, there is a prominent gap
            existing between the employees and employers today. Being one of the
            top IT Training Company in Bangalore, GKT helps to bridge that gap
            by enabling and empowering the tech enthusiasts to earn the key to a
            successful career in the technology arena. The organization’s
            specialized training programs imparted by expert trainers create a
            win-win situation for both employees and organizations.
          </p>
          <div className="youtube-link">
            <a
              href="https://youtu.be/97XNN_aoxpg"
              className="youtube-link-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
