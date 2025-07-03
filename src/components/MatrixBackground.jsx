import React, { useEffect, useRef } from 'react';

const MatrixBackground = ({ opacity = 0.05 }) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const animationActive = useRef(true);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas element not found in MatrixBackground");
      return;
    }
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error("Could not get 2D context from canvas in MatrixBackground");
      return;
    }
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Matrix characters - expanded character set
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const characters = matrix.split("");
    
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array to track the y position of each column
    const drops = [];
    const speeds = []; // Add variable speeds for more natural effect
    
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * 10); // Start at different positions
      speeds[i] = Math.random() * 0.5 + 0.3; // Random speed between 0.3 and 0.8
    }
    
    // Drawing the characters
    const draw = () => {
      if (!animationActive.current || !canvas || !ctx) return;
      
      // Black background with opacity to create trail effect
      ctx.fillStyle = `rgba(0, 0, 0, ${Math.max(opacity, 0.15)})`; // Ensure minimum opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Cyan text with increased brightness
      ctx.fillStyle = 'rgba(0, 255, 255, 0.6)'; // Increased opacity for better visibility
      ctx.font = `${fontSize}px monospace`; // Explicit font size
      
      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = characters[Math.floor(Math.random() * characters.length)];
        
        // x = i * fontSize, y = drops[i] * fontSize
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Reset drop position if it's at the bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
          // Occasionally change speed
          if (Math.random() > 0.8) {
            speeds[i] = Math.random() * 0.5 + 0.3;
          }
        }
        
        // Increment y coordinate by variable speed
        drops[i] += speeds[i];
      }
      
      requestRef.current = requestAnimationFrame(draw);
    };
    
    // Start animation with a slight delay to avoid conflict with MatrixLoader
    const startTimer = setTimeout(() => {
      requestRef.current = requestAnimationFrame(draw);
    }, 500);
    
    // Cleanup
    return () => {
      animationActive.current = false;
      window.removeEventListener('resize', resizeCanvas);
      clearTimeout(startTimer);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [opacity]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ 
        opacity: opacity,
        display: 'block',
        imageRendering: 'optimizeSpeed'
      }}
    />
  );
};

export default MatrixBackground;