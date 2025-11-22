import React from 'react';
import { RESUME_DATA } from '../constants';
import { Download, Mail, Phone, MapPin, Github, Linkedin, Printer } from 'lucide-react';

const Resume: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Controls */}
      <div className="mb-8 flex justify-end space-x-4 print:hidden">
        <button 
          onClick={handlePrint}
          className="flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
        >
          <Printer className="w-4 h-4 mr-2" /> Print / Save as PDF
        </button>
      </div>

      {/* Resume Document - A4-ish ratio */}
      <div className="bg-white text-slate-900 w-full max-w-[210mm] mx-auto p-8 sm:p-12 shadow-2xl print:shadow-none print:w-full print:max-w-none">
        
        {/* Header */}
        <header className="border-b-2 border-slate-800 pb-6 mb-6">
          <h1 className="text-4xl font-bold uppercase tracking-wider text-slate-900 mb-2">{RESUME_DATA.name}</h1>
          
          <div className="flex flex-wrap text-sm gap-y-2 gap-x-6 text-slate-700 mt-2">
            <div className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {RESUME_DATA.contact.location}</div>
            <div className="flex items-center"><Phone className="w-3 h-3 mr-1" /> {RESUME_DATA.contact.phone}</div>
            <div className="flex items-center"><Mail className="w-3 h-3 mr-1" /> {RESUME_DATA.contact.email}</div>
            <div className="flex items-center"><Github className="w-3 h-3 mr-1" /> {RESUME_DATA.contact.github}</div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-3 text-slate-800">Professional Summary</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            {RESUME_DATA.summary}
          </p>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-3 text-slate-800">Education</h2>
          <div className="space-y-4">
            {RESUME_DATA.education.map((edu, i) => (
              <div key={i} className="flex justify-between">
                <div>
                  <h3 className="font-bold text-slate-900">{edu.institution}</h3>
                  <p className="text-sm text-slate-700">{edu.degree}</p>
                  {edu.relevantCoursework && <p className="text-xs text-slate-500 italic mt-1 max-w-lg">{edu.relevantCoursework}</p>}
                </div>
                <div className="text-right text-sm">
                  <span className="block font-semibold">{edu.year}</span>
                  <span className="block text-slate-600">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-3 text-slate-800">Work Experience</h2>
          {RESUME_DATA.experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between mb-1">
                <h3 className="font-bold text-slate-900">{exp.role} – {exp.company}</h3>
                <span className="text-sm font-semibold">{exp.duration}</span>
              </div>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                {exp.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-3 text-slate-800">Projects</h2>
          <div className="space-y-4">
             {RESUME_DATA.projects.map((proj, i) => (
               <div key={i}>
                 <div className="flex items-baseline mb-1">
                    <h3 className="font-bold text-slate-900 text-sm">{proj.title}</h3>
                 </div>
                 <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    {proj.description.map((desc, d) => <li key={d}>{desc}</li>)}
                 </ul>
                 <p className="text-xs text-slate-500 mt-1">Tech: {proj.tech.join(', ')}</p>
               </div>
             ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-3 text-slate-800">Skills</h2>
          <div className="grid grid-cols-2 gap-y-2 text-sm text-slate-700">
            <div className="flex"><span className="font-semibold w-32">Languages:</span> <span>{RESUME_DATA.skills.languages.join(', ')}</span></div>
            <div className="flex"><span className="font-semibold w-32">Web Tech:</span> <span>{RESUME_DATA.skills.web.join(', ')}</span></div>
            <div className="flex"><span className="font-semibold w-32">Cloud/DevOps:</span> <span>{RESUME_DATA.skills.cloud.join(', ')}</span></div>
            <div className="flex"><span className="font-semibold w-32">Databases:</span> <span>{RESUME_DATA.skills.databases.join(', ')}</span></div>
          </div>
        </section>
        
        {/* Certs */}
        <section>
            <h2 className="text-lg font-bold uppercase border-b border-slate-300 mb-3 text-slate-800">Certifications</h2>
            <ul className="list-disc list-inside text-sm text-slate-700">
                {RESUME_DATA.certifications.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
        </section>

      </div>
    </div>
  );
};

export default Resume;