import React from 'react'
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Partnership from '../Partnership/Partnership';
import TechnologyPrograms from '../TechnologyPrograms/TechnologyPrograms';
import Aboutus from '../Aboutus/Aboutus';
import GlobalPartner from '../GlobalPartner/GlobalPartner';
import OurHappyCustomer from '../OurHappyCustomer/OurHappyCustomer';
import Coursework from '../Coursework/Coursework';
import CustomerSay from '../CustomerSay/CustomerSay';
import Otherservice from '../Otherservice/Otherservice';


const LandingPage = () => {
  return (
    <div className="App">
      
      <Home />
      <Partnership />
      <TechnologyPrograms />
      <Aboutus /> 
      <GlobalPartner />
      <Otherservice/>
      <OurHappyCustomer />
      <Coursework />
      <CustomerSay />
    </div>
  );
}

export default LandingPage