import React from "react";
import "../css/Hero.css";
import Button from "./Button";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__container">
        <p className="hero__title">Stomatologia nazwa</p>
        <p className="hero__description">
          Najlepsze leczenie stomatologiczne w okolicy!
        </p>
        <Button />
      </div>
    </div>
  );
}

export default Hero;
