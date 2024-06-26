import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service, onClick }) => {
  return (
    <div className="service-card" onClick={() => onClick(service)}>
      <img src={service.image} alt={service.title} className="service-image" />
      <div className="service-content">
        <h3>{service.title}</h3>
        <p>
          {service.content.split("\n")[0]}...{" "}
          <span className="read-more">Read more</span>
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
