import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Download, Calendar, Award, BookOpen, Code, Wrench, User, Briefcase, GraduationCap, Send, Menu, X } from 'lucide-react';
import '../styles/JLOCfolio.css';

const JLOCfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      { name: 'C++', level: 25, icon: '💻' },
      { name: 'Python', level: 25, icon: '🐍' },
      { name: 'HTML/CSS', level: 15, icon: '🌐' },
      { name: 'React.js', level: 15, icon: '⚛️' },
      { name: 'VS Code', level: 15, icon: '🔧' }
    ],
    nonTechnical: [
      { name: 'Motorcycle Mechanics', level: 50, icon: '🏍️' },
      { name: 'Microsoft Office', level: 70, icon: '📊' },
      { name: 'Research Skills', level: 80, icon: '🔍' },
      { name: 'Video Editing (CapCut)', level: 50, icon: '🎬' },
      { name: 'IP & Patent Search', level: 30, icon: '📋' }
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

  return (
    <div className="jloc-portfolio">
      {/* Navigation */}
      <nav className={`jloc-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="jloc-nav-container">
          <div className="jloc-nav-content">
            <div className="jloc-logo">
              JLOC
            </div>
            
            {/* Desktop Navigation */}
            <div className="jloc-desktop-nav">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`jloc-nav-item ${activeSection === item.id ? 'active' : ''}`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="jloc-mobile-menu-btn">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="jloc-mobile-nav">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="jloc-mobile-nav-item"
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
      <section className="jloc-hero">
        <div className="jloc-hero-bg-1"></div>
        <div className="jloc-hero-bg-2"></div>
        
        <div className="jloc-hero-content">
          <div className="jloc-avatar">
            JC
          </div>
          
          <h1 className="jloc-hero-title">
            Jasper Lemuel Cervantes
          </h1>
          
          <p className="jloc-hero-subtitle">
            Computer Engineering Student | Clock Enthusiast | Problem Solver
          </p>
          
          <div className="jloc-hero-buttons">
            <button
              onClick={() => scrollToSection('about')}
              className="jloc-primary-btn"
            >
              Explore My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="jloc-secondary-btn"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="jloc-section alt">
        <div className="jloc-section-container">
          <div className="jloc-section-header">
            <h2 className="jloc-section-title">
              About Me
            </h2>
          </div>
          
          <div className="jloc-about-card">
            <p className="jloc-about-text">
              "Born. Breathed. Blinked. Next thing I know, I'm in school writing a bio for my portfolio I didn't ask for. 
              Life's basically a countdown timer, so here I am, trying to make my portfolio matter before the clock hits zero."
            </p>
            
            <div className="jloc-about-features">
              <div className="jloc-feature">
                <div className="jloc-feature-icon blue">
                  <GraduationCap size={32} />
                </div>
                <h3 className="jloc-feature-title">Student</h3>
                <p className="jloc-feature-text">Computer Engineering at TIP</p>
              </div>
              
              <div className="jloc-feature">
                <div className="jloc-feature-icon purple">
                  <Code size={32} />
                </div>
                <h3 className="jloc-feature-title">Developer</h3>
                <p className="jloc-feature-text">C++, Python, Web Technologies</p>
              </div>
              
              <div className="jloc-feature">
                <div className="jloc-feature-icon pink">
                  <Wrench size={32} />
                </div>
                <h3 className="jloc-feature-title">Problem Solver</h3>
                <p className="jloc-feature-text">Hardware & Software Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="jloc-section">
        <div className="jloc-section-container">
          <div className="jloc-section-header">
            <h2 className="jloc-section-title">
              Education
            </h2>
          </div>
          
          <div className="jloc-education-list">
            <div className="jloc-education-card">
              <div className="jloc-education-content">
                <div className="jloc-education-icon blue">
                  <GraduationCap size={24} />
                </div>
                <div className="jloc-education-details">
                  <h3 className="jloc-education-type">College (Institute)</h3>
                  <p className="jloc-education-school blue">Technological Institute of the Philippines</p>
                  <p className="jloc-education-degree">Computer Engineering</p>
                </div>
              </div>
            </div>
            
            <div className="jloc-education-card">
              <div className="jloc-education-content">
                <div className="jloc-education-icon green">
                  <BookOpen size={24} />
                </div>
                <div className="jloc-education-details">
                  <h3 className="jloc-education-type">High School (Private)</h3>
                  <p className="jloc-education-school green">St. John the Baptist Academy</p>
                  <p className="jloc-education-degree">Secondary Education</p>
                </div>
              </div>
            </div>
            
            <div className="jloc-education-card">
              <div className="jloc-education-content">
                <div className="jloc-education-icon yellow">
                  <BookOpen size={24} />
                </div>
                <div className="jloc-education-details">
                  <h3 className="jloc-education-type">High School (Public)</h3>
                  <p className="jloc-education-school yellow">Lakan Dula High School</p>
                  <p className="jloc-education-degree">Secondary Education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="jloc-section alt">
        <div className="jloc-section-container">
          <div className="jloc-section-header">
            <h2 className="jloc-section-title">
              Skills & Expertise
            </h2>
          </div>
          
          <div className="jloc-skills-grid">
            {/* Technical Skills */}
            <div className="jloc-skills-card">
              <h3 className="jloc-skills-title blue">Technical Skills</h3>
              <div className="jloc-skills-list">
                {skills.technical.map((skill, index) => (
                  <div key={index} className="jloc-skill-item">
                    <div className="jloc-skill-header">
                      <div className="jloc-skill-name">
                        <span className="jloc-skill-icon">{skill.icon}</span>
                        <span className="jloc-skill-text">{skill.name}</span>
                      </div>
                      <span className="jloc-skill-percent blue">{skill.level}%</span>
                    </div>
                    <div className="jloc-skill-bar-bg">
                      <div 
                        className="jloc-skill-bar blue"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Non-Technical Skills */}
            <div className="jloc-skills-card">
              <h3 className="jloc-skills-title purple">Other Skills</h3>
              <div className="jloc-skills-list">
                {skills.nonTechnical.map((skill, index) => (
                  <div key={index} className="jloc-skill-item">
                    <div className="jloc-skill-header">
                      <div className="jloc-skill-name">
                        <span className="jloc-skill-icon">{skill.icon}</span>
                        <span className="jloc-skill-text">{skill.name}</span>
                      </div>
                      <span className="jloc-skill-percent purple">{skill.level}%</span>
                    </div>
                    <div className="jloc-skill-bar-bg">
                      <div 
                        className="jloc-skill-bar purple"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="jloc-section">
        <div className="jloc-section-container">
          <div className="jloc-section-header">
            <h2 className="jloc-section-title">
              Experience & Activities
            </h2>
          </div>
          
          <div className="jloc-experience-container">
            {/* Experiences */}
            <div className="jloc-experience-section">
              <h3 className="jloc-experience-title blue">Extra Co-curricular Works</h3>
              <div className="jloc-experience-list">
                {experiences.map((exp, index) => (
                  <div key={index} className="jloc-experience-card">
                    <div className="jloc-experience-header">
                      <h4 className="jloc-experience-role">{exp.title}</h4>
                      <div className="jloc-experience-date">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <div className="jloc-experience-badge">
                      {exp.type}
                    </div>
                    <p className="jloc-experience-description">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Seminars */}
            <div className="jloc-experience-section">
              <h3 className="jloc-experience-title purple">Seminars & Trainings</h3>
              <div className="jloc-seminars-grid">
                {seminars.map((seminar, index) => (
                  <div key={index} className="jloc-seminar-card">
                    <h4 className="jloc-seminar-title">{seminar.title}</h4>
                    <div className="jloc-seminar-details">
                      <div className="jloc-seminar-date">
                        <Calendar size={14} />
                        <span>{seminar.date}</span>
                      </div>
                      <div className="jloc-seminar-venue">
                        <MapPin size={14} />
                        <span>{seminar.venue}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="jloc-section alt">
        <div className="jloc-section-container">
          <div className="jloc-section-header">
            <h2 className="jloc-section-title">
              Certificates & Achievements
            </h2>
          </div>
          
          <div className="jloc-certificates-grid">
            {certificates.map((cert, index) => (
              <div key={index} className="jloc-certificate-card">
                <div className="jloc-certificate-content">
                  <div className="jloc-certificate-icon">
                    <Award size={24} />
                  </div>
                  <div className="jloc-certificate-details">
                    <h4 className="jloc-certificate-name">{cert.name}</h4>
                    <p className="jloc-certificate-issuer">{cert.issuer}</p>
                    <div className="jloc-certificate-date">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="jloc-certificates-footer">
            <p className="jloc-certificates-note">Additional certificates available upon request</p>
            <button className="jloc-certificates-btn">
              <Download size={20} />
              <span>View All Certificates</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="jloc-section">
        <div className="jloc-section-container">
          <div className="jloc-contact-header">
            <h2 className="jloc-section-title">
              Get In Touch
            </h2>
            <p className="jloc-contact-subtitle">
              Ready to collaborate or discuss opportunities? I'd love to hear from you!
            </p>
          </div>
          
          <div className="jloc-contact-container">
            <div className="jloc-contact-card">
              <div className="jloc-contact-intro">
                <div className="jloc-contact-icon">
                  <Mail size={32} />
                </div>
                <h3 className="jloc-contact-title">Let's Connect</h3>
                <p className="jloc-contact-text">Feel free to reach out for any inquiries or opportunities</p>
              </div>
              
              <div className="jloc-contact-methods">
                <div className="jloc-contact-method">
                  <Mail className="jloc-contact-method-icon" size={24} />
                  <div className="jloc-contact-method-details">
                    <p className="jloc-contact-method-label">Email</p>
                    <a href="mailto:mjlcervantes@tip.edu.ph" className="jloc-contact-method-value">
                      mjlcervantes@tip.edu.ph
                    </a>
                  </div>
                </div>
                
                <div className="jloc-contact-action">
                  <a
                    href="mailto:mjlcervantes@tip.edu.ph"
                    className="jloc-contact-btn"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="jloc-footer">
        <div className="jloc-footer-container">
          <div className="jloc-footer-content">
            <div className="jloc-footer-logo">
              Jasper Lemuel Cervantes
            </div>
            <p className="jloc-footer-tagline">
              Computer Engineering Student | Clock Enthusiast | Problem Solver
            </p>
            <div className="jloc-footer-social">
              <a href="mailto:mjlcervantes@tip.edu.ph" className="jloc-footer-social-link">
                <Mail size={24} />
              </a>
            </div>
            <div className="jloc-footer-copyright">
              <p>&copy; 2025 Jasper Lemuel Cervantes. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JLOCfolio;