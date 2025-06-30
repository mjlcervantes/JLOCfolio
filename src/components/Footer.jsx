import React from 'react';
import { Mail } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800" style={{ backgroundColor: "#0f172a", borderTopColor: "#1e293b" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Jasper Lemuel Cervantes
          </div>
          <p className="text-gray-400 mb-6 text-center">
            Computer Engineering Student | Clock Enthusiast | Problem Solver
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:mjlcervantes@tip.edu.ph" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-gray-500 text-sm">
            <p>&copy; 2025 Jasper Lemuel Cervantes. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;