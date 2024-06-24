import React, { useState, useEffect } from 'react';
import './OurHappyCustomer.css';

const OurHappyCustomer = () => {
  const customerImages = [
    'customer1.png',
    'customer2.png',
    'customer3.png',
    'customer4.png',
    'customer5.png',
    'customer6.png',
    'customer7.png',
    'customer8.png',
    'customer9.png',
    'customer10.png',
    'customer11.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % customerImages.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [customerImages.length]);

  const getDisplayedImages = () => {
    const end = currentIndex + 7;
    return [...customerImages.slice(currentIndex, end), ...customerImages.slice(0, end > customerImages.length ? end - customerImages.length : 0)];
  };

  return (
    <div className="customer-slider">
      <h2>Our Happy Customers</h2>
      <div className="customer-slider-wrapper">
        {getDisplayedImages().map((image, index) => (
          <img
            key={index}
            src={`/${image}`}
            alt={`Customer ${index + 1}`}
            className={`customer-image ${currentIndex === index ? 'visible' : ''}`}
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          />
        ))}
      </div>
    </div>
  );
};

export default OurHappyCustomer;
