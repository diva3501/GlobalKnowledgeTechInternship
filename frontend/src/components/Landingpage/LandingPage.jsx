import React from 'react'
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Partnership from '../Partnership/Partnership';
import TechnologyPrograms from '../TechnologyPrograms/TechnologyPrograms';
import Aboutus from '../Aboutus/Aboutus';
import Otherservice from '../Otherservice/Otherservice';
import GlobalPartner from '../GlobalPartner/GlobalPartner';
import OurHappyCustomer from '../OurHappyCustomer/OurHappyCustomer';
import Coursework from '../Coursework/Coursework';
import CustomerSay from '../CustomerSay/CustomerSay';
import Footer from '../Footer/Footer';

const LandingPage = () => {
  return (
    <div className="App">
      <Home />
      <Partnership />
      <TechnologyPrograms />
      <Aboutus />
      <Otherservice />
      <GlobalPartner />
      <OurHappyCustomer />
      <Coursework />
      <CustomerSay />
      <Footer />
    </div>
  );
}

export default LandingPage
