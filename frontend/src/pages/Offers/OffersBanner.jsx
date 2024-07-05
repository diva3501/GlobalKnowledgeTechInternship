import React, { useState, useEffect } from 'react';

function OffersBanner() {
  const [currentOffer, setCurrentOffer] = useState(0);
  const offers = [
    {
      title: 'Tableau Courses - 20% Off',
      description: 'Get 20% off on all Tableau courses. Limited time offer!',
      image: 'tableau-logo.png',
      additionalText: 'Enroll Now!',
    },
    {
      title: 'Red Hat Courses - 30% Off',
      description: 'Get 30% off on all Red Hat courses. Limited time offer!',
      image: 'red-hat-logo.png',
      additionalText: 'Start Learning Today!',
    },
    {
      title: 'Mulesoft Courses - 25% Off',
      description: 'Get 25% off on all Mulesoft courses. Limited time offer!',
      image: 'mulesoft-logo.png',
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
