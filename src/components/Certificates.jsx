import React from 'react';
import { Award, Calendar, Download } from 'lucide-react';
import '../styles/Certificates.css';

const Certificates = () => {
  const certificates = [
    { name: 'CCNAv7: Introduction to Networks', date: 'Jan 31, 2024', issuer: 'Cisco Networking Academy' },
    { name: 'CCNAv7: Switching, Routing, and Wireless Essentials', date: 'Jan 16, 2024', issuer: 'Cisco Networking Academy' },
    { name: 'Cybersecurity Essentials', date: 'May 08, 2024', issuer: 'Cisco Networking Academy' }
  ];

  return (
    <section id="certificates" className="py-20 bg-slate-800/50" style={{ backgroundColor: "rgba(30, 41, 59, 0.5)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
                  <p className="text-yellow-400 font-medium mb-1">{cert.issuer}</p>
                  <div className="flex items-center justify-center space-x-1 text-gray-400 text-sm">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Additional certificates available upon request</p>
          <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300">
            <Download size={20} />
            <span>View All Certificates</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;