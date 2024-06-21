import React, { useState } from 'react';
import './Partnership.css';
import { FaAngleDoubleDown } from 'react-icons/fa';

const partners = [
  { name: 'Microsoft', image: '/partner1.png' },
  { name: 'Artificial Intelligence', image: '/assets/partner2.jpg' },
  { name: 'Anglepoint', image: '/assets/partner3.jpg' },
  { name: 'Red Hat', image: '/assets/partner4.jpg' },
  { name: 'Tableau', image: '/assets/partner5.jpg' },
  { name: 'Mulesoft', image: '/assets/partner6.jpg' },
  { name: 'Blockchain', image: '/assets/partner7.jpg' },
  { name: 'IBM', image: '/assets/partner8.jpg' }
];

const Partnership = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedPartners = showAll ? partners : partners.slice(0, 4);

  return (
    <div className="partnership">
      <h2 className="heading">Our Partnership</h2>
      <div className="card-container">
        {displayedPartners.map((partner, index) => (
          <div className="card" key={index}>
            <img src={partner.image} alt={partner.name} className="card-image" />
            <div className="card-name">{partner.name}</div>
          </div>
        ))}
      </div>
      <div className="view-all-container">
        <button className="view-all-button" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'View Less' : 'View All'} <FaAngleDoubleDown />
        </button>
      </div>
    </div>
  );
};

export default Partnership;
