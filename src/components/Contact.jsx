import React from 'react';
import { Mail, Send } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from you!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Mail size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 text-center">Let's Connect</h3>
              <p className="text-gray-400">Feel free to reach out for any inquiries or opportunities</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4 p-4 bg-slate-700 rounded-lg">
                <Mail className="text-blue-400" size={24} />
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:mjlcervantes@tip.edu.ph" className="text-white font-semibold hover:text-blue-400 transition-colors">
                    mjlcervantes@tip.edu.ph
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <a
                  href="mailto:mjlcervantes@tip.edu.ph"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
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
  );
};

export default Contact;