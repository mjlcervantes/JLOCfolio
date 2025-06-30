import React, { useState } from 'react';
import './App.css';

// Import components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white" style={{ backgroundColor: "#0f172a" }}>
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        scrollToSection={scrollToSection} 
      />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;