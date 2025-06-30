import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>
        </div>
        
        <div className="space-y-6">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">College (Institute)</h3>
                <p className="text-blue-400 font-medium mb-1">Technological Institute of the Philippines</p>
                <p className="text-gray-400">Computer Engineering</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">High School (Private)</h3>
                <p className="text-green-400 font-medium mb-1">St. John the Baptist Academy</p>
                <p className="text-gray-400">Secondary Education</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">High School (Public)</h3>
                <p className="text-yellow-400 font-medium mb-1">Lakan Dula High School</p>
                <p className="text-gray-400">Secondary Education</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;