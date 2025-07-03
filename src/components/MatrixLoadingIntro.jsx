import React, { useEffect, useRef } from 'react';
import '../styles/matrix-loading-intro.css';

const MatrixLoadingIntro = ({ onLoadComplete }) => {
  const canvasRef = useRef(null);
  const matrixContainerRef = useRef(null);
  const mainContentRef = useRef(null);
  const matrixIntervalRef = useRef(null);
  const textIntervalRef = useRef(null);
  const floatingTextIntervalRef = useRef(null);

  useEffect(() => {
    // Initialize canvas
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix characters
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");

    const fontSize = 10;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    let glitchCounter = 0;

    // Matrix rain drawing function
    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff00';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        // Random glitch effect
        if (Math.random() > 0.98) {
          ctx.fillStyle = '#ff0000';
        } else if (Math.random() > 0.96) {
          ctx.fillStyle = '#00ffff';
        } else {
          ctx.fillStyle = '#00ff00';
        }

        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      // Add random glitch scanlines
      glitchCounter++;
      if (glitchCounter % 60 === 0) {
        ctx.fillStyle = 'rgba(255, 0, 0, 0.1)';
        ctx.fillRect(0, Math.random() * canvas.height, canvas.width, 2);
      }
    };

    // Start matrix animation
    matrixIntervalRef.current = setInterval(drawMatrix, 35);

    // Loading text sequence
    const loadingTexts = [
      "INITIALIZING NEURAL NETWORK...",
      "LOADING QUANTUM ALGORITHMS...",
      "DECRYPTING DATA STREAMS...",
      "COMPILING MATRIX CODE...",
      "ESTABLISHING CONNECTION...",
      "WELCOME TO THE MATRIX..."
    ];

    let textIndex = 0;
    const loadingTextElement = document.querySelector('.loading-text');

    if (loadingTextElement) {
      textIntervalRef.current = setInterval(() => {
        if (textIndex < loadingTexts.length) {
          loadingTextElement.textContent = loadingTexts[textIndex];
          textIndex++;
        }
      }, 700);
    }

    // Create floating text elements
    const createFloatingText = () => {
      const texts = ['JLC', 'NEURAL', 'MATRIX', 'CODE', 'CYBER', 'DIGITAL'];
      const text = texts[Math.floor(Math.random() * texts.length)];
      const element = document.createElement('div');
      element.className = 'matrix-text';
      element.textContent = text;
      element.style.left = Math.random() * 100 + '%';
      element.style.top = Math.random() * 100 + '%';
      element.style.animationDelay = Math.random() * 2 + 's';
      
      const container = matrixContainerRef.current;
      if (container) {
        container.appendChild(element);
        
        setTimeout(() => {
          if (element.parentNode === container) {
            element.remove();
          }
        }, 3000);
      }
    };

    // Create floating text every 500ms
    floatingTextIntervalRef.current = setInterval(createFloatingText, 500);
    
    // Complete loading after 4 seconds
    const loadingTimer = setTimeout(() => {
      clearInterval(matrixIntervalRef.current);
      clearInterval(textIntervalRef.current);
      clearInterval(floatingTextIntervalRef.current);
      
      // Fade out matrix
      if (matrixContainerRef.current) {
        matrixContainerRef.current.style.opacity = '0';
        
        setTimeout(() => {
          if (matrixContainerRef.current) {
            matrixContainerRef.current.style.display = 'none';
          }
          if (mainContentRef.current) {
            mainContentRef.current.classList.remove('hidden');
          }
          
          // Call the completion callback
          if (onLoadComplete) {
            onLoadComplete();
          }
        }, 500);
      }
    }, 4000);

    // Resize canvas on window resize
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      clearInterval(matrixIntervalRef.current);
      clearInterval(textIntervalRef.current);
      clearInterval(floatingTextIntervalRef.current);
      clearTimeout(loadingTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, [onLoadComplete]);

  return (
    <>
      {/* Matrix Loading Screen */}
      <div id="matrix-container" ref={matrixContainerRef}>
        <canvas id="matrix-canvas" ref={canvasRef}></canvas>
        <div className="scanline"></div>
        <div className="loading-content">
          <div className="glitch-text" data-text="JLC">JLC</div>
          <div className="loading-text">INITIALIZING NEURAL NETWORK...</div>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
      </div>

      {/* Main content container - this will be shown after loading */}
      <div className="main-content hidden" id="main-content" ref={mainContentRef}>
        {/* This is just a placeholder - the actual content will be provided by the parent component */}
      </div>
    </>
  );
};

export default MatrixLoadingIntro;