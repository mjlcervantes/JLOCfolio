import React from 'react';
import { GraduationCap, Code, Wrench } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50" style={{ backgroundColor: "rgba(30, 41, 59, 0.5)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
  );
};

export default About;