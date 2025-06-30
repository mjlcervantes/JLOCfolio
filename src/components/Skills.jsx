import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = {
    technical: [
      { name: 'C++', level: 70, icon: '💻' },
      { name: 'Python', level: 75, icon: '🐍' },
      { name: 'HTML/CSS', level: 60, icon: '🌐' },
      { name: 'React.js', level: 60, icon: '⚛️' },
      { name: 'VS Code', level: 70, icon: '🔧' }
    ],
    nonTechnical: [
      { name: 'Motorcycle Mechanics', level: 90, icon: '🏍️' },
      { name: 'Microsoft Office', level: 85, icon: '📊' },
      { name: 'Research Skills', level: 80, icon: '🔍' },
      { name: 'Video Editing (CapCut)', level: 70, icon: '🎬' },
      { name: 'IP & Patent Search', level: 50, icon: '📋' }
    ]
  };

  return (
    <section id="skills" className="py-20 bg-slate-800/50" style={{ backgroundColor: "rgba(30, 41, 59, 0.5)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-blue-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Non-Technical Skills */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold mb-8 text-center text-purple-400">Other Skills</h3>
            <div className="space-y-6">
              {skills.nonTechnical.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-purple-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-600 h-3 rounded-full transition-all duration-1000 ease-out"
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
  );
};

export default Skills;