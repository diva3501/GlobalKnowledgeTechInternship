import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import blogContent from "./blogcontent"; // Assuming blogContent is imported here

const BlogListContainer = styled.div`
  margin-top: 40px;
`;

const BlogList = ({ selectedCategory }) => {
  // Filter blogs based on selectedCategory
  const filteredBlogs = selectedCategory
    ? blogContent.filter((blog) =>
        blog.title.toLowerCase().includes(selectedCategory.toLowerCase())
      )
    : blogContent;

  return (
    <BlogListContainer>
      <Container>
        <Row>
          {filteredBlogs.map((blog) => (
            <Col key={blog.id} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={blog.imageUrl} alt={blog.title} />
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
    </BlogListContainer>
  );
};

export default BlogList;
