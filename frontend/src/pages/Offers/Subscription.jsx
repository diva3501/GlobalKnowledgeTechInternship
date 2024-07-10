import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "./OffersData";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const SubscriptionContainer = styled.div`
  padding: 3rem 1rem;
  color: #343a40;
`;

const CourseHeader = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 3rem;
`;

const CourseImage = styled.img`
  width: 100%;
  max-height: 500px;
  border-radius: 15px;

  filter: brightness(0.7);
`;

const CourseNameOverlay = styled.div`
  position: absolute;
  color: #fff;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 2.5rem;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 10px;
`;

const Card = styled.div`
  background: #fff;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardHeaderStyled = styled.div`
  background-color: ${(props) => props.bgColor};
  color: #fff;
  padding: 1rem;
  text-align: center;
  border-radius: 15px 15px 0 0;
`;

const CardTitle = styled.h5`
  margin-bottom: 0;
  font-weight: bold;
`;

const CardBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

const SubscriptionPrice = styled.h2`
  margin-top: 0;
  color: #007bff;
`;

const ContactForm = styled.form`
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 40px 120px rgba(0, 0, 0, 0.1);
  background: #f8f9fa;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-top: 3rem;
  color: #ffffff;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  font-weight: bold;
  color: #343a40;
`;

function Subscription() {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === parseInt(courseId));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <SubscriptionContainer className="container subscription-page">
      <CourseHeader className="row">
        <div className="col-12">
          <CourseImage
            src={course.image}
            alt={course.name}
            className="img-fluid"
          />
          <CourseNameOverlay>{course.name}</CourseNameOverlay>
        </div>
      </CourseHeader>
      <div className="row">
        <div className="col-md-4 mb-4">
          <Card className="card h-100">
            <CardHeaderStyled bgColor="#007bff">
              <CardTitle>BASIC</CardTitle>
            </CardHeaderStyled>
            <CardBodyStyled>
              <SubscriptionPrice>₹110,000</SubscriptionPrice>
              <p className="text-muted">(Plus all applicable taxes)</p>
              <ul className="list-unstyled mb-4 flex-grow-1">
                <li>Hands-on Labs</li>
                <li>Early access</li>
                <li>Instructor videos</li>
                <li>Course e-books</li>
              </ul>
              <button className="btn btn-primary mt-auto">Learn More</button>
            </CardBodyStyled>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card className="card h-100">
            <CardHeaderStyled bgColor="#28a745">
              <CardTitle>STANDARD</CardTitle>
            </CardHeaderStyled>
            <CardBodyStyled>
              <SubscriptionPrice>₹150,000</SubscriptionPrice>
              <p className="text-muted">(Plus all applicable taxes)</p>
              <ul className="list-unstyled mb-4 flex-grow-1">
                <li>Everything in Basic, plus:</li>
                <li>Expert Extras</li>
                <li>Certification Exams</li>
                <li>Expert chat</li>
              </ul>
              <button className="btn btn-success mt-auto">Learn More</button>
            </CardBodyStyled>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card className="card h-100">
            <CardHeaderStyled bgColor="#17a2b8">
              <CardTitle>DEVELOPER</CardTitle>
            </CardHeaderStyled>
            <CardBodyStyled>
              <SubscriptionPrice>₹75,000</SubscriptionPrice>
              <p className="text-muted">(Plus all applicable taxes)</p>
              <ul className="list-unstyled mb-4 flex-grow-1">
                <li>Developer specific courses</li>
                <li>Hands-on Labs</li>
                <li>Early access</li>
                <li>Certification Exams</li>
                <li>Course e-books</li>
              </ul>
              <button className="btn btn-info mt-auto">Learn More</button>
            </CardBodyStyled>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <SectionTitle>Contact Us</SectionTitle>
          <p className="text-light text-center">
            Have a question about the courses, instruction, and/or materials
            covered? Need help finding which course is best for you?
          </p>
          <ContactForm>
            <FormGroup className="form-group">
              <FormLabel htmlFor="firstname">First Name</FormLabel>
              <input type="message" className="form-control" id="firstname" />
            </FormGroup>
            <FormGroup className="form-group">
              <FormLabel htmlFor="lastname">Last Name</FormLabel>
              <input type="message" className="form-control" id="lastname" />
            </FormGroup>
            <FormGroup className="form-group">
              <FormLabel htmlFor="email">Email</FormLabel>
              <input type="email" className="form-control" id="email" />
            </FormGroup>
            <FormGroup className="form-group">
              <FormLabel htmlFor="message">Message</FormLabel>
              <textarea
                className="form-control"
                id="message"
                rows="3"
              ></textarea>
            </FormGroup>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </ContactForm>
        </div>
      </div>
    </SubscriptionContainer>
  );
}

export default Subscription;


/* https://ordinarycoders.com/blog/article/bootstrap-pricing-table-example */