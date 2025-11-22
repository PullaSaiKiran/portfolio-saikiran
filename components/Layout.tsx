import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, FileText, Phone, Folder } from 'lucide-react';
import { RESUME_DATA } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects', icon: <Folder className="w-4 h-4 mr-1" /> },
    { path: '/education', label: 'Education' },
    { path: '/resume', label: 'Resume', icon: <FileText className="w-4 h-4 mr-1" /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-dark text-slate-200">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-dark/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
                PS.
              </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`relative flex items-center text-sm font-medium transition-colors duration-200 group ${
                    isActive(link.path)
                      ? 'text-emerald-400'
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {link.icon && !link.label.includes('Resume') ? link.icon : null}
                  {link.label === 'Resume' && link.icon}
                  {link.label}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute left-0 right-0 bottom-[-22px] h-0.5 bg-emerald-400"
                    />
                  )}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-slate-400 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-card border-b border-slate-700 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive(link.path)
                        ? 'bg-slate-800 text-emerald-400'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center">
                      {link.icon}
                      <span className={link.icon ? "ml-2" : ""}>{link.label}</span>
                    </div>
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6">
             <a href={`tel:${RESUME_DATA.contact.phone}`} className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center text-sm font-semibold group" title="Call Me">
              <div className="p-2 bg-slate-800 rounded-full mr-2 group-hover:bg-emerald-500/10">
                <Phone size={16} />
              </div>
              {RESUME_DATA.contact.phone}
            </a>
            <div className="h-6 w-px bg-slate-700 hidden md:block"></div>
            <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-slate-400 hover:text-emerald-400 transition-colors hover:scale-110 transform duration-200">
              <Mail size={20} />
            </a>
            <a href={RESUME_DATA.contact.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors hover:scale-110 transform duration-200">
              <Github size={20} />
            </a>
            <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors hover:scale-110 transform duration-200">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;