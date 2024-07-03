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

const FeaturedSection = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const RecentBlogsSection = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const CategoriesSection = styled.div`
  width: 100%;
`;

const CategoryButton = styled(Button)`
  width: 100%;
  margin-bottom: 10px;
  background-color: ${(props) => (props.selected ? "#007bff" : "#6c757d")};
  border-color: #6c757d;
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
      <FeaturedSection>
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
      </FeaturedSection>

      <RecentBlogsSection>
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
                    <Button as={Link} to={`/blog/${blog.id}`} variant="primary">
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </RecentBlogsSection>

      <CategoriesSection>
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
      </CategoriesSection>

      <BlogList selectedCategory={selectedCategory} />
      <NewsletterSubscription />
    </>
  );
};

export default Blog;
