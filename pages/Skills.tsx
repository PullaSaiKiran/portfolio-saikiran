import React from 'react';
import { RESUME_DATA } from '../constants';
import { Code, Server, Cloud, Database, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillCard: React.FC<{ title: string; skills: string[]; icon: React.ReactNode; index: number }> = ({ title, skills, icon, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.4 }}
    whileHover={{ y: -5 }}
    className="bg-card rounded-2xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all shadow-lg group"
  >
    <div className="flex items-center mb-6">
      <div className="p-3 bg-slate-800 rounded-xl text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white ml-4 group-hover:text-emerald-400 transition-colors">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span
          key={skill}
          className="px-3 py-1.5 bg-slate-800/50 text-slate-300 rounded-lg text-sm font-medium border border-slate-700 hover:border-emerald-500/50 hover:text-white hover:bg-emerald-500/10 transition-all cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">Technical Expertise</h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable, and intelligent applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCard 
          title="Programming Languages" 
          skills={RESUME_DATA.skills.languages} 
          icon={<Code size={24} />} 
          index={0}
        />
        <SkillCard 
          title="Web Technologies" 
          skills={RESUME_DATA.skills.web} 
          icon={<Server size={24} />} 
          index={1}
        />
        <SkillCard 
          title="Cloud & DevOps" 
          skills={RESUME_DATA.skills.cloud} 
          icon={<Cloud size={24} />} 
          index={2}
        />
        <SkillCard 
          title="Databases" 
          skills={RESUME_DATA.skills.databases} 
          icon={<Database size={24} />} 
          index={3}
        />
        <SkillCard 
          title="Tools & Environment" 
          skills={RESUME_DATA.skills.tools} 
          icon={<PenTool size={24} />} 
          index={4}
        />
      </div>

      <motion.div 
        className="mt-16 bg-gradient-to-br from-card to-slate-900 rounded-3xl p-8 border border-slate-700 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-500 rounded-full blur-3xl opacity-10"></div>
        
        <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Certifications & Achievements</h3>
        <div className="grid gap-4 relative z-10">
          {RESUME_DATA.certifications.map((cert, idx) => (
            <div 
              key={idx} 
              className="flex items-start p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/80 transition-colors"
            >
              <span className="flex-shrink-0 h-2 w-2 mt-2.5 rounded-full bg-emerald-400 mr-4 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
              <span className="text-slate-200 text-lg">{cert}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;