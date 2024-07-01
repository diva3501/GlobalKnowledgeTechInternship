import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Academics.css";

const Academics = () => {
  // Function to change the typewriter text every 5 seconds
  const changeText = () => {
    const texts = [
      "GKT's Academic Training",
      // Add more text segments as needed
    ];
    let count = 0;
    const typewriter = document.querySelector(".typewriter span");

    setInterval(() => {
      typewriter.textContent = texts[count];
      count++;
      if (count === texts.length) {
        count = 0;
      }
    }, 5000); // Change text every 5 seconds
  };

  React.useEffect(() => {
    changeText(); // Call changeText function on component mount
  }, []);

  return (
    <div className="academics-container">
      <div className="academics-header">
        <div className="typewriter">
          <span>GKT's Academic Training </span>
        </div>
        <h2>GKT's Academic Training is bringing forth better opportunities to colleges and universities</h2>
      </div>

      <div className="academics-tab">
        <div className="academics-title">Student Development Program</div>
        <div className="academics-description">
          <p>
          Understanding the sheer need for bridging academia and industries gap, we offer training on cutting-edge technologies to the students who aspire to achieve a successful career in the technology arena.As one of the best software coaching centers in Bangalore, our training programs aim to boost the employability of the students - confirming students’ smooth campus to corporate transition.
          </p>
          <ul className="academics-points">
            <li className="academics-point left">
              <span className="point-content">Students gain the opportunity to get trained in trending technologies exclusively in liaison with various leading OEMs.</span>
            </li>
            <li className="academics-point right">
              <span className="point-content">Equip the students with new-age skills, making them future-ready.</span>
            </li>
            <li className="academics-point left">
              <span className="point-content">Industry-recognized Certifications gained on completion of the training, enable the students to stand out in the job market.</span>
            </li>
            <li className="academics-point right">
              <span className="point-content">Going beyond classroom learning, students are engaged in live projects and case studies - that emphasize providing hands-on experiences and exposure to industry practices.</span>
            </li>
            <li className="academics-point left">
              <span className="point-content">A wide range of training programs available accommodating the requirements of students from varied streams of engineering.</span>
            </li>
          </ul>
        </div>
        <Link to="/academicscourse" className="academics-button">Courses</Link>
      </div>

      <div className="academics-tab">
        <div className="academics-title">Faculty Development Program</div>
        <div className="academics-description">
          <p>
            We believe quality teaching and student learning go hand-in-hand. To ensure the students are equipped with ample employability skills, we offer Faculty development programs which are been imparted by our proficient team of trainers. Our faculty development programs are designed strategically to help the faculty members gain acumen into recent trends & practices, comprehending, they must be adept with adequate technical knowledge on emerging technologies.
          </p>
          <ul className="academics-points">
            <li className="academics-point left">
              <span className="point-content">Fosters the faculty’s knowledge, skills, and professional competence which eventually translate to better student learning outcomes.</span>
            </li>
            <li className="academics-point right">
              <span className="point-content">Intensifies faculty’s capabilities of integrating insightful industry-oriented knowledge onto their teaching and enhance the teaching-learning process.</span>
            </li>
            <li className="academics-point left">
              <span className="point-content">Live projects and industry-based case studies imbibe the faculty members with extensive practical and real-time experience.</span>
            </li>
            <li className="academics-point right">
              <span className="point-content">Our globally recognized certifications benefit the faculty members, both in terms of professional development and enrichment of teaching quality.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Academics;
