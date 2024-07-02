import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurHappyCustomer.css";

const OurHappyCustomer = () => {
  const customerImages = [
    "customer1.png",
    "customer2.png",
    "customer3.png",
    "customer4.png",
    "customer5.png",
    "customer6.png",
    "customer7.png",
    "customer8.png",
    "customer9.png",
    "customer10.png",
    "customer11.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="customer-slider">
      <div className="container text-center">
        <h2 className="mb-5 text-white heading">Our Happy Customers</h2>
        <Slider {...settings} className="customer-slider-wrapper">
          {customerImages.map((image, index) => (
            <div key={index} className="customer-slide">
              <img
                src={`/${image}`}
                alt={`Customer ${index + 1}`}
                className="customer-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurHappyCustomer;
