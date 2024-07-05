import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Global Knowledge Technologies",
    subtitle: "Offering IT Courses in Disruptive Technologies",
    description:
      "Why settle for average when you deserve an elite career? Get versed in the latest technologies including Blockchain, Cloud, Tableau, and Data Science with us.",
    image: "/freepik.jpeg",
  },
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      isPaused: false,
    };
  }

  componentDidMount() {
    this.slideInterval = setInterval(this.nextSlide, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.slideInterval);
  }

  nextSlide = () => {
    if (!this.state.isPaused) {
      this.setState((prevState) => ({
        currentSlide: (prevState.currentSlide + 1) % slides.length,
      }));
    }
  };

  handlePause = () => {
    this.setState({ isPaused: true });
  };

  handleResume = () => {
    this.setState({ isPaused: false });
  };

  render() {
    const { currentSlide } = this.state;
    const { title, subtitle, description, image } = slides[currentSlide];

    const textVariants = {
      initial: { opacity: 0, y: 50, scale: 0.8 },
      animate: { opacity: 1, y: 0, scale: 1 },
    };

    const delay = {
      title: 0.3,
      subtitle: 0.5,
      description: 0.7,
    };

    return (
      <motion.div
        className="home"
        onMouseEnter={this.handlePause}
        onMouseLeave={this.handleResume}
      >
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
          className="slide"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="overlay d-flex justify-content-center align-items-center text-center">
            <div className="content bg-dark text-white p-5 rounded shadow-lg">
              <h3 className="title">Global Knowledge Technologies</h3>
              <h4 className="subtitle mt-3">{subtitle}</h4>
              <p className="mt-2">{description}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }
}

export default Home;
