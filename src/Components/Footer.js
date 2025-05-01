import React from "react";
import Logo from "../Assets/final-logo-2.png";
import { BsTwitterX, BsTelephoneFill, BsEnvelopeFill, BsGeoAltFill } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="footer-wrapper">
        <div className="footer-section-one">
          <div className="footer-logo-container">
            <img src={Logo} alt="Chayan Karo Logo" height={500} width={500} />
          </div>
          <div className="footer-icons">
            <a href="https://wa.me/8299217231" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="footer-icon" style={{ color: '#4c4c4c' }} />
            </a>
            <a href="https://x.com/chayankaroindia" target="_blank" rel="noopener noreferrer">
              <BsTwitterX className="footer-icon" style={{ color: '#4c4c4c' }} />
            </a>
            <a href="https://www.youtube.com/@chayankaroindia" target="_blank" rel="noopener noreferrer">
              <BsYoutube className="footer-icon" style={{ color: '#4c4c4c' }} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61574757728691" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="footer-icon" style={{ color: '#4c4c4c' }} />
            </a>
            <a href="https://www.instagram.com/chayankaro?igsh=MnZmczIyd2lua2w5" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="footer-icon" style={{ color: '#4c4c4c' }} />
            </a>
          </div>
        </div>

        <div className="footer-section-two">
          {/* Left side links */}
          <div className="footer-section-columns">
            <span onClick={() => handleScroll('home')}>Home</span>
            <span onClick={() => handleScroll('about')}>About</span>
            <span onClick={() => handleScroll('services')}>Service</span>
            <span onClick={() => handleScroll('work')}>Work</span>
            <span onClick={() => handleScroll('contact')}>Contact</span>
            <span onClick={() => handleScroll('testimonials')}>Testimonials</span>
          </div>

          {/* Right side contact info with icons */}
          <div className="footer-section-columns footer-contact-columns">
            <div className="footer-contact-item">
              <BsTelephoneFill className="contact-icon" style={{ color: '#4c4c4c' }} />
              <a href="tel:+918299217231" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: '#4c4c4c' }}>
                +91 8299217231
              </a>
            </div>

            <div className="footer-contact-item">
              <BsEnvelopeFill className="contact-icon" style={{ color: '#4c4c4c' }} />
              <a href="mailto:chayankaroindia@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: '#4c4c4c' }}>
                chayankaroindia@gmail.com
              </a>
            </div>

            <div className="footer-contact-item">
              <BsGeoAltFill className="contact-icon" style={{ color: '#4c4c4c' }} />
              <a href="https://maps.google.com/?q=Chayan+Karo+India+Private+Limited+610/003+Keshavnagar+Sitapur+Road+Lucknow+226020"
                target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: '#4c4c4c' }}>
                Chayan Karo India Private Limited<br />
                610/003, Keshavnagar,<br />
                Sitapur Road, Lucknow – 226020
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="footer-bottom-bar">
        © 2025 Chayan Karo India Private Limited. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
