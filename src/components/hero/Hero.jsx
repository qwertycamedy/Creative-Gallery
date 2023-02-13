import React from "react";
import heroImg from '../../assets/img/hero.png'

const Hero = ({hero}) => {
  return (
    <section className="hero-section" ref={hero}>
      <img data-speed=".6" className="hero" src={heroImg} alt="Alt" />
      <div className="container">
        <div data-speed=".75" className="main-header">
          <h1 className="main-title">creative gallery</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
