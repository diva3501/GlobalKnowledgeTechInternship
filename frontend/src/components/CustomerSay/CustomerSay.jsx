import React, { useState, useEffect } from 'react';
import { IoMdQuote } from 'react-icons/io';
import './CustomerSay.module.css'; // Assuming you import CSS module styles

const feedbackData = [
  {
    content: "We chose to get trained on IBM technologies with Global Knowledge Technologies, considering it is one of IBM's Global training partners. It was an overall excellent experience and we really appreciate the way the trainers took initiatives to make the training more interactive for us.",
    name: "K.Khan",
    image: "feedback1.png"
  },
  {
    content: "I thoroughly enjoyed the engaging training session from Global Knowledge Technologies. In fact after attending the Microsoft Fundamentals session I registered for another course and have 'No Regrets'. The trainer was able to explain the concepts with industry-based scenarios which made a vast difference in grasping the content.",
    name: "Disha",
    image: "feedback2.png"
  },
  {
    content: "Global Knowledge Technologies' Tableau courses have been a boon for my career endeavor. Having an officially valid course completion certificate from Tableau through GKT on the completion of the course not only validated my data skills but also has substantially increased my resume value. Pricing was the least compared to other regions in the Tableau site and that was a major decision factor.",
    name: "Karthik S",
    image: "feedback3.png"
  },
  {
    content: "Global Knowledge Technologies' Tableau courses have been a boon for my career endeavor. Having an officially valid course completion certificate from Tableau through GKT on the completion of the course not only validated my data skills but also has substantially increased my resume value. Pricing was the least compared to other regions in the Tableau site and that was a major decision factor.",
    name: "Sagar N",
    image: "feedback4.png"
  }
];

const CustomerSay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % feedbackData.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const currentFeedback = feedbackData.slice(currentIndex, currentIndex + 3);

  return (
    <div className="customer-say-container">
      <h2 className="customer-say-title">What Our Customers Say</h2>
      <div className="feedback-cards-container">
        {currentFeedback.map((feedback, index) => (
          <div key={index} className={`feedback-card card-${index + 1}`}>
            <IoMdQuote className="quote-icon" />
            <p className="feedback-card-content">{feedback.content}</p>
            <div className="feedback-card-divider"></div>
            <img src={`/${feedback.image}`} alt={`Customer ${index + 1}`} className="customer-card-image" />
            <p className="customer-card-name">{feedback.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerSay;
