// OtherService.jsx

import React from "react";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import consultancyData from "../../data/consultancyData";

const OtherService = () => {
  const { id } = useParams();

  // Find the service in consultancyData based on id
  const service = consultancyData.find(item => item.id === parseInt(id));

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{service.title}</Card.Title>
          <Card.Text>{service.content}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OtherService;
