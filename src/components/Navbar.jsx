import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/80 backdrop-blur-md border-b border-dark-border py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl font-bold text-white tracking-wide">
          Yunes<span className="text-gold">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4 border-l border-dark-border pl-6">
            <a href="https://github.com/Yonas4" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/yunes-al-khaledi/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#contact" className="px-5 py-2 text-sm font-medium bg-white text-black hover:bg-gold hover:text-black rounded-full transition-all duration-300">
              Let's Talk
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark border-b border-dark-border py-4 px-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-4 pt-4 border-t border-dark-border">
            <a href="https://github.com/Yonas4" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/yunes-al-khaledi/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
