import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center">
      <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-dark-border bg-dark-card/50 text-sm font-medium text-gray-300 mb-8 backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span>Available for new opportunities</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white mb-6 leading-tight">
        Building <span className="text-gold italic">performant</span> <br />
        mobile apps.
      </h1>
      
      <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
        I'm Yunes Al-khaledi, a Mobile Developer based in Aden, Yemen with 3+ years of experience 
        crafting seamless enterprise applications and high-quality user experiences.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <a href="#projects" className="group flex items-center justify-center space-x-2 px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-gold transition-colors w-full sm:w-auto">
          <span>View My Work</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a href="https://drive.google.com/file/d/1qGEkGbon_5jEnqUm7FZONrnbfAh0z8i4/view" target="_blank" rel="noreferrer" className="group flex items-center justify-center space-x-2 px-8 py-4 bg-dark-card border border-dark-border text-white rounded-full font-medium text-lg hover:border-gray-500 transition-colors w-full sm:w-auto">
          <span>Download CV</span>
          <Download size={20} />
        </a>
      </div>

      <div className="mt-24 w-full relative">
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10 bottom-0 h-32 top-auto"></div>
        {/* Placeholder for the main hero image (e.g. mobile mockups) */}
        <div className="w-full h-[400px] md:h-[600px] rounded-2xl bg-dark-card border border-dark-border overflow-hidden flex items-center justify-center relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-50 group-hover:opacity-80 transition-opacity"></div>
          <span className="text-gray-500 font-mono text-sm z-10">[ 3D Mobile Mockup Placeholder ]</span>
          <span className="text-gray-600 font-mono text-xs z-10 absolute bottom-4">Replace with your actual image later</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
