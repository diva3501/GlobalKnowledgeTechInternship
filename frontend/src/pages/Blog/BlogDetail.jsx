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
import "./BlogDetail.css"; // Import the CSS file for additional styling

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogContent.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <Container fluid>
      <Row>
        <Col md={3} className="side-menu">
          <ListGroup variant="flush" className="menu-list">
            {blogContent.map((blog) => (
              <ListGroupItem key={blog.id} className="menu-item">
                <a href={`/blog/${blog.id}`} className="menu-link">
                  {blog.title}
                </a>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col md={9} className="main-content">
          <Card className="dark-card">
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
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetail;
