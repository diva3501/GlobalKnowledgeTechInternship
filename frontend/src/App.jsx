// App.jsx

import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/Landingpage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import AboutPage from "./pages/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
import Academics from "./pages/Academics/Academics";
import Blog from "./pages/Blog/Blog";
import Offers from "./pages/Offers/Offers";
import BlogDetail from "./pages/Blog/BlogDetail";
import Cart from "./pages/Offers/Cart"; // Import the Cart component
import GlobalStyle from "./GlobalStyle";
import "./components/Navbar/Navbar.module.css";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Container fluid className="flex-grow-1 d-flex flex-column align-items-center">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/aboutgkt" element={<AboutPage />} />
          <Route path="/academicsgkt" element={<Academics />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/cart/:courseId" element={<Cart />} /> {/* Add dynamic Cart route */}
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
