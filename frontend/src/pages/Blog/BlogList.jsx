import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import blogContent from "./blogcontent"; // Assuming blogContent is imported here

const BlogListContainer = styled.div`
  margin-top: 40px;
`;

const TagButton = styled(Button)`
  margin: 5px;
  background-color: #6c757d;
  border: none;
  &:hover {
    background-color: #00aaff;
  }
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
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={blog.imageUrl} alt={blog.title} />
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
    </BlogListContainer>
  );
};

export default BlogList;
