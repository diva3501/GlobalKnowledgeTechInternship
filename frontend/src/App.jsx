import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landingpage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './pages/AboutPage/AboutPage';
import Coursework from './components/Coursework/Coursework';
import CourseDetail from './components/Coursework/CourseDetail'; // Import the new component
import Footer from './components/Footer/Footer';
import './components/Navbar/Navbar.module.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutgkt" element={<AboutPage />} />
        <Route path="/academicsgkt" element={<Coursework />} />
        <Route path="/course/:courseCode" element={<CourseDetail />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
