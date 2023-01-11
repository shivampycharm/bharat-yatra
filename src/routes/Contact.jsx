import React from "react";
import Hero from "../components/Hero";
import heroimg from "../assets/contact.jpg";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Hero cName="hero-mid" heroImg={heroimg} title="Contact" />
      <ContactForm />
    </>
  );
}

export default Contact;
