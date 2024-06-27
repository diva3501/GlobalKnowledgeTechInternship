import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Data Science & IoT",
    subtitle: "Stay Updated and Remain Competitive",
    description:
      "Unlock your potentialities and excel in the ever-expanding Data Science and IoT field.",
    image: "/photo1.jpg",
  },
  {
    title: "AI and Machine Learning",
    subtitle: "Creating Best Versions of You",
    description:
      "Be at the top of your professional game in the booming field of Artificial Intelligence and Machine Learning.",
    image: "/photo2.jpg",
  },
  {
    title: "Global Knowledge Technologies",
    subtitle: "Offering IT Courses in Disruptive Technologies",
    description:
      "Why settle for average when you deserve an elite career? Get versed in the latest technologies including Blockchain, Cloud, Tableau, and Data Science with us.",
    image: "/photo3.jpg",
  },
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  componentDidMount() {
    this.slideInterval = setInterval(this.nextSlide, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.slideInterval);
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      currentSlide: (prevState.currentSlide + 1) % slides.length,
    }));
  };

  render() {
    const { currentSlide } = this.state;
    const { title, subtitle, description, image } = slides[currentSlide];

    return (
      <motion.div className="home">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="slide"
        >
          <div className="content">
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{description}</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="image-container"
          >
            <motion.img
              src={image}
              alt={title}
              className="img-fluid"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </motion.div>
        </motion.div>
        <div className="controls">
          {slides.map((slide, index) => (
            <motion.button
              key={index}
              className={`control-button ${
                index === currentSlide ? "active" : ""
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => this.setState({ currentSlide: index })}
            />
          ))}
        </div>
      </motion.div>
    );
  }
}

export default Home;
