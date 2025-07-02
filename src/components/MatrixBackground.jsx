import React, { useEffect, useRef } from 'react';

const MatrixBackground = ({ opacity = 0.05 }) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Matrix characters
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const characters = matrix.split("");
    
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // Array to track the y position of each column
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    
    // Drawing the characters
    const draw = () => {
      // Black background with opacity to create trail effect
      ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Green text
      ctx.fillStyle = 'rgba(0, 255, 255, 0.35)';
      ctx.font = fontSize + 'px monospace';
      
      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = characters[Math.floor(Math.random() * characters.length)];
        
        // x = i * fontSize, y = drops[i] * fontSize
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Reset drop position if it's at the bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Increment y coordinate
        drops[i]++;
      }
      
      requestRef.current = requestAnimationFrame(draw);
    };
    
    // Start animation
    requestRef.current = requestAnimationFrame(draw);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(requestRef.current);
    };
  }, [opacity]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.15 }}
    />
  );
};

export default MatrixBackground;