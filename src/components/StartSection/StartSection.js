import React from "react";
import "./StartSection.css";

const StartSection = () => {
  return (
    <div className="hero-image-overlay">
      <img className="image-9-icon" alt="" src="./image-9@2x.png" />
      <div className="hero-image-overlay-child" />
      <div className="escape-to-a">Your hideaway in Zagreb!</div>
      <button className="book-your-stay-wrapper">
        <div className="book-your-stay">Book your stay</div>
      </button>
    </div>
  );
};

export default StartSection;
