App.jsx

import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landingpage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './pages/AboutPage/AboutPage';
import './components/Navbar/Navbar.module.css';
import Footer from './components/Footer/Footer';
import Academics from './pages/Academics/Academics';
import Blog from './components/Navbar/Blog/Blog';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutgkt" element={<AboutPage />} />
        <Route path="/academicsgkt" element={<Academics/>} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;