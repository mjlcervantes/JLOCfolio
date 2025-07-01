import React, { useEffect } from 'react';
import Portfolio from './components/JLOCfolio';
import './styles/reset.css'; // Import reset CSS first
import './App.css';
import './styles/portfolio.css'; // Import the portfolio styles

// Force the background color to be set
const forceBackgroundColor = () => {
  document.body.style.backgroundColor = '#0f172a';
  document.body.style.color = 'white';
  document.documentElement.style.backgroundColor = '#0f172a';
};

function App() {
  // Force background color on mount and when the component updates
  useEffect(() => {
    // Set background color immediately
    forceBackgroundColor();
    
    // Set up an interval to ensure background color is maintained
    const intervalId = setInterval(forceBackgroundColor, 1000);
    
    // Add a class to the body element
    document.body.classList.add('portfolio-body');
    
    // Clean up interval on unmount
    return () => {
      clearInterval(intervalId);
      document.body.classList.remove('portfolio-body');
    };
  }, []);

  return (
    <div 
      className="App" 
      style={{ 
        backgroundColor: '#0f172a', 
        color: 'white', 
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to bottom, rgba(15, 23, 42, 1), rgba(15, 23, 42, 0.95))'
      }}
    >
      <Portfolio />
    </div>
  );
}

export default App;