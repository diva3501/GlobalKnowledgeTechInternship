import React, { useState } from "react";
import "./Partnership.css";
import { FaAngleDoubleDown } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";

const partners = [
  { name: "Microsoft", image: "/partner1.png" },
  { name: "Artificial Intelligence", image: "/partner2.png" },
  { name: "Anglepoint", image: "/partner3.jpeg" },
  { name: "Red Hat", image: "/partner4.png" },
  { name: "Tableau", image: "/partner5.png" },
  { name: "Mulesoft", image: "/partner6.png" },
  { name: "Blockchain", image: "/partner7.png" },
  { name: "IBM", image: "/partner8.png" },
];

const Partnership = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedPartners = showAll ? partners : partners.slice(0, 4);

  return (
    <div className="partnership">
      <h2 className="heading">Our Partnerships</h2>
      <div className="card-container cardcontainer d-flex justify-content-center mt-5 mb-5 gap-5 flex-wrap">
        {displayedPartners.map((partner, index) => (
          <motion.div
            key={index}
            className="card cardd"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.7, delay: index * 0.2 }} // Staggered animation delay
          >
            <Card>
              <Card.Img
                variant="top"
                src={partner.image}
                alt={partner.name}
                className="card-img-top cardimgtop"
              />
              <Card.Body>
                <Card.Title className="card-title cardtitle text-center mt-3 mb-3 text-white">
                  {partner.name}
                </Card.Title>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </div>
      {!showAll && (
        <div className="view-all-container">
          <button
            className="view-all-button"
            onClick={() => setShowAll(!showAll)}
          >
            View All <FaAngleDoubleDown />
          </button>
        </div>
      )}
    </div>
  );
};

export default Partnership;
