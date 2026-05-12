import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-dark min-h-screen relative font-sans text-gray-200">
      {/* Grid Pattern Background overlay */}
      <div className="fixed inset-0 bg-grid-pattern z-0 pointer-events-none mix-blend-overlay opacity-50"></div>
      
      {/* Radial gradient for top lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <Navbar />
        <main className="w-full max-w-6xl mx-auto px-6 sm:px-12 md:px-20 lg:px-24">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        
        <footer className="w-full py-8 text-center text-gray-500 text-sm border-t border-dark-border mt-20">
          <p>© {new Date().getFullYear()} Yunes Al-khaledi. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
