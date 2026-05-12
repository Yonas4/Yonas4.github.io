import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.4 });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));

    return () => {
      sections.forEach((s) => observer.unobserve(s));
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-[300] transition-all duration-300 ${isScrolled ? 'bg-dark/82 backdrop-blur-md border-b border-dark-border' : 'bg-transparent'} h-[58px]`}>
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 xl:px-10 h-full flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] gap-4">
          
          <a href="#hero" className="flex flex-col gap-[2px] justify-self-start">
            <span className="font-serif text-[1.05rem] leading-[1.1] tracking-tight text-white whitespace-nowrap">Yunes Alkhaledi</span>
            <span className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-gold whitespace-nowrap">Flutter Developer</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center gap-[0.2rem] xl:gap-[0.35rem] justify-self-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`text-[0.7rem] xl:text-[0.78rem] font-medium tracking-[0.04em] uppercase px-[0.6rem] xl:px-[0.85rem] py-[0.45rem] rounded-full border transition-colors duration-200 whitespace-nowrap ${
                    isActive 
                      ? 'text-paper border-dark-warmBorder bg-gold/10' 
                      : 'text-muted border-transparent hover:text-paper hover:bg-white/5 hover:border-dark-border'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 justify-self-end">
            <div className="hidden sm:flex items-center gap-1">
              <a href="https://github.com/Yonas4" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-[10px] border border-dark-border bg-white/5 text-muted hover:text-gold hover:border-dark-warmBorder hover:bg-gold/10 transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/yunes-al-khaledi/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-[10px] border border-dark-border bg-white/5 text-muted hover:text-gold hover:border-dark-warmBorder hover:bg-gold/10 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:yunes.alkhaledi@gmail.com" className="w-10 h-10 flex items-center justify-center rounded-[10px] border border-dark-border bg-white/5 text-muted hover:text-gold hover:border-dark-warmBorder hover:bg-gold/10 transition-colors">
                <Mail size={18} />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button className="lg:hidden w-[42px] h-[42px] flex flex-col items-center justify-center gap-[5px] rounded-[10px] border border-dark-border bg-white/5 text-paper" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className={`block h-[2px] w-[18px] bg-current rounded-[1px] transition-transform ${mobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
              <span className={`block h-[2px] w-[18px] bg-current rounded-[1px] transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-[2px] w-[18px] bg-current rounded-[1px] transition-transform ${mobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Nav Backdrop */}
      <div 
        className={`fixed inset-0 top-[58px] bg-black/55 z-[280] transition-all duration-250 lg:hidden ${mobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className="w-full bg-dark/95 backdrop-blur-md border-b border-dark-border shadow-2xl flex flex-col py-2"
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.name} 
                href={link.href} 
                className={`w-full text-center px-6 py-4 border-b border-dark-border last:border-b-0 text-sm tracking-wider uppercase font-medium transition-colors ${
                  isActive ? 'text-gold' : 'text-muted hover:text-paper hover:bg-white/5'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            );
          })}
          <div className="flex sm:hidden justify-center gap-4 py-6 border-t border-dark-border mt-2">
            <a href="https://github.com/Yonas4" target="_blank" rel="noreferrer" className="text-muted hover:text-gold"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/yunes-al-khaledi/" target="_blank" rel="noreferrer" className="text-muted hover:text-gold"><Linkedin size={24} /></a>
            <a href="mailto:yunes.alkhaledi@gmail.com" className="text-muted hover:text-gold"><Mail size={24} /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
