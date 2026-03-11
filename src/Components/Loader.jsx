import React, { useEffect } from 'react';
import './Loader.css';

export default function Loader() {
  useEffect(() => {
    const circles = document.querySelectorAll('.circle');
    
    circles.forEach((circle, index) => {
      circle.style.animation = `bounce 1s ${index * 0.1}s infinite ease-in-out`;
    });
    
    return () => {
      circles.forEach(circle => {
        circle.style.animation = '';
      });
    };
  }, []);

  return (
    <div className="loader-container">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
}