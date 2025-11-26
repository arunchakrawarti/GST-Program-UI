import React from 'react';
import ContactHero from './ContactHero';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const ContactMain = () => {
  return (
    <div>
      <ContactHero />
      <ContactDetails />
      <ContactForm />
    </div>
  )
}

export default ContactMain;
