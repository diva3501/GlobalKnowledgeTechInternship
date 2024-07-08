// ServiceCard.jsx

import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServiceCard = ({ category }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/service/${category.id}`}>
        <Card.Body>
          <Card.Title>{category.category}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default ServiceCard;
