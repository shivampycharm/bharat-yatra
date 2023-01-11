import React from "react";

function Hero(shivam) {
  return (
    <section className={shivam.cName}>
      <img src={shivam.heroImg} alt="Hero-Img" />
      <div className="hero-text">
        <h1>{shivam.title}</h1>
        <p>{shivam.text}</p>
        <a href={shivam.url} className={shivam.btnClass}>
          {shivam.btnText}
        </a>
      </div>
    </section>
  );
}

export default Hero;
