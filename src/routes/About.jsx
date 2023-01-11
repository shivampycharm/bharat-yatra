import React from "react";
import Hero from "../components/Hero";
import heroimg from "../assets/about.jpg";
import Aboutus from "../components/Aboutus";

function About() {
  return (
    <>
      <Hero cName="hero-mid" heroImg={heroimg} title="About" />
      <Aboutus />
    </>
  );
}

export default About;
