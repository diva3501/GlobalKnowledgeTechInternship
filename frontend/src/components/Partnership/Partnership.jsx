import React, { useState } from 'react';
import './Partnership.css';
import { FaAngleDoubleDown } from 'react-icons/fa';

const partners = [
  { name: 'Microsoft', image: '/partner1.png' },
  { name: 'Artificial Intelligence', image: '/partner2.png' },
  { name: 'Anglepoint', image: '/partner3.jpeg' },
  { name: 'Red Hat', image: '/partner4.png' },
  { name: 'Tableau', image: '/partner5.png' },
  { name: 'Mulesoft', image: '/partner6.png' },
  { name: 'Blockchain', image: '/partner7.png' },
  { name: 'IBM', image: '/partner8.png' }
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
