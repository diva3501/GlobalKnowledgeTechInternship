import React, { useState, useEffect } from "react";
import "./Partnership.css";
import { FaAngleDoubleDown } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="partnership-container"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
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
