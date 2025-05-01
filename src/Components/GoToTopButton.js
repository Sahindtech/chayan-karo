import React, { useState, useEffect } from 'react';

const GoToTopButton = () => {
 const [isVisible, setIsVisible] = useState(false);

 // Show button when the user scrolls down 300px
 const handleScroll = () => {
  if (window.scrollY > 300) {
   setIsVisible(true);
  } else {
   setIsVisible(false);
  }
 };

 // Scroll the page back to the top
 const scrollToTop = () => {
  window.scrollTo({
   top: 0,
   behavior: 'smooth',
  });

  const baseUrl = window.location.origin; // Get the base URL
  window.history.pushState({}, '', baseUrl);
 };

 // Set up scroll event listener when component mounts
 useEffect(() => {
  window.addEventListener('scroll', handleScroll);

  // Clean up the event listener on component unmount
  return () => {
   window.removeEventListener('scroll', handleScroll);
  };
 }, []);

 return (
  isVisible && (
   <button
    onClick={scrollToTop}
    style={styles.button}
    aria-label="Go to top"
   >
    ↑
   </button>
  )
 );
};

const styles = {
 button: {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  width: '60px', // Set the width to make it round
  height: '60px', // Set the height to make it round
  borderRadius: '50%', // Make it round
  backgroundColor: '#e37d2c', // Background color (you can change this)
  color: 'white', // Text color
  fontSize: '24px', // Adjust text size to fit the circle
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  zIndex: 1000, // Ensure it stays on top of other elements
 },
};

export default GoToTopButton;
