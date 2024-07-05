import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { FaGraduationCap, FaPencilRuler, FaBuilding } from "react-icons/fa";
import styled from "styled-components";
import {motion} from "framer-motion";

const Title = styled.h3`
  position: relative;
  display: inline-block;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
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
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  height: 100%; /* added to make cards equal height */
`;

const CustomButton = styled(Button)`
  border-radius: 50px;
  &:hover {
    background-color: #007bff;
  }
`;

const Icon = styled.div`
  font-size: 48px;
  color: #00aaff;
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 800px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
`;
const Section = styled(motion.div)`
  width: 100%;
  margin-bottom: 40px;
`;

const WhyAcademicsWorks = () => {
  return (
    <>
      <Section
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Container className="py-5">
          <Title>How GKT Works?</Title>
          <Row className="justify-content-center">
            <Col md={3} className="mb-4">
              {" "}
              {/* changed to md={4} for better spacing */}
              <CustomCard className="shadow">
                <Card.Body className="text-center h-100 d-flex flex-column">
                  {" "}
                  {/* added h-100 and d-flex flex-column for equal height and vertical centering */}
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
            <Col md={3} className="mb-4">
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
            <Col md={3} className="mb-4">
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
    </>
  );
};

export default WhyAcademicsWorks;
