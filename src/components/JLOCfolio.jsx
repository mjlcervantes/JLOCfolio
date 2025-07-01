import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Download, Calendar, Award, BookOpen, Code, Wrench, User, Briefcase, GraduationCap, Send, Menu, X } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

// Import CSS for background styles
import '../styles/portfolio.css';

// Safe GlitchedWriter implementation
const safeGlitchedWriter = {
  isAvailable: false,
  GlitchedWriter: null
};

// Try to load GlitchedWriter safely
try {
  const GlitchedWriterModule = require('glitched-writer');
  if (GlitchedWriterModule && GlitchedWriterModule.default) {
    safeGlitchedWriter.GlitchedWriter = GlitchedWriterModule.default;
    safeGlitchedWriter.isAvailable = true;
    console.log('GlitchedWriter loaded successfully');
  }
} catch (error) {
  console.warn('GlitchedWriter import failed:', error);
}

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const nameRef = useRef(null);
  const writerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Simple fallback animation function that doesn't rely on the GlitchedWriter library
    const animateName = () => {
      if (!nameRef.current) return;
      
      // Set the initial content
      const fullName = 'Jasper Lemuel Cervantes';
      nameRef.current.textContent = fullName;
      
      // Add a subtle pulse animation to indicate it's interactive
      const addPulseAnimation = () => {
        if (nameRef.current) {
          nameRef.current.style.transition = 'text-shadow 0.3s ease-in-out';
          nameRef.current.style.textShadow = '0 0 8px rgba(96, 165, 250, 0.7), 0 0 12px rgba(168, 85, 247, 0.5)';
          
          setTimeout(() => {
            if (nameRef.current) {
              nameRef.current.style.textShadow = '0 0 0px transparent';
            }
          }, 1000);
        }
      };
      
      // Add initial pulse
      setTimeout(addPulseAnimation, 1000);
      
      // Set up a timer for the pulse animation
      const pulseInterval = setInterval(() => {
        if (document.visibilityState === 'visible') {
          addPulseAnimation();
        }
      }, 7000); // Pulse every 7 seconds
      
      // Try to initialize GlitchedWriter if available
      let glitchInterval = null;
      
      const initGlitchedWriter = () => {
        try {
          // Only proceed if GlitchedWriter is properly loaded
          if (safeGlitchedWriter.isAvailable && safeGlitchedWriter.GlitchedWriter) {
            console.log('Initializing GlitchedWriter');
            
            // Create the writer instance with safer options
            writerRef.current = new safeGlitchedWriter.GlitchedWriter(nameRef.current, {
              letterize: true,
              iterations: 2,
              fps: 30,
              fillSpace: true,
              oneAtATime: false,
              glyphs: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
              changeChance: 0.4,
              glitchChance: 0.1,
              randomChance: 0.1,
              ghostChance: 0.1,
              trailingChance: 0.1,
            });
            
            // Write the name with a glitch effect after a delay
            setTimeout(() => {
              if (writerRef.current) {
                writerRef.current.write(fullName);
              }
            }, 800);
            
            // Set up a timer to re-trigger the effect occasionally
            glitchInterval = setInterval(() => {
              if (document.visibilityState === 'visible' && writerRef.current) {
                writerRef.current.write(fullName);
              }
            }, 15000); // Re-trigger every 15 seconds
            
            return true;
          } else {
            console.log('GlitchedWriter not available, using fallback');
            return false;
          }
        } catch (error) {
          console.error("Error initializing GlitchedWriter:", error);
          return false;
        }
      };
      
      // Try to initialize now
      const initialized = initGlitchedWriter();
      
      // If not initialized, try again after a delay (in case the module is still loading)
      if (!initialized) {
        setTimeout(() => {
          initGlitchedWriter();
        }, 2000);
      }
      
      return () => {
        if (glitchInterval) clearInterval(glitchInterval);
        clearInterval(pulseInterval);
      };
    };
    
    // Start the animation
    animateName();
  }, []);

  const navigationItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const skills = {
    technical: [
      { name: 'C++', icon: '💻', category: 'Programming' },
      { name: 'Python', icon: '🐍', category: 'Programming' },
      { name: 'HTML/CSS', icon: '🌐', category: 'Web Development' },
      { name: 'React.js', icon: '⚛️', category: 'Web Development' },
      { name: 'VS Code', icon: '🔧', category: 'Development Tools' }
    ],
    nonTechnical: [
      { name: 'Motorcycle Mechanics', icon: '🏍️', category: 'Technical' },
      { name: 'Microsoft Office', icon: '📊', category: 'Productivity' },
      { name: 'Research Skills', icon: '🔍', category: 'Academic' },
      { name: 'Video Editing (CapCut)', icon: '🎬', category: 'Media' },
      { name: 'IP & Patent Search', icon: '📋', category: 'Legal' }
    ]
  };

  const experiences = [
    {
      title: 'Boy Scouts of the Philippines (Senior Scout)',
      period: 'August 01, 2014 - March 31, 2015',
      type: 'Volunteer',
      description: 'Developed leadership skills and community service experience through scouting activities.'
    },
    {
      title: 'Computer Engineering Student Society (TIP Manila)',
      period: 'January 22, 2024 - May 17, 2024',
      type: 'Student Organization',
      description: 'Active member contributing to engineering community and professional development.'
    },
    {
      title: 'Brigada Eskuwela (Ramon Avancena Highschool)',
      period: 'June 09, 2025 - June 10, 2025',
      type: 'Community Service',
      description: 'Participated in school maintenance and preparation activities for the academic year.'
    }
  ];

  const seminars = [
    { title: 'Sexuality and Handling Human Relationships', date: 'August 06, 2019', venue: 'TIP Manila' },
    { title: 'Goodbye Feelings', date: 'August 07, 2019', venue: 'TIP Manila' },
    { title: 'Personal Branding', date: 'August 08, 2019', venue: 'TIP Manila' },
    { title: 'Transforming Future: Computer Vision and Generative AI Day 1', date: 'June 19, 2025', venue: 'TIP Manila' },
    { title: 'Transforming Future: Computer Vision and Generative AI Day 2', date: 'June 25, 2025', venue: 'TIP Manila' }
  ];

  const certificates = [
    { name: 'CCNAv7: Introduction to Networks', date: 'Jan 31, 2024', issuer: 'Cisco Networking Academy' },
    { name: 'CCNAv7: Switching, Routing, and Wireless Essentials', date: 'Jan 16, 2024', issuer: 'Cisco Networking Academy' },
    { name: 'Cybersecurity Essentials', date: 'May 08, 2024', issuer: 'Cisco Networking Academy' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  const triggerNameGlitch = () => {
    // Fallback animation that always works
    const fallbackAnimation = () => {
      if (nameRef.current) {
        // Create a more dramatic pulse effect
        nameRef.current.style.transition = 'all 0.3s ease-in-out';
        nameRef.current.style.textShadow = '0 0 12px rgba(96, 165, 250, 0.9), 0 0 18px rgba(168, 85, 247, 0.7)';
        nameRef.current.style.transform = 'scale(1.05)';
        
        // Add a simple text scramble effect as fallback
        const originalText = nameRef.current.textContent || 'Jasper Lemuel Cervantes';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let iterations = 0;
        const maxIterations = 6;
        
        const interval = setInterval(() => {
          if (iterations >= maxIterations) {
            clearInterval(interval);
            if (nameRef.current) {
              nameRef.current.textContent = originalText;
              
              setTimeout(() => {
                if (nameRef.current) {
                  nameRef.current.style.textShadow = '0 0 0px transparent';
                  nameRef.current.style.transform = 'scale(1)';
                }
              }, 500);
            }
            return;
          }
          
          // Create a scrambled version of the text
          if (nameRef.current) {
            nameRef.current.textContent = originalText
              .split('')
              .map((char, idx) => {
                // Keep spaces as they are
                if (char === ' ') return ' ';
                // Randomly decide whether to scramble this character
                return Math.random() < 0.2 ? chars[Math.floor(Math.random() * chars.length)] : char;
              })
              .join('');
          }
          
          iterations += 1;
        }, 100);
      }
    };
    
    try {
      // Try to use GlitchedWriter if available
      if (safeGlitchedWriter.isAvailable && writerRef.current && nameRef.current && typeof writerRef.current.write === 'function') {
        console.log('Using GlitchedWriter for name glitch effect');
        
        // Try to update options if possible
        try {
          if (writerRef.current.options) {
            // Create a more dramatic effect when clicked
            const options = {
              iterations: 3,
              fps: 30,
              glitchChance: 0.5,
              randomChance: 0.2,
              ghostChance: 0.2,
              trailingChance: 0.2,
            };
            
            // Apply the options temporarily for a more dramatic effect
            Object.keys(options).forEach(key => {
              writerRef.current.options[key] = options[key];
            });
          }
        } catch (optionsError) {
          console.error("Error updating GlitchedWriter options:", optionsError);
        }
        
        // Write with the dramatic effect
        writerRef.current.write('Jasper Lemuel Cervantes');
        
        // Also apply part of the fallback animation for extra effect
        if (nameRef.current) {
          nameRef.current.style.transition = 'all 0.3s ease-in-out';
          nameRef.current.style.transform = 'scale(1.05)';
          
          setTimeout(() => {
            if (nameRef.current) {
              nameRef.current.style.transform = 'scale(1)';
            }
          }, 1500);
        }
      } else {
        console.log('GlitchedWriter not available for name glitch, using fallback');
        // If GlitchedWriter is not available, use fallback
        fallbackAnimation();
      }
    } catch (error) {
      console.error("Error in triggerNameGlitch:", error);
      // Use fallback animation if anything goes wrong
      fallbackAnimation();
    }
  };

  return (
    <div className="min-h-screen text-white" style={{ 
      backgroundColor: '#0f172a',
      backgroundImage: 'linear-gradient(to bottom, rgba(15, 23, 42, 1), rgba(15, 23, 42, 0.95))',
      color: 'white'
    }}>
      {/* Navigation */}
      <nav 
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{ 
          backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(8px)' : 'none',
          boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div 
              className="text-2xl font-bold" 
              style={{
                background: 'linear-gradient(to right, #60a5fa, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              JLC
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    backgroundColor: activeSection === item.id ? '#2563eb' : 'transparent',
                    color: activeSection === item.id ? 'white' : '#d1d5db',
                  }}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:text-white hover:bg-slate-800"
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-white"
                style={{ backgroundColor: '#1e293b' }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div 
              className="md:hidden rounded-lg mt-2 p-4 space-y-2"
              style={{ backgroundColor: '#1e293b' }}
            >
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-3 w-full px-3 py-2 rounded-lg text-left transition-colors text-gray-300"
                  style={{ 
                    backgroundColor: activeSection === item.id ? 'rgba(37, 99, 235, 0.5)' : 'transparent',
                    hover: { backgroundColor: '#334155' }
                  }}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background layers - using inline styles for reliability */}
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(to bottom right, rgba(30, 58, 138, 0.2), rgba(91, 33, 182, 0.2))',
          backgroundColor: '#0f172a'
        }}></div>
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.15), transparent 70%),
            radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.15), transparent 70%)
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        {/* Additional background layer for better visibility */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at center, transparent, rgba(15, 23, 42, 0.3) 100%)'
        }}></div>
        
        <div className="text-center z-10 max-w-4xl mx-auto px-4 relative">
          <div className="mb-8">
            <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl font-bold shadow-2xl">
              JC
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 cursor-pointer">
            <span 
              ref={nameRef} 
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300 relative"
              onClick={triggerNameGlitch}
              title="Click to see a glitch effect!"
              style={{ 
                minHeight: '1.2em',
                minWidth: '100%',
                display: 'inline-block',
                textShadow: '0 0 2px rgba(96, 165, 250, 0.3)'
              }}
            >Jasper Lemuel Cervantes</span>
            <div className="text-xs text-blue-300 animate-pulse mt-1">(Click my name for a surprise)</div>
          </h1>
          
          {/* Type Animation Component */}
          <div className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed h-16">
            {/* Wrap in error boundary */}
            <div style={{ minHeight: '1.5em' }}>
              {(() => {
                try {
                  return (
                    <TypeAnimation
                      sequence={[
                        'Computer Engineering Student', 2000,
                        'Clock Enthusiast', 2000,
                        'Problem Solver', 2000,
                        'Web Developer', 2000,
                        'Tech Enthusiast', 2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{ display: 'inline-block' }}
                      repeat={Infinity}
                    />
                  );
                } catch (error) {
                  console.error('TypeAnimation failed:', error);
                  return <span>Computer Engineering Student</span>;
                }
              })()}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-blue-500 rounded-full font-semibold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        {/* Background with inline style for reliability */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)' }}></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          
          <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              "Born. Breathed. Blinked. Next thing I know, I'm in school writing a bio for my portfolio I didn't ask for. 
              Life's basically a countdown timer, so here I am, trying to make my portfolio matter before the clock hits zero."
            </p>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Student</h3>
                <p className="text-gray-400">Computer Engineering at TIP</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Code size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Developer</h3>
                <p className="text-gray-400">C++, Python, Web Technologies</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Wrench size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                <p className="text-gray-400">Hardware & Software Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        {/* Background with inline style for reliability */}
        <div className="absolute inset-0" style={{ backgroundColor: '#0f172a' }}></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Education
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">College (Institute)</h3>
                  <p className="text-blue-400 font-medium mb-1">Technological Institute of the Philippines</p>
                  <p className="text-gray-400">Computer Engineering</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">High School (Private)</h3>
                  <p className="text-green-400 font-medium mb-1">St. John the Baptist Academy</p>
                  <p className="text-gray-400">Secondary Education</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">High School (Public)</h3>
                  <p className="text-yellow-400 font-medium mb-1">Lakan Dula High School</p>
                  <p className="text-gray-400">Secondary Education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        {/* Background with inline style for reliability */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)' }}></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">Technical Skills</h3>
              <div className="space-y-6">
                {skills.technical.map((skill, index) => (
                  <div key={index} className="bg-slate-700 rounded-lg p-4 transition-all duration-300 hover:bg-slate-600 hover:shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{skill.icon}</span>
                        <div>
                          <span className="font-medium block">{skill.name}</span>
                          <span className="text-xs text-blue-300">{skill.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Non-Technical Skills */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-8 text-center text-purple-400">Non-Technical Skills</h3>
              <div className="space-y-6">
                {skills.nonTechnical.map((skill, index) => (
                  <div key={index} className="bg-slate-700 rounded-lg p-4 transition-all duration-300 hover:bg-slate-600 hover:shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{skill.icon}</span>
                        <div>
                          <span className="font-medium block">{skill.name}</span>
                          <span className="text-xs text-purple-300">{skill.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        {/* Background with inline style for reliability */}
        <div className="absolute inset-0" style={{ backgroundColor: '#0f172a' }}></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Work Experience */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">Work & Volunteer Experience</h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-blue-500 pb-8 last:pb-0">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <div className="flex items-center text-sm text-gray-400 mt-1 mb-2">
                        <Calendar size={14} className="mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-900 text-blue-300 mb-3">
                        {exp.type}
                      </div>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Seminars & Workshops */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-8 text-center text-purple-400">Seminars & Workshops</h3>
              <div className="space-y-6">
                {seminars.map((seminar, index) => (
                  <div key={index} className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors">
                    <h4 className="text-lg font-semibold text-white">{seminar.title}</h4>
                    <div className="flex items-center text-sm text-gray-400 mt-2">
                      <Calendar size={14} className="mr-1" />
                      <span>{seminar.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400 mt-1">
                      <MapPin size={14} className="mr-1" />
                      <span>{seminar.venue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 relative">
        {/* Background with inline style for reliability */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)' }}></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Certificates
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                    <p className="text-blue-400 font-medium mb-1">{cert.issuer}</p>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar size={14} className="mr-1" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        {/* Background with inline style for reliability */}
        <div className="absolute inset-0" style={{ backgroundColor: '#0f172a' }}></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 hover:bg-slate-700/30 p-3 rounded-lg transition-colors duration-300">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg" style={{ boxShadow: '0 0 15px rgba(59, 130, 246, 0.2)' }}>
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-lg font-medium">mjlcervantes@tip.edu.ph</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 hover:bg-slate-700/30 p-3 rounded-lg transition-colors duration-300">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg" style={{ boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)' }}>
                    <Phone className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-lg font-medium">+63 969 420 0000</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 hover:bg-slate-700/30 p-3 rounded-lg transition-colors duration-300">
                  <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg" style={{ boxShadow: '0 0 15px rgba(236, 72, 153, 0.2)' }}>
                    <MapPin className="text-pink-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-lg font-medium">Manila, Philippines</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Resume</h4>
                <div className="flex justify-center">
                  <button 
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/20"
                    style={{ boxShadow: '0 4px 14px rgba(59, 130, 246, 0.3)' }}
                  >
                    <Download size={18} />
                    <span>Download CV</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-8 text-center text-purple-400">Send a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-slate-700/80 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white shadow-inner transition-all duration-300 hover:bg-slate-700"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-slate-700/80 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white shadow-inner transition-all duration-300 hover:bg-slate-700"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-3 bg-slate-700/80 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white resize-none shadow-inner transition-all duration-300 hover:bg-slate-700"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg transform hover:scale-[1.02] hover:shadow-xl"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 relative">
        {/* Background with inline style for reliability */}
        <div className="absolute inset-0" style={{ 
          backgroundColor: '#0f172a',
          borderTop: '1px solid #1e293b',
          backgroundImage: 'linear-gradient(to top, rgba(30, 58, 138, 0.05), transparent)'
        }}></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-4">
            <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-xl font-bold">JLC</span>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Jasper Lemuel Cervantes. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Export the component with both names for compatibility
const JLOCfolio = Portfolio;
export { JLOCfolio };
export default Portfolio;