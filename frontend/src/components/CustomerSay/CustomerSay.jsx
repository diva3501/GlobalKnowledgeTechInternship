import React, { useState, useEffect } from "react";
import { IoMdQuote } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CustomerSay.module.css";

const feedbackData = [
  {
    content:
      "We chose to get trained on IBM technologies with Global Knowledge Technologies, considering it is one of IBM's Global training partners. It was an overall excellent experience and we really appreciate the way the trainers took initiatives to make the training more interactive for us.",
    name: "K.Khan",
    image: "feedback1.png",
  },
  {
    content:
      "I thoroughly enjoyed the engaging training session from Global Knowledge Technologies. In fact after attending the Microsoft Fundamentals session I registered for another course and have 'No Regrets'. The trainer was able to explain the concepts with industry-based scenarios which made a vast difference in grasping the content.",
    name: "Disha",
    image: "feedback2.png",
  },
  {
    content:
      "Global Knowledge Technologies' Tableau courses have been a boon for my career endeavor. Having an officially valid course completion certificate from Tableau through GKT on the completion of the course not only validated my data skills but also has substantially increased my resume value. Pricing was the least compared to other regions in the Tableau site and that was a major decision factor.",
    name: "Karthik S",
    image: "feedback3.png",
  },
  {
    content:
      "Global Knowledge Technologies' Tableau courses have been a boon for my career endeavor. Having an officially valid course completion certificate from Tableau through GKT on the completion of the course not only validated my data skills but also has substantially increased my resume value. Pricing was the least compared to other regions in the Tableau site and that was a major decision factor.",
    name: "Sagar N",
    image: "feedback4.png",
  },
];

const CustomerSay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackData.length);
    }, 4000); // Change card every 9 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className={`${styles.customerSayContainer} container py-5`}>
      <h2 className="heading">What Our Customers Say</h2>
      <div
        className={`${styles.feedbackCardsContainer} d-flex justify-content-center`}
      >
        {feedbackData.map((feedback, index) => (
          <div
            key={index}
            className={`${styles.feedbackCard} ${
              index === currentIndex ? styles.active : ""
            }`}
          >
            <IoMdQuote className={styles.quoteIcon} />
            <p className={styles.feedbackCardContent}>{feedback.content}</p>
            <div className={styles.feedbackCardDivider}></div>
            <img
              src={`/${feedback.image}`}
              alt={`Customer ${index + 1}`}
              className={styles.customerCardImage}
            />
            <p className={styles.customerCardName}>{feedback.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerSay;
