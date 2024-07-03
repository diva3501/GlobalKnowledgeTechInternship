import React, { useState } from "react";
import styled from "styled-components";
import { Container, Form, Button } from "react-bootstrap";

const NewsletterSection = styled.div`
  padding: 60px 0;
`;

const Title = styled.h3`
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

const SubscribeForm = styled(Form)`
  max-width: 400px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SubscribeButton = styled(Button)`
  width: 100%;
  background-color: #007bff;
  border-color: #007bff;
  &:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
`;

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic (e.g., submit to backend, show confirmation)
    console.log("Subscribing with email:", email);
    // Reset email field after submission
    setEmail("");
  };

  return (
    <NewsletterSection>
      <Container className="text-center p-5">
        <Title>Subscribe to Our Newsletter</Title>
        <SubscribeForm onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <SubscribeButton type="submit" className="mt-3">Subscribe</SubscribeButton>
        </SubscribeForm>
      </Container>
    </NewsletterSection>
  );
};

export default NewsletterSubscription;
