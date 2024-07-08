import React from "react";
import "./GlobalPartner.css";
import { motion } from "framer-motion";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

const logos = [
  { src: "/global2.png", alt: "Global Partner 2" },
  { src: "/global3.png", alt: "Global Partner 3" },
  { src: "/global4.png", alt: "Global Partner 4" },
  { src: "/global1.png", alt: "Global Partner 1" },
  { src: "/global5.png", alt: "Global Partner 5" },
];

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 50, damping: 10 },
  },
};

const GlobalPartner = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  return (
    <div className="gp-global-partner">
      <h2 className="gp-heading">Our Global Partners</h2>
      <Container ref={ref}>
        <Row className="justify-content-center">
          {logos.map((logo, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4">
              <motion.div
                className="gp-logo-wrapper"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={cardVariants}
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
