import React, { useState } from "react";
import "./Partnership.css";
import { FaAngleDoubleDown } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";

const partners = [
  { name: "Microsoft", image: "/partner1.png" },
  { name: "Artificial Intelligence", image: "/partner2.png" },
  { name: "Mulesoft", image: "/partner6.png" },
  { name: "Blockchain", image: "/partner7.png" },
  { name: "Anglepoint", image: "/partner3.jpeg" },
  { name: "Red Hat", image: "/partner4.png" },
  { name: "Tableau", image: "/partner5.png" },
  { name: "IBM", image: "/partner8.png" },
];

const Partnership = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedPartners = showAll ? partners : partners.slice(0, 4);

  return (
    <motion.div
      className="partnership-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="partnership-heading">Our Partnerships</h2>
      <div className="partnership-card-container d-flex justify-content-center mt-5 mb-5 gap-5 flex-wrap">
        {displayedPartners.map((partner, index) => (
          <motion.div
            key={index}
            className="partnership-card"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.5)",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <Card className="partnership-card-inner">
              <Card.Img
                variant="top"
                src={partner.image}
                alt={partner.name}
                className="partnership-card-img-top"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                transition={{ duration: 1 }}
              />
              <Card.Body className="partnership-card-body">
                <Card.Title className="partnership-card-title text-center mt-3 mb-3">
                  {partner.name}
                </Card.Title>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </div>
      {!showAll && (
        <div className="partnership-view-all-container">
          <motion.button
            className="partnership-view-all-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowAll(!showAll)}
          >
            View All <FaAngleDoubleDown />
          </motion.button>
        </div>
      )}
    </motion.div>
  );
};

export default Partnership;
