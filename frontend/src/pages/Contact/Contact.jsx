import React, { useEffect, useState } from 'react';
import './Contact.css';
import contactsData from './Contacts';

const ContactCard = ({ city, address, phone, email, trainingEmail, imageUrl }) => (
  <div className="card">
    <img src={imageUrl} alt={`${city}`} className="card-image" />
    <h2 className="title">{city}</h2>
    <p className="address">
      {address.split('\n').map((line, index) => (
        <React.Fragment key={index}>{line}<br /></React.Fragment>
      ))}
    </p>
    <div className="contact-info">
      <p>Tel: {phone}</p>
      {trainingEmail && <p>For Training: {trainingEmail}</p>}
      <p>Email: {email}</p>
    </div>
  </div>
);

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(contactsData.contacts);
  }, []);

  return (
    <div className="container">
      {contacts.map((contact, index) => (
        <ContactCard
          key={index}
          city={contact.city}
          address={contact.address}
          phone={contact.phone}
          email={contact.email}
          trainingEmail={contact.trainingEmail}
          imageUrl={contact.imageUrl}
        />
      ))}
    </div>
  );
};

export default Contact;
