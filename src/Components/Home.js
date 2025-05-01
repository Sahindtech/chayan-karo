import React from 'react'
import Navbar from './Navbar'
import bannerBackground from '../Assets/home-banner-background-new.png'
import { FiArrowRight } from "react-icons/fi";
import RotatingImages from './RotateImage';
const Home = () => {

  const redirectToPage = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={bannerBackground} alt="banner background" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Trusted Home Services, <br />
            Your Choice Our Expert
            <br />
          </h1>
          <h2 style={{ color: '#e37d2c' }}>#AbChayanKaro</h2>
          <p className="primary-text">
            Get professional help for your AC, beauty & wellness, pest issues, or carpentry – and choose who delivers it.
            <br />
            No surprises, Just great service.
          </p>
          <button className="secondary-button" onClick={() => redirectToPage("https://linktr.ee/Chayankaro")}>
            Book a Service <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <RotatingImages />
        </div>
      </div>
    </div>
  )
}

export default Home