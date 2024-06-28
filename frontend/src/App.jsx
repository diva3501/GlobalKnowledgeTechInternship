import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landingpage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './pages/AboutPage/AboutPage';
import './components/Navbar/Navbar.module.css';

function App() {
  return (
    <Container fluid className="App">
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutgkt" element={<AboutPage />} />
      </Routes>
    </Container>
  );
}

export default App;

