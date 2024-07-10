import React from "react";
import { motion } from "framer-motion";
import "./Awards.css";
import styled from "styled-components";

const Awards = () => {
  const Title = styled.h2`
    position: relative;
    display: inline-block;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      height: 4px;
      width: 50px;
      background-color: #00aaff;
      border-radius: 2px;
      transform: translateX(-50%);
    }
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    @media (max-width: 576px) {
      font-size: 1.75rem;
    }
  `;

  // Array of awards with images and content
  const awards = [
    {
      title: "Learning Partner of the Year",
      year: "2019",
      description:
        "Recognized as the 2019 Microsoft Learning Partner of the Year, Global Knowledge Technologies has been committed to delivering high caliber training on Microsoft technologies.",
      image: "/award1.png", // Adjust path as per your directory structure
    },
    {
      title: "Fastest Growing Training Partner",
      year: "2019",
      description:
        "Validating the matchless efforts put by Global Knowledge Technologies in terms of providing matchless Red Hat training and Certifications, it has been acknowledged with Fastest Growing Training Partner-2019.",
      image: "/award2.png", // Adjust path as per your directory structure
    },
    {
      title: "Learning Partner of the Year",
      year: "2018",
      description:
        "Recipient of Cisco's prestigious and coveted Learning Partner of the Year-2018; Global Knowledge Technologies has been honored by Cisco for excelling in delivering expert-level training.",
      image: "/award3.png", // Adjust path as per your directory structure
    },
    {
      title: "IBM GTP of the Year",
      year: "2015/2014",
      description:
        "Global Knowledge Technologies for its outstanding services as a GTP of IBM has been recognized as IBM GTP of the Year in the year 2014 and 2015 consecutively.",
      image: "/award4.png", // Adjust path as per your directory structure
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-5"
    >
      <div className="container">
        <Title>Awards</Title>
        <div className="main-timeline-2">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`timeline-2 ${index % 2 === 0 ? 'left-2' : 'right-2'}`}
            >
              <div className="card">
                <div className="card-body p-4">
                  <div className="award-image">
                    <img src={award.image} alt={`Award ${index + 1}`} />
                  </div>
                  <h4 className="fw-bold mb-4">{award.title}</h4>
                  <p className="text-muted mb-4">
                    <i className="far fa-clock" aria-hidden="true"></i>{" "}
                    {award.year}
                  </p>
                  <p className="mb-0">{award.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Awards;
