import React, { useEffect, useState } from 'react';
import AcRepairHome from '../Assets/HomeImages/ac-repair-home.png';
import BeauticianHome from '../Assets/HomeImages/beautician-home.png';
import CarpenterServiceHome from '../Assets/HomeImages/carpenter-home.png';
import PestControlHome from '../Assets/HomeImages/pest-control-home.png';

const rotatingImages = [
 AcRepairHome,
 BeauticianHome,
 CarpenterServiceHome,
 PestControlHome,
];

const RotatingImages = () => {
 const [currentIndex, setCurrentIndex] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
   setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingImages.length);
  }, 5000); // Change image every 5 seconds

  return () => clearInterval(interval);
 }, []);

 return (
  <div style={{
   perspective: '1000px',
   width: '600px',
   height: '800px',
   margin: 'auto',
   position: 'relative',
  }}>
   {rotatingImages.map((image, index) => (
    <img
     key={index}
     src={image}
     alt="Rotating Home Service"
     style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
      transition: 'transform 1s, opacity 1s',
      transform: `rotateY(${(index - currentIndex) * 90}deg)`,
      opacity: index === currentIndex ? 1 : 0,
      backfaceVisibility: 'hidden',
     }}
    />
   ))}
  </div>
 );
};

export default RotatingImages;
