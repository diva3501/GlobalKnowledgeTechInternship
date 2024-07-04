import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogContent from "./blogcontent";

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
          {filteredBlogs.map((blog, index) => (
            <Col key={index} md={4} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="h-100 shadow-sm"
              >
                <Card className="h-100" style={{ height: "100%" }}>
                  <Card.Img
                    variant="top"
                    src={blog.imageUrl}
                    alt={blog.title}
                    style={{ height: "200px", objectFit: "cover" }}
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
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </BlogListContainer>
  );
};

export default BlogList;

