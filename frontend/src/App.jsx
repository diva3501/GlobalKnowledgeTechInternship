import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landingpage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './pages/AboutPage/AboutPage';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/aboutgkt' element={<AboutPage/>} />
      </Routes>
      
      
      
      
    </div>
  );
}

export default App;
