import React, { useState, useEffect, useCallback } from 'react';
import MatrixRain from './MatrixRain';
import '../styles/matrix.css';

const MatrixLoader = ({ onLoadComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState(4);
  const [statusMessage, setStatusMessage] = useState("Loading system components...");
  
  // Function to handle completion of loading
  const completeLoading = useCallback(() => {
    console.log("Matrix loader completing...");
    setIsLoading(false);
    
    // Give time for fade-out animation
    setTimeout(() => {
      console.log("Matrix loader complete callback fired");
      if (onLoadComplete) {
        onLoadComplete();
      }
    }, 1500);
  }, [onLoadComplete]);
  
  useEffect(() => {
    // Ensure the matrix effect has enough time to be visible
    console.log("Matrix loader initialized");
    
    // Status messages to display during loading
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
    
    // Progress bar animation with improved reliability
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        // If we've reached 100%, clear interval and complete loading
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
    
    // Ensure loading completes after a set time, even if progress animation has issues
    const completeTimer = setTimeout(() => {
      if (progress < 100) {
        console.log("Forcing completion of matrix loader after timeout");
        setProgress(100);
      }
      completeLoading();
    }, 6000);
    
    // Cleanup function
    return () => {
      clearTimeout(completeTimer);
      clearInterval(progressInterval);
      clearInterval(countdownInterval);
    };
  }, [completeLoading, progress]);
  
  // Effect to trigger completion when progress reaches 100%
  useEffect(() => {
    if (progress === 100 && isLoading) {
      console.log("Progress reached 100%, completing loading");
      completeLoading();
    }
  }, [progress, isLoading, completeLoading]);
  
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