import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Partnership from './components/Partnership/Partnership';
import OtherServices from './components/OtherServices/OtherServices';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Partnership />
      <OtherServices /> 
    </>
  );
}

export default App;
