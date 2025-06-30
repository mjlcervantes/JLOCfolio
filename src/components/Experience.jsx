import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import '../styles/Experience.css';

const Experience = () => {
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

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience & Activities
          </h2>
        </div>
        
        <div className="space-y-8">
          {/* Experiences */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-400 text-center">Extra Co-curricular Works</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h4 className="text-xl font-semibold text-white text-center md:text-left">{exp.title}</h4>
                    <div className="flex items-center justify-center md:justify-start space-x-2 text-blue-400">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <div className="mb-3 text-center md:text-left">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-gray-300 text-center md:text-left">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Seminars */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-purple-400 text-center">Seminars & Trainings</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {seminars.map((seminar, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-colors">
                  <h4 className="text-lg font-semibold text-white mb-3 text-center">{seminar.title}</h4>
                  <div className="flex items-center justify-center space-x-4 text-gray-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{seminar.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
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
  );
};

export default Experience;