import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landingpage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './pages/AboutPage/AboutPage';
import './components/Navbar/Navbar.module.css';


function App() {
  return (
    <>
    <link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutgkt" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;

