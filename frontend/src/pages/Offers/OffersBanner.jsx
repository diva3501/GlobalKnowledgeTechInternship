import React, { useState, useEffect } from "react";
import "./OffersBanner.css"; // Create and import a CSS file for custom styles

function OffersBanner() {
  const [currentOffer, setCurrentOffer] = useState(0);
  const offers = [
    {
      title: "Tableau Courses - 20% Off",
      description: "Get 20% off on all Tableau courses. Limited time offer!",
      image:
        "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169850.jpg",
      additionalText: "Enroll Now!",
    },
    {
      title: "Red Hat Courses - 30% Off",
      description: "Get 30% off on all Red Hat courses. Limited time offer!",
      image:
        "https://www.newwingsit.com/wp-content/uploads/2021/06/Redhat-Training-Center.jpg",
      additionalText: "Enroll Now!",
    },
    // Add more offers as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prevOffer) => (prevOffer + 1) % offers.length);
    }, 5000); // Change offer every 5 seconds
    return () => clearInterval(interval);
  }, [offers.length]);

  return (
    <div className="offers-banner">
      <div
        className="offer"
        style={{ backgroundImage: `url(${offers[currentOffer].image})` }}
      >
        <div className="offer-content">
          <h2>{offers[currentOffer].title}</h2>
          <p>{offers[currentOffer].description}</p>
          <button>{offers[currentOffer].additionalText}</button>
        </div>
      </div>
    </div>
  );
}

export default OffersBanner;
