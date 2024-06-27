import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Data Science & IoT",
    subtitle: "Stay Updated and Remain Competitive",
    description:
      "Unlock your potentialities and excel in the ever-expanding Data Science and IoT field.",
    image: "/freepik.jpeg",
  },
  {
    title: "AI and Machine Learning",
    subtitle: "Creating Best Versions of You",
    description:
      "Be at the top of your professional game in the booming field of Artificial Intelligence and Machine Learning.",
    image: "/freepik.jpeg",
  },
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
    };
  }

  componentDidMount() {
    this.slideInterval = setInterval(this.nextSlide, 10000);
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
      <motion.div className="home">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
          className="slide"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="overlay">
            <div className="content">
              <motion.h3
                initial="initial"
                animate="animate"
                variants={textVariants}
                transition={{ duration: 1, delay: delay.title }}
              >
                {title}
              </motion.h3>
              <motion.h4
                initial="initial"
                animate="animate"
                variants={textVariants}
                transition={{ duration: 1, delay: delay.subtitle }}
              >
                {subtitle}
              </motion.h4>
              <motion.p
                initial="initial"
                animate="animate"
                variants={textVariants}
                transition={{ duration: 1, delay: delay.description }}
              >
                {description}
              </motion.p>
            </div>
          </div>
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
      </motion.div>
    );
  }
}

export default Home;
