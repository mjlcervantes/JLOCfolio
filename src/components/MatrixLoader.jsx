import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import MatrixRain from './MatrixRain';
import '../styles/matrix.css';

const MatrixLoader = ({ onLoadComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState(4);
  const [statusMessage, setStatusMessage] = useState("Loading system components...");
  const [showNameIntro, setShowNameIntro] = useState(false);
  const nameRef = useRef(null);
  
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
  
  // Handle the name intro animation sequence
  useEffect(() => {
    if (progress >= 100 && isLoading) {
      // Show name intro after progress reaches 100%
      setShowNameIntro(true);
      
      // Set a timeout to complete the loading after name intro
      const nameIntroTimer = setTimeout(() => {
        completeLoading();
      }, 6000); // Allow time for the name animation to play
      
      return () => clearTimeout(nameIntroTimer);
    }
  }, [progress, isLoading, completeLoading]);
  
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
        // If we've reached 100%, clear interval
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
    
    // Ensure loading progress completes after a set time
    const progressTimer = setTimeout(() => {
      if (progress < 100) {
        console.log("Forcing progress completion after timeout");
        setProgress(100);
      }
    }, 5000);
    
    // Cleanup function
    return () => {
      clearTimeout(progressTimer);
      clearInterval(progressInterval);
      clearInterval(countdownInterval);
    };
  }, [progress]);
  
  // Matrix character effect for name
  useEffect(() => {
    if (showNameIntro && nameRef.current) {
      const element = nameRef.current;
      const fullName = "Jasper Lemuel Cervantes";
      
      // Add glitch effect to the name
      const addGlitchEffect = () => {
        let iteration = 0;
        const maxIterations = fullName.length * 2;
        
        const interval = setInterval(() => {
          if (iteration >= maxIterations) {
            clearInterval(interval);
            element.textContent = fullName;
            return;
          }
          
          element.textContent = fullName
            .split("")
            .map((letter, index) => {
              if (index < iteration / 2) {
                return fullName[index];
              }
              
              const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join("");
          
          iteration += 1;
        }, 50);
        
        return () => clearInterval(interval);
      };
      
      addGlitchEffect();
    }
  }, [showNameIntro]);
  
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
      
      {!showNameIntro ? (
        // Initial loading screen
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
      ) : (
        // Name intro animation after loading completes
        <div className="name-intro-container">
          {/* Matrix-style name reveal */}
          <div className="name-intro">
            <h1 ref={nameRef} className="matrix-name">Jasper Lemuel Cervantes</h1>
            
            {/* Animated subtitle with TypeAnimation */}
            <div className="matrix-subtitle">
              <TypeAnimation
                sequence={[
                  'Welcome to my portfolio',
                  1000,
                  'Computer Engineering Student',
                  1000,
                  'Web Developer',
                  1000,
                  'Explore my work...',
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1.5em', display: 'inline-block', color: '#00ff00' }}
                repeat={1}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatrixLoader;