import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Partnership from './components/Partnership/Partnership';
import TechnologyPrograms from './components/TechnologyPrograms/TechnologyPrograms';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Partnership />
      <TechnologyPrograms />
    </>
  );
}

export default App;
