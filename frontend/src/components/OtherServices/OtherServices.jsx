import React from 'react';
import './OtherServices.css'; // Import the corresponding CSS file

const OtherServices = () => {
  return (
    <div className="container">
      <h2 className="text-center mb-5">Other Services</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              src="bootcamp.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Bootcamp</h5>
              <p className="card-text">
                The idea behind our Boot camps programs is to empower
                the learners to prepare and accomplish their
                Certifications exam. By taking up our Boot camps that are
                been strategically
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="BPO.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">BPO</h5>
              <p className="card-text">
                Global Knowledge Business Processing Outsourcing At
                Global Knowledge Technologies, the first step that we take
                for every project is to identify areas of inefficiency
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="DCC.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Digital Content Creation</h5>
              <p className="card-text">
                We believe effective learning tools and technology
                helps learners achieve greater success. This made GKT offer
                customized digital learning content, where our seasoned
                trainers
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
