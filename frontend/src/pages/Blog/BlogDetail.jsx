import React from "react";
import { useParams } from "react-router-dom";
import blogContent from "./blogcontent";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
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
  margin: 40px;
  padding: 30px;
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
    <GradientBackground>
      <Container>
        <Row>
          <Col md={3} style={{ marginTop: "40px" }} className="mb-4 mb-md-0 p-0 p-md-3 d-none d-md-block">
            <ListGroup>
              {blogContent.map((blog) => (
                <ListGroupItem key={blog.id} action href={`/blog/${blog.id}`}>
                  {blog.title}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col md={8}>
            <BlogCard>
              <Card.Body>
                <Card.Title as="h1" style={{ marginBottom: "20px" }}>
                  {blog.title}
                </Card.Title>
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  fluid
                  style={{ borderRadius: "5px", marginBottom: "20px" }}
                />
                {blog.content.map((qa, index) => (
                  <div key={index} style={{ marginBottom: "20px" }}>
                    <h5 style={{ fontWeight: "600" }}>{qa.question}</h5>
                    <p style={{ marginTop: "10px" }}>{qa.answer}</p>
                  </div>
                ))}
              </Card.Body>
            </BlogCard>
          </Col>
        </Row>
      </Container>
    </GradientBackground>
  );
};

export default BlogDetail;

