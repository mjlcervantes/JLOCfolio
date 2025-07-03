import React, { useState, useEffect } from 'react';
import MatrixRain from './MatrixRain';
import '../styles/matrix.css';

const MatrixLoader = ({ onLoadComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState(4);
  const [statusMessage, setStatusMessage] = useState("Loading system components...");
  
  useEffect(() => {
    // Ensure the matrix effect has enough time to be visible
    console.log("Matrix loader initialized");
    
    // Status messages to display during loading - moved inside useEffect to fix dependency warning
    const statusMessages = [
      "Loading system components...",
      "Connecting to matrix servers...",
      "Initializing neural networks...",
      "Decrypting portfolio data...",
      "Finalizing connection...",
      "Welcome to the Matrix."
    ];
    
    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 0) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        
        // Random increment for more natural loading feel
        const increment = Math.random() * 8 + 2;
        const newProgress = Math.min(prev + increment, 100);
        
        // Update status message based on progress
        const statusIndex = Math.floor((newProgress / 100) * (statusMessages.length - 1));
        setStatusMessage(statusMessages[statusIndex]);
        
        return newProgress;
      });
    }, 100);
    
    // Complete loading after progress reaches 100%
    const completeTimer = setTimeout(() => {
      console.log("Matrix loader completing...");
      setIsLoading(false);
      if (onLoadComplete) {
        // Give more time for fade-out animation
        setTimeout(() => {
          console.log("Matrix loader complete callback fired");
          onLoadComplete();
        }, 1500);
      }
    }, 6000); // Keep the same duration
    
    return () => {
      clearTimeout(completeTimer);
      clearInterval(progressInterval);
      clearInterval(countdownInterval);
    };
  }, [onLoadComplete]);
  
  return (
    <div 
      className="matrix-loader" 
      style={{ 
        opacity: isLoading ? 1 : 0,
        display: isLoading ? 'flex' : (isLoading === false ? 'none' : 'flex'),
        transition: 'opacity 1.5s ease', // Slower fade for better effect
        pointerEvents: isLoading ? 'auto' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        backgroundColor: '#000' // Ensure black background
      }}
    >
      <MatrixRain />
      <div className="loading-content">
        <div className="loading-title">JLC.INIT()</div>
        <div className="loading-text">Initializing Portfolio Matrix...</div>
        
        {/* Countdown Timer */}
        <div className="countdown">{countdown}</div>
        
        {/* Progress Container */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-percentage">{Math.floor(progress)}%</div>
        </div>
        
        {/* Status Text */}
        <div className="status-text">{statusMessage}</div>
      </div>
    </div>
  );
};

export default MatrixLoader;