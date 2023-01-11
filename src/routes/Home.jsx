import React from "react";
import Hero from "../components/Hero";
import heroimg from "../assets/hero.jpg";
import Destination from "../components/Destination";
import Trips from "../components/Trips";

function Home() {
  return (
    <div>
      <Hero
        cName="hero"
        heroImg={heroimg}
        title="Your Journey Your Story"
        text="Choose your Favourite Destination"
        url="/"
        btnClass="btn"
        btnText="Travel Plan"
      />
      <Destination />
      <Trips />
    </div>
  );
}

export default Home;
