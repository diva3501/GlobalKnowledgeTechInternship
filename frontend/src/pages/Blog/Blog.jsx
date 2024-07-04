import React, { useState } from "react";
import BlogList from "./BlogList";
import styled from "styled-components";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import blogContent from "./blogcontent";
import NewsletterSubscription from "./Newsletter";
import { motion } from "framer-motion";

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

const Section = styled(motion.div)`
  width: 100%;
  margin-bottom: 40px;
`;

const CategoryButton = styled(Button)`
  width: 100%;
  margin-bottom: 10px;
  background-color: ${(props) => (props.selected ? "#007bff" : "#6c757d")};
  border-color: #6c757d;
`;

const AboutSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  flex: 1;
`;

const AboutImage = styled.img`
  max-width: 100%;
  height: auto;
  flex: 1;
  border-radius: 10px;
`;

const TagButton = styled(Button)`
  margin: 5px;
  background-color: #6c757d;
  border: none;
  &:hover {
    background-color: #00aaff;
  }
`;

const categories = [
  "Analytics",
  "Machine Learning",
  "AI",
  "Python",
  "Visualization",
  "Web Development",
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const featuredBlogs = blogContent.slice(0, 3);
  const recentBlogs = blogContent.slice(3);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Section
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Container className="py-5">
          <AboutSection>
            <AboutText>
              Welcome to the <span className="">Global Knowledge Technology</span> blog, an
              EduLearn platform dedicated to upskilling professionals in the
              fields of analytics, machine learning, AI, Python, data
              visualization, and web development. Our mission is to provide
              valuable insights, tutorials, and updates to help you stay ahead
              in these rapidly evolving fields. Join us on a journey of
              continuous learning and skill enhancement.
              <div className="text-center">
                <Button
                  as={Link}
                  to="/aboutgkt"
                  className="mt-5"
                  variant="primary"
                >
                  Who are we?
                </Button>
              </div>
            </AboutText>
            <AboutImage
              src="https://img.freepik.com/free-vector/students-watching-recorded-lecture-with-professor-talking-from-tablet-podcast-courses-audio-video-recording-class-recording-access-concept-vector-isolated-illustration_335657-1983.jpg?t=st=1720066559~exp=1720070159~hmac=3145dc20e1d150a9a470fde4c0a450ff936ed552a995a8b376c693498e28ceb7&w=996"
              className="img-fluid"
              style={{ borderRadius: "10px" }}
              width="500"
              height="500"
              alt="EduLearn Platform"
            />
          </AboutSection>
        </Container>
      </Section>

      <Section
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Container className="py-5 mt-2">
          <Carousel>
            {featuredBlogs.map((blog) => (
              <Carousel.Item key={blog.id}>
                <Row className="justify-content-center">
                  <Col md={8}>
                    <Card>
                      <Card.Img
                        variant="top"
                        src={blog.imageUrl}
                        alt={blog.title}
                      />
                      <Card.Body>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>{blog.summary}</Card.Text>
                        <Button
                          as={Link}
                          to={`/blog/${blog.id}`}
                          variant="primary"
                        >
                          Read More
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </Section>

      <Section
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Container className="py-5">
          <Title>Recent Blogs</Title>
          <Row>
            {recentBlogs.map((blog) => (
              <Col key={blog.id} md={4} className="mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src={blog.imageUrl}
                    alt={blog.title}
                  />
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{blog.summary}</Card.Text>
                    <motion.div>
                      {blog.tags.map((tag, index) => (
                        <TagButton key={index} variant="secondary" size="sm">
                          {tag}
                        </TagButton>
                      ))}
                    </motion.div>
                    <Button
                      as={Link}
                      to={`/blog/${blog.id}`}
                      variant="primary"
                      className="mt-3"
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Section>

      <Section
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Container className="py-3">
          <Title>Categories</Title>
          <Row>
            {categories.map((category, index) => (
              <Col key={index} md={3} className="mb-3">
                <CategoryButton
                  variant="secondary"
                  selected={selectedCategory === category}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </CategoryButton>
              </Col>
            ))}
          </Row>
        </Container>
      </Section>

      <BlogList selectedCategory={selectedCategory} />
      <Section
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="py-5"
      >
        <NewsletterSubscription />
      </Section>
    </>
  );
};

export default Blog;
