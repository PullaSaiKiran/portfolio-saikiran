import React from 'react';
import { RESUME_DATA } from '../constants';
import { GraduationCap, Calendar, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[80vh] flex flex-col justify-center">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Academic Background</h2>
        <p className="mt-4 text-lg text-slate-400">My educational journey and milestones.</p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {RESUME_DATA.education.map((edu, idx) => (
          <motion.div 
            key={idx} 
            className="relative pl-8 pb-16 last:pb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
          >
             {/* Timeline Line */}
            {idx !== RESUME_DATA.education.length - 1 && (
               <div className="absolute left-[19px] top-8 bottom-0 w-0.5 bg-slate-800"></div>
            )}

             {/* Icon */}
            <div className="absolute left-0 top-0 bg-card p-2.5 rounded-full border-2 border-slate-700 z-10 shadow-xl">
               <GraduationCap className="w-5 h-5 text-emerald-400" />
            </div>

            <div 
              className="ml-6 bg-card rounded-2xl p-8 border border-slate-700 hover:border-emerald-500/30 transition-all shadow-lg hover:shadow-emerald-900/10"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.institution}</h3>
                  <p className="text-emerald-400 font-medium text-lg">{edu.degree}</p>
                </div>
                <div className="mt-4 lg:mt-0 flex flex-col lg:items-end gap-2">
                  <div className="flex items-center text-slate-400 bg-slate-800 px-3 py-1 rounded-full text-sm">
                     <Calendar className="w-3 h-3 mr-2" /> {edu.year}
                  </div>
                  <div className="flex items-center text-emerald-400 font-bold text-lg">
                     <Star className="w-4 h-4 mr-2 fill-current" /> {edu.score}
                  </div>
                </div>
              </div>
              
              {edu.relevantCoursework && (
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <p className="text-sm text-slate-400 font-semibold mb-3 uppercase tracking-wider">Relevant Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCoursework.split(', ').map((course, cIdx) => (
                      <span key={cIdx} className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded text-sm border border-slate-700/50 hover:border-slate-600 transition-colors cursor-default">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;