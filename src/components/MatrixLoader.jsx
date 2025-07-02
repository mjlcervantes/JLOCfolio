import React, { useState, useEffect } from 'react';
import MatrixRain from './MatrixRain';
import '../styles/matrix.css';

const MatrixLoader = ({ onLoadComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onLoadComplete) {
        setTimeout(onLoadComplete, 1000); // Give time for fade-out animation
      }
    }, 4500);
    
    return () => clearTimeout(timer);
  }, [onLoadComplete]);
  
  return (
    <div 
      className="matrix-loader" 
      style={{ 
        opacity: isLoading ? 1 : 0,
        display: isLoading ? 'flex' : 'flex',
        transition: 'opacity 1s ease'
      }}
    >
      <MatrixRain />
      <div className="loading-content">
        <div className="loading-title">JLC.INIT()</div>
        <div className="loading-text">Initializing Portfolio Matrix...</div>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default MatrixLoader;