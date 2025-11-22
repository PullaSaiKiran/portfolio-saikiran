import React from 'react';
import { RESUME_DATA } from '../constants';
import { MapPin, Mail, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen flex flex-col justify-center">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <span className="h-px w-8 bg-emerald-500"></span>
            <span className="text-emerald-400 font-semibold uppercase tracking-wider text-sm">Who I Am</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl mb-6">
            About Me
          </h2>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            I am a {RESUME_DATA.title} based in {RESUME_DATA.contact.location}. 
            Currently pursuing my Bachelor of Technology in Artificial Intelligence and Machine Learning at Anurag University.
          </p>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            My passion lies in bridging the gap between complex machine learning algorithms and user-friendly web applications. 
            With a solid foundation in both frontend technologies like AngularJS and backend services with Flask/Python, 
            I strive to build scalable, data-driven solutions.
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-l-2 border-emerald-500 pl-4 bg-slate-800/20 p-3 rounded-r-lg hover:bg-slate-800/40 transition-colors">
              <dt className="font-medium text-emerald-400 flex items-center"><MapPin className="w-4 h-4 mr-2" /> Location</dt>
              <dd className="mt-2 text-sm text-slate-200">
                 {RESUME_DATA.contact.location}
              </dd>
            </div>
            <div className="border-l-2 border-blue-500 pl-4 bg-slate-800/20 p-3 rounded-r-lg hover:bg-slate-800/40 transition-colors">
              <dt className="font-medium text-blue-400 flex items-center"><Mail className="w-4 h-4 mr-2" /> Email</dt>
              <dd className="mt-2 text-sm text-slate-200">
                <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:text-white transition-colors">
                  {RESUME_DATA.contact.email}
                </a>
              </dd>
            </div>
            <div className="border-l-2 border-purple-500 pl-4 bg-slate-800/20 p-3 rounded-r-lg hover:bg-slate-800/40 transition-colors">
              <dt className="font-medium text-purple-400 flex items-center"><BookOpen className="w-4 h-4 mr-2" /> Education</dt>
              <dd className="mt-2 text-sm text-slate-200">
                B.Tech AI/ML @ Anurag University
              </dd>
            </div>
             <div className="border-l-2 border-yellow-500 pl-4 bg-slate-800/20 p-3 rounded-r-lg hover:bg-slate-800/40 transition-colors">
              <dt className="font-medium text-yellow-400 flex items-center"><Award className="w-4 h-4 mr-2" /> Languages</dt>
              <dd className="mt-2 text-sm text-slate-200">
                {RESUME_DATA.skills.spoken.join(', ')}
              </dd>
            </div>
          </dl>
        </motion.div>

        {/* Image/Visual Content */}
        <motion.div 
          className="mt-12 lg:mt-0 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-card p-2 group">
             <img 
               src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop" 
               alt="Development Workspace" 
               className="rounded-xl w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute bottom-4 right-4 bg-dark/90 backdrop-blur px-6 py-3 rounded-xl border border-slate-600 flex items-center shadow-lg">
                <Award className="w-5 h-5 text-yellow-500 mr-3" />
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider">Cumulative GPA</p>
                  <p className="text-emerald-400 font-bold text-lg">8.02 / 10</p>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;