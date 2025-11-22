import React from 'react';
import { RESUME_DATA } from '../constants';
import { Folder, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-12">
           <div className="p-3 bg-emerald-500/10 rounded-xl mr-4">
            <Folder className="w-8 h-8 text-emerald-400" />
          </div>
          <h2 className="text-4xl font-bold text-white">Projects</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {RESUME_DATA.projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group bg-card rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col"
            >
              <div className="h-56 overflow-hidden bg-slate-800 relative">
                <img 
                  src={project.image || `https://picsum.photos/seed/${idx + 10}/800/400`} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-90"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                </div>
              </div>
              <div className="p-6 pt-2 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-semibold px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700 group-hover:border-emerald-500/30 group-hover:text-emerald-400 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 mb-6 flex-grow">
                  {project.description.map((desc, dIdx) => (
                    <li key={dIdx} className="text-sm text-slate-400 flex items-start leading-relaxed">
                       <span className="mr-2 text-emerald-500 mt-1.5">•</span> <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-slate-800 flex justify-end">
                  <a href={RESUME_DATA.contact.github} target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-white flex items-center transition-colors">
                    <Github className="w-4 h-4 mr-2" /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;