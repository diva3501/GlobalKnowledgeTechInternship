import React, { useState } from "react";
import BlogList from "./BlogList";
import styled from "styled-components";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import blogContent from "./blogcontent";
import NewsletterSubscription from "./Newsletter";

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

const Section = styled.div`
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
      <Section>
        <Container className="py-5">
          <AboutSection>
            <AboutText>
              Welcome to the Global Knowledge Technology blog, an EduLearn
              platform dedicated to upskilling professionals in the fields of
              analytics, machine learning, AI, Python, data visualization, and
              web development. Our mission is to provide valuable insights,
              tutorials, and updates to help you stay ahead in these rapidly
              evolving fields. Join us on a journey of continuous learning and
              skill enhancement.
            </AboutText>
            <AboutImage
              src="https://via.placeholder.com/400x300?text=EduLearn+Platform"
              alt="EduLearn Platform"
            />
          </AboutSection>
        </Container>
      </Section>
      <Section>
        <Container className="py-5">
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

      <Section>
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
                    <div>
                      {blog.tags.map((tag, index) => (
                        <TagButton key={index} variant="secondary" size="sm">
                          {tag}
                        </TagButton>
                      ))}
                    </div>
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

      <Section>
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
      <NewsletterSubscription />
    </>
  );
};

export default Blog;
