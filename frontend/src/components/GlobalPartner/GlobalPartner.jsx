import React from "react";
import "./GlobalPartner.css";
import { motion } from "framer-motion";
import { Card, Container, Row, Col } from "react-bootstrap";

const logos = [
  { src: "/global2.png", alt: "Global Partner 2" },
  { src: "/global3.png", alt: "Global Partner 3" },
  { src: "/global4.png", alt: "Global Partner 4" },
  { src: "/global1.png", alt: "Global Partner 1" },
  { src: "/global5.png", alt: "Global Partner 5" },
];

const GlobalPartner = () => {
  return (
    <div className="gp-global-partner">
      <h2 className="gp-heading">Our Global Partners</h2>
      <Container>
        <Row className="justify-content-center">
          {logos.map((logo, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4">
              <motion.div
                className="gp-logo-wrapper"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Card className="gp-card">
                  <Card.Img
                    variant="top"
                    src={logo.src}
                    alt={logo.alt}
                    className="gp-logo-image"
                  />
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default GlobalPartner;
