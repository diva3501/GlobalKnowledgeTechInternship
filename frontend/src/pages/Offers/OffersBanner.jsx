import React, { useState, useEffect } from 'react';

function OffersBanner() {
  const [currentOffer, setCurrentOffer] = useState(0);
  const offers = [
    {
      title: 'Tableau Courses - 20% Off',
      description: 'Get 20% off on all Tableau courses. Limited time offer!',
      //image: 'https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169850.jpg?ga=GA1.1.1616826076.1720205316&semt=sph',
      additionalText: 'Enroll Now!',
    },
    {
      title: 'Red Hat Courses - 30% Off',
      description: 'Get 30% off on all Red Hat courses. Limited time offer!',
      //image: 'data:image/jpeg;base64,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',
      additionalText: 'Start Learning Today!',
    },
    {
      title: 'Mulesoft Courses - 25% Off',
      description: 'Get 25% off on all Mulesoft courses. Limited time offer!',
      //image: 'https://mindmajix.com/_next/image?url=https%3A%2F%2Fcdn.mindmajix.com%2Fcourses%2Fmulesoft-training-120620.png&w=640&q=75',
      additionalText: 'Don\'t Miss Out!',
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentOffer((currentOffer + 1) % offers.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentOffer, offers.length]);

  return (
    <div
      className="offers-banner"
      style={{
        width: '100%',
        height: '200px',
        backgroundImage: `url(${offers[currentOffer].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '24px',
        fontWeight: 'bold',
        paddingTop: '150px',
        paddingBottom: '170px',
      }}
    >
      <div className="offers-banner-content" style={{ paddingTop: '20px' }}>
        <h1
          style={{
            transform: 'translateX(0)',
            transition: 'transform 0.5s ease-in-out',
            textAlign: 'center',
          }}
        >
          {offers[currentOffer].title}
        </h1>
        <h2
          style={{
            transform: 'translateX(0)',
            transition: 'transform 0.5s ease-in-out',
            textAlign: 'center',
          }}
        >
          {offers[currentOffer].description}
        </h2>
        <h2
          style={{
            transform: 'translateX(0)',
            transition: 'transform 0.5s ease-in-out',
            textAlign: 'center',
            color: 'blue',
          }}
        >
          {offers[currentOffer].additionalText}
        </h2>
        <h1
          style={{
            textAlign: 'center',
            paddingTop: '50px',
            transform: 'translateX(0)',
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          Courses Offered
        </h1>
      </div>
    </div>
  );
}

export default OffersBanner;
