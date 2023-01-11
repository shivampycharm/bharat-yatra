import React from "react";
import Hero from "../components/Hero";
import heroimg from "../assets/about.jpg";
import Trips from "../components/Trips";

function Service() {
  return (
    <>
      <Hero cName="hero-mid" heroImg={heroimg} title="Services" />
      <Trips />
    </>
  );
}

export default Service;
