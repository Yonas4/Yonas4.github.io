import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="bg-dark min-h-screen relative font-sans text-paper">
      
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto pb-20">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="w-full border-t border-dark-border py-8 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center text-muted text-sm gap-2 text-center md:text-left font-mono">
        <span>© {new Date().getFullYear()} Yunes Alkhaledi. All rights reserved.</span>
        <span>Senior Flutter Developer</span>
      </footer>

    </div>
  );
}

export default App;
