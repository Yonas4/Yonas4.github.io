import React, { useState, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('default');

  const themes = [
    { id: 'default', name: 'Classic Gold', color: '#c9a96e' },
    { id: 'theme-flutter', name: 'Flutter Blue', color: '#38bdf8' },
    { id: 'theme-emerald', name: 'Tech Emerald', color: '#10b981' },
    { id: 'theme-amethyst', name: 'Creative Amethyst', color: '#a855f7' },
    { id: 'theme-ruby', name: 'Bold Ruby', color: '#e11d48' },
    { id: 'theme-silver', name: 'Ultra Silver', color: '#a1a1aa' }
  ];

  useEffect(() => {
    const htmlElement = document.documentElement;
    
    // Remove all previous theme classes
    themes.forEach(theme => {
      if (theme.id !== 'default') {
        htmlElement.classList.remove(theme.id);
      }
    });

    // Add selected theme class
    if (currentTheme !== 'default') {
      htmlElement.classList.add(currentTheme);
    }
  }, [currentTheme]);

  return (
    <div className="fixed bottom-6 left-6 z-[400]">
      {/* Dropdown Panel */}
      <div className={`absolute bottom-full left-0 mb-4 bg-[#0f0f12] border border-[rgba(255,255,255,0.07)] rounded-xl shadow-2xl p-3 flex flex-col gap-1 transition-all duration-300 origin-bottom-left w-48 ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
        <p className="text-[0.65rem] text-[#7a776e] uppercase tracking-widest font-mono mb-2 px-2 mt-1">Select Theme</p>
        
        {themes.map((theme) => {
          const isActive = currentTheme === theme.id;
          return (
            <button
              key={theme.id}
              onClick={() => {
                setCurrentTheme(theme.id);
                setIsOpen(false);
              }}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors text-[0.8rem] font-medium w-full ${isActive ? 'bg-[rgba(255,255,255,0.06)] text-[#f5f3ee]' : 'text-[#7a776e] hover:bg-[rgba(255,255,255,0.03)] hover:text-[#f5f3ee]'}`}
            >
              <div className="flex items-center gap-3">
                <span className="w-3.5 h-3.5 rounded-full border border-[rgba(255,255,255,0.15)] shadow-sm" style={{ backgroundColor: theme.color }}></span>
                <span className="whitespace-nowrap">{theme.name}</span>
              </div>
              {isActive && <Check size={14} className="text-gold" />}
            </button>
          );
        })}
      </div>
      
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-[#0f0f12] border border-[rgba(255,255,255,0.07)] text-[#7a776e] hover:text-gold hover:border-dark-warmBorder flex items-center justify-center shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50"
        aria-label="Toggle Theme"
      >
        <Palette size={20} />
      </button>

      {/* Backdrop for closing when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[-1]" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
