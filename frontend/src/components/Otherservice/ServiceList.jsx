// ServiceList.jsx

import React from "react";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import consultancyData from "../../data/consultancyData";

const ServiceList = () => {
  const { serviceid } = useParams();

  // Find the category in the data based on serviceid
  const category = consultancyData.find((item) => item.id === parseInt(serviceid));

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <Container>
      <Card className="my-3 p-3 rounded">
        <Card.Body>
          <Card.Title>{category.category}</Card.Title>
          <Card.Text>{category.content}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ServiceList;
