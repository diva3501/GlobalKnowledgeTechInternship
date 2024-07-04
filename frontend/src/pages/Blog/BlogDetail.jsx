import React from "react";
import { useParams } from "react-router-dom";
import blogContent from "./blogcontent";
import { Container, Card } from "react-bootstrap";
import styled from "styled-components";

const GradientBackground = styled.div`
  background: linear-gradient(to right, #000000, #434343);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 20px;
`;

const BlogCard = styled(Card)`
  max-width: 800px;
  width: 100%;
  padding: 20px;
  margin: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogContent.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    
      <Container fluid>
        <BlogCard>
          <Card.Body>
            <Card.Title as="h1">{blog.title}</Card.Title>
            <Card.Text as="p">{blog.content}</Card.Text>
          </Card.Body>
        </BlogCard>
      </Container>
  );
};

export default BlogDetail;
