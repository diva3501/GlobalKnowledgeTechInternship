import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const slides = [
  {
    title: "Data Science Cg IOT",
    subtitle: "Stay Updated and Remain Competitive",
    description:
      "Unlock your potentialities and excel in the ever-expanding Data Science and IOT field.",
    image: "/photo1.jpg",
  },
  {
    title: "AI and Machine Learning",
    subtitle: "Creating best versions of you",
    description:
      "Be at the top of your professional game in the booming field of Artificial Intelligence and Machine Learning.",
    image: "/photo2.jpg",
  },
  {
    title: "Global Knowledge Technologies",
    subtitle: "Offering IT Courses in Disruptive Technologies",
    description:
      "Why settle for average when you deserve an elite career? Get versed in latest technologies including Blockchain, Cloud, Tableau and Data Science with us.",
    image: "/photo3.jpg",
  },
];

const Home = () => {
  return (
    <div className="home">
      <Carousel fade interval={5000} controls={true} indicators={true}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="slide">
              <div className="content">
                <h3>{slide.title}</h3>
                <h4>{slide.subtitle}</h4>
                <p>{slide.description}</p>
              </div>
              <div className="image-container">
                <img src={slide.image} alt={slide.title} />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
