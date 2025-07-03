import React, { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const animationActive = useRef(true);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas element not found");
      return;
    }
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error("Could not get 2D context from canvas");
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
    
    // Enhanced Matrix characters including Japanese characters for more visual impact
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const japaneseChars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン";
    const allChars = (matrix + japaneseChars).split("");
    
    const fontSize = 14; // Slightly larger font for better visibility
    const columns = Math.floor(canvas.width / fontSize);
    
    // Arrays to track properties of each column
    const drops = [];
    const speeds = [];
    const opacities = [];
    const colors = [];
    
    // Color variations for more visual interest
    const colorVariations = [
      { r: 0, g: 255, b: 0 },    // Classic green
      { r: 0, g: 255, b: 100 },  // Mint green
      { r: 0, g: 200, b: 100 },  // Teal-ish
      { r: 50, g: 255, b: 50 }   // Bright green
    ];
    
    // Initialize with random values for more dynamic effect
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
      speeds[i] = Math.random() * 0.5 + 0.5; // Random speed between 0.5 and 1
      opacities[i] = Math.random() * 0.5 + 0.5; // Random opacity
      colors[i] = colorVariations[Math.floor(Math.random() * colorVariations.length)];
    }
    
    // Drawing the characters with enhanced effects
    const draw = () => {
      if (!animationActive.current || !canvas || !ctx) return;
      
      // Black background with opacity to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Lower opacity for longer trails
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set font
      ctx.font = `${fontSize}px monospace`;
      
      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Create gradient effect for each character
        const color = colors[i];
        const gradient = ctx.createLinearGradient(0, drops[i] * fontSize - 100, 0, drops[i] * fontSize);
        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacities[i] * 0.1})`);
        gradient.addColorStop(0.8, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacities[i] * 0.8})`);
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacities[i]})`);
        
        ctx.fillStyle = gradient;
        
        // Random character
        const text = allChars[Math.floor(Math.random() * allChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Reset drop when it reaches bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
          speeds[i] = Math.random() * 0.5 + 0.5; // Randomize speed again
          opacities[i] = Math.random() * 0.5 + 0.5; // Randomize opacity again
          // Occasionally change the color
          if (Math.random() > 0.8) {
            colors[i] = colorVariations[Math.floor(Math.random() * colorVariations.length)];
          }
        }
        
        // Move drop down at its specific speed
        drops[i] += speeds[i];
      }
      
      // Continue animation loop
      requestRef.current = requestAnimationFrame(draw);
    };
    
    // Start animation
    requestRef.current = requestAnimationFrame(draw);
    
    // Cleanup
    return () => {
      animationActive.current = false;
      window.removeEventListener('resize', resizeCanvas);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);
  
  return <canvas ref={canvasRef} className="matrix-canvas" />;
};

export default MatrixRain;