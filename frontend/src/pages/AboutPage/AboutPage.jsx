import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

import { motion } from "framer-motion";

const InlineTypewriter = styled.span`
  display: inline-block;
`;

const StyledSection = styled.section`
  background: linear-gradient(to right, #000000, #434343);
  padding: 5rem 0;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TeamImage = styled.img`
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
`;
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

const LeadText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 800px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
`;



const AboutPage = () => {
  return (
    <>
      <StyledSection>
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ContentWrapper style={{ maxWidth: "80%" }}>
            <Title className="mb-3 text-light">
              Enhance Your{" "}
              <InlineTypewriter>
                <span>Skills, Abilities, Strengths</span>{" "}
                {/* Removed animation */}
              </InlineTypewriter>{" "}
              and Unlock Your Potential with{" "}
              <span style={{ color: "#00aaff" }}>
                Global Knowledge Technologies
              </span>
            </Title>
            <LeadText>
              Join us to gain global knowledge and enhance your skills to
              achieve your potential.
            </LeadText>
          </ContentWrapper>
        </motion.div>
      </StyledSection>

      <StyledSection className="py-3 py-md-5 bg-dark">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="container"
        >
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6 col-xl-5">
              <TeamImage
                className="img-fluid rounded"
                loading="lazy"
                src="https://cdni.iconscout.com/illustration/premium/thumb/online-education-platform-4996048-4194809.png"
                alt="About 1"
              />
            </div>
            <div className="col-12 col-lg-6 col-xl-7">
              <div className="row justify-content-xl-center">
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  className="col-12 col-xl-11"
                >
                  <Title className="mb-3 text-light">Who Are We?</Title>
                  <LeadText className="lead text-light mb-3">
                    Commenced on and thriving since 2002,{" "}
                    <strong>Global Knowledge Technologies</strong> is the most
                    prominent provider of professional development services and
                    numerous learning courses. The organization understands that
                    the impeccable technological pace driving today’s business
                    enterprises has made it vital for companies to invest in
                    solutions that can keep your workflow updated with existing
                    and upcoming trends. This is where <strong>GKT</strong>{" "}
                    steps in when you want to instill crucial skills that pave
                    way to enabling your business to showcase its true
                    potential.
                  </LeadText>
                  <LeadText className="text-light mb-5">
                    We are a fast-growing company, but we have never lost sight
                    of our core values. We believe in collaboration, innovation,
                    and customer satisfaction. We are always looking for new
                    ways to improve our products and services.
                  </LeadText>
                  <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="row gy-4 gy-md-0 gx-xxl-5"
                  >
                    <div className="col-12 col-md-6">
                      <div className="card border-0 shadow h-100">
                        <div className="card-body d-flex align-items-start">
                          <div className="me-4 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              fill="currentColor"
                              className="bi bi-gear-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                            </svg>
                          </div>
                          <div>
                            <h2 className="h4 mb-3 text-dark">
                              Versatile Brand
                            </h2>
                            <LeadText className="text-dark mb-0">
                              We are crafting a digital method that subsists
                              life across all mediums.
                            </LeadText>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="card bg-light border-0 shadow h-100">
                        <div className="card-body d-flex align-items-start">
                          <div className="me-4 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              fill="currentColor"
                              className="bi bi-fire"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                            </svg>
                          </div>
                          <div>
                            <h2 className="h4 mb-3 text-dark">
                              Digital Agency
                            </h2>
                            <LeadText className="text-dark mb-0">
                              We believe in innovation by merging primary with
                              elaborate skills.
                            </LeadText>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </StyledSection>

      <StyledSection className="bg-dark py-5">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="container"
        >
          <div className="row">
            <div className="col-12">
              <Title className="h2  text-center text-light">Quick Facts</Title>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="row"
              >
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                  <div className="card border-0 shadow h-100">
                    <div className="card-body d-flex align-items-start">
                      <div className="me-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          className="bi bi-person-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="h4 mb-3">
                          Trained{" "}
                          <span style={{ color: "#FFA500" }}>Over 1 Lakh</span>{" "}
                          Professionals Worldwide
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                  <div className="card border-0 shadow h-100">
                    <div className="card-body d-flex align-items-start">
                      <div className="me-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          className="bi bi-globe"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm0 1.707a6.293 6.293 0 0 1 0 12.586V1.707zM2.454 2.868a6.24 6.24 0 0 1 1.786-.84l.834 1.837A9.653 9.653 0 0 0 2.454 2.868zm9.292 0a9.66 9.66 0 0 0-2.62 1.059l.834-1.837a6.24 6.24 0 0 1 1.786.84zM4.89 3.657a11.492 11.492 0 0 0-1.178 2.728A4.96 4.96 0 0 0 5 5.978zm6.22 0a4.963 4.963 0 0 0 1.288-.593 11.486 11.486 0 0 0-1.178-2.728zm.577 1.957a4.963 4.963 0 0 0-.572.086L8 10.684 5.885 5.7a4.963 4.963 0 0 0-.572-.086A11.62 11.62 0 0 0 8 11.165zm-5.963-.457a4.963 4.963 0 0 0-.572-.086L8 10.684 12.185 5.7a4.963 4.963 0 0 0-.572-.086zm-.81 2.16a11.492 11.492 0 0 0-1.178 2.728 6.24 6.24 0 0 1 1.786.84zM2.454 12.132a9.66 9.66 0 0 0 2.62-1.059l-.834 1.837a6.24 6.24 0 0 1-1.786-.84zm9.292 0a6.24 6.24 0 0 1-1.786.84l-.834-1.837a9.66 9.66 0 0 0 2.62 1.059zm-3.122 1.261a6.293 6.293 0 0 1-6.293-6.293h1.793A11.492 11.492 0 0 0 8 13.293zm0-1.793a11.492 11.492 0 0 0 1.178-2.728h1.628a6.293 6.293 0 0 1-2.806 3.826z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="h4 mb-3">
                          Reach Across{" "}
                          <span style={{ color: "#FFA500" }}>
                            50+ Countries
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                  <div className="card border-0 shadow h-100">
                    <div className="card-body d-flex align-items-start">
                      <div className="me-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          className="bi bi-briefcase"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 3a.5.5 0 0 0-.5.5v1A.5.5 0 0 0 2 5h12a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1V2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1h-1zM10 2v1H6V2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm-8 5v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H2zm0 1h12v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="h4 mb-3">
                          Over{" "}
                          <span style={{ color: "#FFA500" }}>
                            25+ Consulting
                          </span>{" "}
                          Projects
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                  <div className="card border-0 shadow h-100">
                    <div className="card-body d-flex align-items-start">
                      <div className="me-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          className="bi bi-globe"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-1.528 13.827c.03-.18.058-.358.086-.537C4.843 14.052 4.5 12.183 4.5 10c0-2.481.707-4.733 1.712-6.364A7.03 7.03 0 0 0 8 1zm0 1c1.093 0 2.132.186 3.062.521A6.978 6.978 0 0 0 11 8a6.978 6.978 0 0 0 1.062 4.479A6.978 6.978 0 0 0 8 15a6.978 6.978 0 0 0-4.478-1.062A6.978 6.978 0 0 0 8 2zm.5 4.216c.21-.286.434-.564.676-.82C9.64 5.101 9.89 5 10.2 5c.386 0 .64.2.792.364.16.173.308.44.308.844 0 .491-.3 1.063-.888 1.308.245.164.6.414.6.828 0 .456-.254.706-.612.964-.34.245-.806.616-1.308.616-.707 0-1.136-.464-1.136-1.084 0-.514.357-.92.832-1.316-.225-.226-.496-.517-.676-.92C8.147 6.514 8 6.106 8 5.7c0-.33.064-.64.184-.916.1-.233.234-.472.316-.768zm-.914 1.798c.14.284.324.528.5.732.134.159.29.315.466.484.29.275.624.565 1.056.725.036-.22.148-.376.316-.484.23-.15.598-.358.898-.608.22-.193.29-.334.29-.5 0-.2-.157-.457-.412-.634-.13-.086-.283-.16-.416-.24-.234-.137-.45-.284-.728-.4a4.978 4.978 0 0 0-2.05.94zM2.5 6.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1zm1-1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5zm1-1a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4zM2 10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 10zm12-1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5zm-1-2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="h4 mb-3">
                          Over{" "}
                          <span style={{ color: "#FFA500" }}>
                            90% Participant
                          </span>{" "}
                          are from the Corporate World
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                  <div className="card border-0 shadow h-100">
                    <div className="card-body d-flex align-items-start">
                      <div className="me-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          className="bi bi-award"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.669.864 8 0 6.331.864 5.5 3H2a.5.5 0 0 0-.492.41L1.5 3.5v1a.5.5 0 0 0 .5.5h1.526c-.035.162-.057.33-.057.5 0 1.02.292 1.973.801 2.772L4 8.5V14.5a.5.5 0 0 0 .757.429L8 13.21l3.243 1.719A.5.5 0 0 0 12 14.5V8.5l.73-.728a5.507 5.507 0 0 0 .801-2.772c0-.17-.022-.338-.057-.5H14.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-3.5l-.831-2.136zM5.832 2.136 7 1.55v4.435a5.503 5.503 0 0 0-1.252 1.004L5.832 2.136zM8 1.55 9.168 2.136l-.083 4.853a5.508 5.508 0 0 0-1.252-1.004V1.55zM4 9.146V13.77l2.243-1.19a.5.5 0 0 0 .01-.01L8 12.58l1.747.99a.5.5 0 0 0 .01.01L12 13.77V9.146a5.507 5.507 0 0 1-4-2.129 5.507 5.507 0 0 1-4 2.129zM10 1.55v4.436a5.507 5.507 0 0 0-1.252 1.004L10 1.55zM14 6.5H2v-.5h12v.5z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="h4 mb-3">
                          Network of over{" "}
                          <span style={{ color: "#FFA500" }}>
                            250+ Certified Trainers
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                  <div className="card border-0 shadow h-100">
                    <div className="card-body d-flex align-items-start">
                      <div className="me-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          className="bi bi-person-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="h4 mb-3">
                          Over{" "}
                          <span style={{ color: "#FFA500" }}>
                            2050+ Professionals
                          </span>{" "}
                          Certified in India
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add more cards as needed */}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </StyledSection>

      <StyledSection>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="container"
        >
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <Title>Our Team</Title>
              <LeadText>
                Our team of experts is dedicated to helping you reach your
                goals. We are committed to providing you with the best
                educational resources and support. Our team of experts is
                passionate about teaching and sharing their knowledge with
                others. We are always looking for new and innovative ways to
                help you achieve your goals.
              </LeadText>
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="col-md-6"
            >
              <TeamImage
                src="https://via.placeholder.com/500x500.png?text=Our+Team"
                alt="Our Team"
                className="img-fluid"
              />
            </motion.div>
          </div>
        </motion.div>
      </StyledSection>

      <StyledSection className="bg-dark py-5 text-light">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="container"
        >
          <Title className="text-center mb-5">Differentiator</Title>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-lg h-100 bg-light">
                <div className="card-body">
                  <div className="mb-4">
                    <svg
                      width="64"
                      height="64"
                      className="bi bi-book text-primary"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 2.828c.885-.37 2.06-.662 3.5-.662 1.44 0 2.615.292 3.5.662 1.885-.742 3.735-.742 5.62 0A4.96 4.96 0 0 1 15 5v10.5a.5.5 0 0 1-.812.39 5.464 5.464 0 0 0-1.69-1.017c-.866-.342-1.943-.573-3.158-.573s-2.292.23-3.158.573A5.463 5.463 0 0 0 2.812 15.89a.5.5 0 0 1-.812-.39V5c0-1.39.617-2.635 1.758-3.435zM4.5 3c-1.253 0-2.342.267-3 .535v10.972c.805-.474 1.951-.757 3.158-.757.61 0 1.182.051 1.717.145V3.535c-.658-.268-1.747-.535-3-.535zm4.5.145v10.355c.535-.094 1.107-.145 1.717-.145 1.207 0 2.353.283 3.158.757V3.535c-.658-.268-1.747-.535-3-.535s-2.342.267-3 .535z" />
                    </svg>
                  </div>
                  <h5 className="card-title text-primary">
                    Curated Course Content
                  </h5>
                  <LeadText className="card-text text-dark">
                    Curated course content bridging the gap between campuses and
                    corporate workforce enablement.
                  </LeadText>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-lg h-100 bg-light">
                <div className="card-body">
                  <div className="mb-4">
                    <svg
                      width="64"
                      height="64"
                      className="bi bi-person-badge text-primary"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6.5 2a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zM4 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0zM8 5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm-2-1a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2H1z" />
                      <path
                        fill-rule="evenodd"
                        d="M14 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                      />
                    </svg>
                  </div>
                  <h5 className="card-title text-primary">
                    Advantage Bootcamp
                  </h5>
                  <LeadText className="card-text text-dark">
                    Offer iconic “Advantage Bootcamp” enabling participants to
                    be Certificate-ready.
                  </LeadText>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-lg h-100 bg-light">
                <div className="card-body">
                  <div className="mb-4">
                    <svg
                      width="64"
                      height="64"
                      className="bi bi-cpu text-primary"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 0a.5.5 0 0 1 .5.5V2h-1V.5A.5.5 0 0 1 5 0zm6 0a.5.5 0 0 1 .5.5V2h-1V.5A.5.5 0 0 1 11 0zM5 14a.5.5 0 0 1 .5.5V16h-1v-1.5a.5.5 0 0 1 .5-.5zm6 0a.5.5 0 0 1 .5.5V16h-1v-1.5a.5.5 0 0 1 .5-.5zM0 5a.5.5 0 0 1 .5-.5H2v1H.5A.5.5 0 0 1 0 5zm14 0a.5.5 0 0 1 .5-.5H16v1h-1.5a.5.5 0 0 1-.5-.5zm-1 4a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V9.5a.5.5 0 0 1 .5-.5h10zm.5-1H1.5a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5zm-1-2a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V3.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5V6zm.5 1.5a.5.5 0 0 1 .5.5V10h-1V8.5a.5.5 0 0 1 .5-.5zM0 11a.5.5 0 0 1 .5-.5H2v1H.5A.5.5 0 0 1 0 11zm14 0a.5.5 0 0 1 .5-.5H16v1h-1.5a.5.5 0 0 1-.5-.5zm-6-5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V6zm-4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1-.5-.5V6z" />
                    </svg>
                  </div>
                  <h5 className="card-title text-primary">
                    AI-based Learning Management
                  </h5>
                  <LeadText className="card-text text-dark">
                    AI-based learning management systems that are
                    lifestyle-friendly - Anywhere, Anytime!
                  </LeadText>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </StyledSection>

      <StyledSection className="bg-dark py-5 text-light">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="container"
        >
          <Title className="text-center mb-5">Training Delivery Methods</Title>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <div className="card-body d-flex flex-column align-items-center">
                  <TeamImage
                    src="https://jooinn.com/images/primary-school-classroom-5.jpg"
                    className="card-img-top"
                    alt="Classroom Training"
                  />
                  <br />
                  <h5 className="card-title mt-3">Classroom</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <div className="card-body d-flex flex-column align-items-center">
                  <TeamImage
                    src="https://tse1.mm.bing.net/th?id=OIP.jL8Zm3L6YWW4Qynk4uTwKQHaE8&pid=Api&P=0&h=180"
                    className="card-img-top"
                    alt="Virtual Training"
                  />
                  <h5 className="card-title mt-3">Virtual</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <div className="card-body d-flex flex-column align-items-center">
                  <TeamImage
                    src="https://www.hurix.com/wp-content/uploads/2020/03/blended-learning.jpeg"
                    className="card-img-top"
                    alt="Blended Training"
                  />
                  <h5 className="card-title mt-3">Blended</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <div className="card-body d-flex flex-column align-items-center">
                  <TeamImage
                    src="https://lighthouse-tc.com/wp-content/uploads/2020/08/online-training.jpg"
                    className="card-img-top"
                    alt="Digital Training"
                  />
                  <h5 className="card-title mt-3">Digital</h5>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </StyledSection>
    </>
  );
};

export default AboutPage;
