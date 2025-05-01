import React, { useRef, useState } from "react";
import AboutBackground from "../Assets/about-background-new.png";
import AboutBackgroundImage from "../Assets/about-bg-new.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  const [showWhyChayankaro, setShowWhyChayankaro] = useState(false);
  const contentRef = useRef(null);

  const handleToggle = () => {
    setShowWhyChayankaro((prev) => !prev);
  };

  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Putting the Power Back in Your Hands
        </h1>
        <p className="primary-text">
          At <a href="https://chayankaro.com/" target="_blank" className="primary-link" rel="noreferrer">chayankaro.com</a>, we believe home services should be safe, flexible, and in your control. You choose who delivers the service. We ensure the quality.
        </p>
        <div
          id="why-chayankaro"
          ref={contentRef}
          style={{
            maxHeight: showWhyChayankaro ? `${contentRef.current?.scrollHeight}px` : "0px",
            overflow: "hidden",
            transition: "max-height 1.2s ease",
          }}
          className="why-chayankaro-section"
        >
          <h2 className="primary-subheading">Why Chayankaro?</h2>
          <ul className="why-chayankaro-list">
            <li>Choose your preferred expert</li>
            <li>Transparent pricing and reviews</li>
            <li>Verified professionals</li>
            <li>Reliable support</li>
          </ul>
        </div>
        <div className="about-buttons-container">
          <button className="secondary-button" onClick={handleToggle}>
            {showWhyChayankaro ? "Learn Less" : "Learn More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
