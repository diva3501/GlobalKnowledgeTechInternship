import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AboutUs from './components/Aboutus/Aboutus';
import Partnership from './components/Partnership/Partnership';
import TechnologyPrograms from './components/TechnologyPrograms/TechnologyPrograms';
import GlobalPartner from './components/GlobalPartner/GlobalPartner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Partnership />
      <TechnologyPrograms />
      <AboutUs />
      <GlobalPartner />
    </div>
  );
}

export default App;
