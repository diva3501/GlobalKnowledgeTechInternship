import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/Landingpage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import AboutPage from "./pages/AboutPage/AboutPage";
import "./components/Navbar/Navbar.module.css";
import Footer from "./components/Footer/Footer";
import Academics from "./pages/Academics/Academics";
import Blog from "./pages/Blog/Blog";
import Offers from "./pages/Offers/Offers";
import BlogDetail from "./pages/Blog/BlogDetail";
import GlobalStyle from "./GlobalStyle";
import CourseDetail from  "./components/Coursework/CourseDetail";
import ServiceList from "./components/Otherservice/ServiceList";
import Webinars from "./pages/Webinar/Webinars";
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container
        fluid
        className="flex-grow-1 d-flex flex-column align-items-center"
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/aboutgkt" element={<AboutPage />} />
          <Route path="/academicsgkt" element={<Academics />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/navbar" element={<Offers/>}/>
          <Route path="/course/:courseCode" element={<CourseDetail />} />
          <Route path="/service/:serviceid" element={<ServiceList />} />
          <Route path="webinar" element={<Webinars/>} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
