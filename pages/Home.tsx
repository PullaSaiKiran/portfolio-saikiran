import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Database, Brain, Phone } from 'lucide-react';
import { RESUME_DATA } from '../constants';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden min-h-[calc(100vh-4rem)] flex items-center bg-dark">
      
      {/* Professional Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-dark bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute left-0 right-0 top-[-10%] m-auto h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[100px]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40 w-full">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <div className="inline-flex space-x-6">
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold leading-6 text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                Available for hire
              </span>
            </div>
          </div>
          
          {/* Name - Static as requested */}
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Hi, I'm <span className="text-emerald-400">{RESUME_DATA.name}</span>
          </h1>

          <motion.p 
            className="mt-6 text-lg leading-8 text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {RESUME_DATA.summary}
          </motion.p>
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-x-6 gap-y-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/projects"
              className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 hover:scale-105 transition-all flex items-center"
            >
              View Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <a 
              href={`tel:${RESUME_DATA.contact.phone}`}
              className="rounded-full bg-slate-800 border border-slate-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-slate-700 hover:border-emerald-400 transition-all flex items-center group"
            >
              <Phone className="mr-2 w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" /> Call Me
            </a>
             <Link
              to="/resume"
              className="text-sm font-semibold leading-6 text-slate-300 hover:text-white flex items-center"
            >
              View Resume <span aria-hidden="true" className="ml-1">→</span>
            </Link>
          </motion.div>
          
          {/* Stats/Highlights */}
          <motion.div 
            className="mt-14 grid grid-cols-3 gap-8 border-t border-slate-700 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
             <div className="flex flex-col items-center sm:items-start p-2 rounded-lg transition-colors">
               <Terminal className="w-8 h-8 text-blue-400 mb-2" />
               <p className="text-slate-100 font-semibold">Python & Angular</p>
               <p className="text-xs text-slate-400">Full Stack</p>
             </div>
             <div className="flex flex-col items-center sm:items-start p-2 rounded-lg transition-colors">
               <Brain className="w-8 h-8 text-purple-400 mb-2" />
               <p className="text-slate-100 font-semibold">AI/ML</p>
               <p className="text-xs text-slate-400">Deep Learning</p>
             </div>
             <div className="flex flex-col items-center sm:items-start p-2 rounded-lg transition-colors">
               <Database className="w-8 h-8 text-emerald-400 mb-2" />
               <p className="text-slate-100 font-semibold">Cloud Native</p>
               <p className="text-xs text-slate-400">AWS & Docker</p>
             </div>
          </motion.div>

        </div>
        
        {/* Right side visual */}
        <motion.div 
          className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop"
                alt="Coding workspace"
                className="relative w-[24rem] rounded-md shadow-2xl ring-1 ring-slate-900/10 sm:w-[32rem] opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;