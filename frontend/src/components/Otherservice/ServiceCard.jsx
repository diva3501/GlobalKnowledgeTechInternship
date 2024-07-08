import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  return (
    <Link to={`/services/${service.id}`} className="service-card">
      <div className="service-image-container">
        <img src={service.image} alt={service.title} className="service-image" />
      </div>
      <div className="service-content">
        <h3>{service.title}</h3>
        <p>
          {service.content.split("\n")[0]}...{" "}
          <span className="read-more">Read more</span>
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard;
