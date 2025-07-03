import React, { useEffect, useRef } from 'react';

const MatrixRain = ({ onLoadComplete }) => {
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
    
    // Enhanced Matrix characters including Japanese characters for more visual impact
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const japaneseChars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン";
    const allChars = (matrix + japaneseChars).split("");
    
    const fontSize = 12; // Slightly larger font
    const columns = Math.floor(canvas.width / fontSize);
    
    // Arrays to track properties of each column
    const drops = [];
    const speeds = [];
    const opacities = [];
    
    // Initialize with random values for more dynamic effect
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
      speeds[i] = Math.random() * 0.5 + 0.5; // Random speed between 0.5 and 1
      opacities[i] = Math.random() * 0.5 + 0.5; // Random opacity
    }
    
    // Drawing the characters with enhanced effects
    const draw = () => {
      // Black background with opacity to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)'; // Lower opacity for longer trails
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set font
      ctx.font = fontSize + 'px monospace';
      
      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Create gradient effect for each character
        const gradient = ctx.createLinearGradient(0, drops[i] * fontSize - 100, 0, drops[i] * fontSize);
        gradient.addColorStop(0, `rgba(0, 255, 0, ${opacities[i] * 0.1})`);
        gradient.addColorStop(0.8, `rgba(0, 255, 0, ${opacities[i] * 0.8})`);
        gradient.addColorStop(1, `rgba(0, 255, 0, ${opacities[i]})`);
        
        ctx.fillStyle = gradient;
        
        // Random character
        const text = allChars[Math.floor(Math.random() * allChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Reset drop when it reaches bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
          speeds[i] = Math.random() * 0.5 + 0.5; // Randomize speed again
          opacities[i] = Math.random() * 0.5 + 0.5; // Randomize opacity again
        }
        
        // Move drop down at its specific speed
        drops[i] += speeds[i];
      }
      
      requestRef.current = requestAnimationFrame(draw);
    };
    
    // Start animation
    requestRef.current = requestAnimationFrame(draw);
    
    // Simulate loading completion
    const timer = setTimeout(() => {
      if (onLoadComplete) {
        onLoadComplete();
      }
    }, 4500);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(requestRef.current);
      clearTimeout(timer);
    };
  }, [onLoadComplete]);
  
  return <canvas ref={canvasRef} className="matrix-canvas" />;
};

export default MatrixRain;