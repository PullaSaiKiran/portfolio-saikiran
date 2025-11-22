import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Resume from './pages/Resume';
import GeminiChat from './components/GeminiChat';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
      <GeminiChat />
    </HashRouter>
  );
};

export default App;