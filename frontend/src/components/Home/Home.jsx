import React from "react";
import "./Home.css";

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
      <div className="home">
        <div className="slide animate__animated animate__fadeIn">
          <div className="content">
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{description}</p>
          </div>
          <div className="image-container">
            <img src={image} alt={title} />
          </div>
        </div>
        <div className="controls">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={`control-button ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => this.setState({ currentSlide: index })}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
