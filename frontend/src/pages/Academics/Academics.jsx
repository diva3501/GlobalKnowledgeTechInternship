import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import {
  FaGraduationCap,
  FaPencilRuler,
  FaBuilding,
  FaBrain,
  FaLaptopCode,
} from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./Academics.css";

const Title = styled.h3`
  position: relative;
  display: inline-block;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  color: #ffffff;
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    height: 4px;
    width: 50px;
    background-color: #00aaff;
    border-radius: 2px;
    transform: translateX(-50%);
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 576px) {
    font-size: 1.75rem;
  }
`;

const CustomCard = styled(Card)`
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 15px;
  overflow: hidden;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
  }
  height: 100%;
`;

const Icon = styled.div`
  font-size: 48px;
  color: #00aaff;
  margin-bottom: 20px;
`;

const Section = styled(motion.div)`
  width: 100%;
  margin-bottom: 40px;
`;

const StyledButton = styled(Button)`
  background-color: #00aaff;
  border: none;
  padding: 10px 20px;
  &:hover {
    background-color: #0088cc;
  }
`;

const Quote = styled.p`
  font-style: italic;
  color: #ffffff;
  font-size: 1.1rem;
`;

const SuccessCard = styled(Card)`
  background-color: #f8f9fa;
  color: #333;
  border: none;
  border-radius: 10px;
  margin: 10px 0;
`;

const SuccessStories = () => {
  const stories = [
    {
      name: "Jane Doe",
      quote:
        "The training provided by GKT was exceptional. I am now working at a top tech company.",
      position: "Software Engineer at TechCorp",
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      name: "John Smith",
      quote:
        "The hands-on experience and certifications helped me secure my dream job.",
      position: "Data Scientist at DataWorks",
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      name: "David Johnson",
      quote:
        "The hands-on experience and certifications helped me secure my dream job.",
      position: "Data Scientist at DataWorks",
      imgSrc: "https://via.placeholder.com/150",
    },
    // Add more stories as needed
  ];

  return (
    <Section
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Container className="py-5">
        <Title className="text-center mb-5">Success Stories</Title>
        <Row>
          {stories.map((story, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <SuccessCard>
                <Card.Body className="text-center">
                  <Card.Img
                    variant="top"
                    src={story.imgSrc}
                    className="rounded-circle mb-3"
                  />
                  <Card.Title>{story.name}</Card.Title>
                  <Quote>"{story.quote}"</Quote>
                  <Card.Text>{story.position}</Card.Text>
                </Card.Body>
              </SuccessCard>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

const WhyAcademicsWorks = () => {
  return (
    <>
      <Section
        className="student-development-program py-5"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Container>
          <Title className="text-center mb-5">
            Student Development Program
          </Title>
          <p className="text-center mb-4 text-white">
            Understanding the sheer need for bridging academia and industries
            gap, we offer training on cutting-edge technologies to the students
            who aspire to achieve a successful career in the technology arena.
          </p>
          <Row>
            <Col md={6}>
              <ul className="timeline">
                <li>
                  <h4>Training Opportunities</h4>
                  <p>
                    Students gain the opportunity to get trained in trending
                    technologies exclusively in liaison with various leading
                    OEMs.
                  </p>
                </li>
                <li>
                  <h4>New-Age Skills</h4>
                  <p>
                    Equip the students with new-age skills, making them
                    future-ready.
                  </p>
                </li>
                <li>
                  <h4>Industry-Recognized Certifications</h4>
                  <p>
                    Industry-recognized Certifications gained on completion of
                    the training, enable the students to stand out in the job
                    market.
                  </p>
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <ul className="timeline">
                <li>
                  <h4>Hands-On Experience</h4>
                  <p>
                    Going beyond classroom learning, students are engaged in
                    live projects and case studies that emphasize providing
                    hands-on experiences and exposure to industry practices.
                  </p>
                </li>
                <li>
                  <h4>Diverse Training Programs</h4>
                  <p>
                    A wide range of training programs available accommodating
                    the requirements of students from varied streams of
                    engineering.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <StyledButton>Courses</StyledButton>
          </div>
        </Container>
      </Section>
      <Section
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Container className="py-5">
          <Title className="text-center mb-5">How GKT Works?</Title>
          <Row className="justify-content-center">
            <Col md={4} className="mb-4">
              <CustomCard className="shadow">
                <Card.Body className="text-center h-100 d-flex flex-column">
                  <Icon>
                    <FaGraduationCap />
                  </Icon>
                  <Card.Title>Personalize Learning</Card.Title>
                  <Card.Text>
                    Tailor-made education that adapts to your unique learning
                    style and pace.
                  </Card.Text>
                </Card.Body>
              </CustomCard>
            </Col>
            <Col md={4} className="mb-4">
              <CustomCard className="shadow">
                <Card.Body className="text-center h-100 d-flex flex-column">
                  <Icon>
                    <FaPencilRuler />
                  </Icon>
                  <Card.Title>Trusted Courses</Card.Title>
                  <Card.Text>
                    Expertly curated courses from renowned institutions,
                    ensuring quality and relevance.
                  </Card.Text>
                </Card.Body>
              </CustomCard>
            </Col>
            <Col md={4} className="mb-4">
              <CustomCard className="shadow">
                <Card.Body className="text-center h-100 d-flex flex-column">
                  <Icon>
                    <FaBuilding />
                  </Icon>
                  <Card.Title>Tools for Students</Card.Title>
                  <Card.Text>
                    Empowering students with cutting-edge resources and
                    technology to enhance their academic journey.
                  </Card.Text>
                </Card.Body>
              </CustomCard>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section
        className="faculty-development-program py-5"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Container>
          <Title className="text-center mb-5">
            Faculty Development Program
          </Title>
          <p className="text-center mb-4 text-white">
            We believe quality teaching and student learning go hand-in-hand. To
            ensure the students are equipped with ample employability skills.
            Keeping this in view, we offer Faculty development programs which
            are been imparted by our proficient team of trainers. Our faculty
            development programs are designed strategically to help the faculty
            members gain acumen into recent trends & practices, comprehending,
            they must be adept with adequate technical knowledge on emerging
            technologies.
          </p>
          <Row>
            <Col md={6}>
              <ul className="timeline">
                <li>
                  <h4>Enhancing Pedagogical Excellence</h4>
                  <p>
                    Empower faculty with advanced knowledge and skills,
                    fostering professional growth for improved student learning
                    outcomes.
                  </p>
                </li>
                <li>
                  <h4>Industry-Integrated Teaching Strategies</h4>
                  <p>
                    Equip faculty to seamlessly integrate industry insights into
                    their teaching, enriching the learning experience for
                    students.
                  </p>
                </li>
                <li>
                  <h4>Global Certifications for Teaching Excellence</h4>
                  <p>
                    Offer globally recognized certifications to faculty,
                    enhancing their professional development and elevating
                    teaching quality standards.
                  </p>
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <ul className="timeline">
                <li>
                  <h4>Practical Learning through Live Projects</h4>
                  <p>
                    Engage faculty in live projects and industry case studies to
                    provide hands-on, real-time experience, enhancing their
                    teaching effectiveness.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <StyledButton>Courses</StyledButton>
          </div>
        </Container>
      </Section>
      <SuccessStories />
      {/* Additional Courses Section */}
      <Section
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Container className="py-5">
          <Title className="text-center mb-5">Featured Courses</Title>
          <Row>
            <Col md={6} lg={4} className="mb-4">
              <CustomCard className="shadow">
                <Card.Body className="text-center h-100 d-flex flex-column">
                  <Icon>
                    <FaBrain />
                  </Icon>
                  <Card.Title>Artificial Intelligence</Card.Title>
                  <Card.Text>
                    Master AI techniques and applications with hands-on projects
                    and expert guidance.
                  </Card.Text>
                  <div className="mt-auto">
                    <StyledButton>Explore Course</StyledButton>
                  </div>
                </Card.Body>
              </CustomCard>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <CustomCard className="shadow">
                <Card.Body className="text-center h-100 d-flex flex-column">
                  <Icon>
                    <FaPencilRuler />
                  </Icon>
                  <Card.Title>UI/UX Design</Card.Title>
                  <Card.Text>
                    Learn UI/UX design principles and create impactful user
                    experiences with practical projects.
                  </Card.Text>
                  <div className="mt-auto">
                    <StyledButton>Explore Course</StyledButton>
                  </div>
                </Card.Body>
              </CustomCard>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <CustomCard className="shadow">
                <Card.Body className="text-center h-100 d-flex flex-column">
                  <Icon>
                    <FaLaptopCode />
                  </Icon>
                  <Card.Title>Full Stack Development</Card.Title>
                  <Card.Text>
                    Learn the fundamentals of web development with practical
                    projects.
                  </Card.Text>
                  <div className="mt-auto">
                    <StyledButton>Explore Course</StyledButton>
                  </div>
                </Card.Body>
              </CustomCard>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default WhyAcademicsWorks;
