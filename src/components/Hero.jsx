import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[calc(100vh-58px)] flex items-center px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2.5rem,5vh,4.5rem)] relative overflow-hidden mt-[58px]">
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 60% at 70% 30%, rgba(201,169,110,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 90% 80%, rgba(201,169,110,0.04) 0%, transparent 60%)'
      }}></div>
      
      {/* Watermark */}
      <div className="absolute right-0 md:right-20 top-1/2 -translate-y-1/2 font-serif text-[clamp(16rem,28vw,26rem)] leading-none text-white/5 select-none pointer-events-none z-0 hidden md:block">
        YA
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto">
        <div className="max-w-full lg:max-w-[34rem]">
          <p className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-gold mb-6 reveal">Mobile Software Engineer · Riyadh, KSA (Remote)</p>
          
          <h1 className="font-serif text-[clamp(2.5rem,8vw+1rem,4.75rem)] leading-[1.02] tracking-[-0.03em] text-paper mb-6 reveal reveal-delay-1">
            Building<br />
            <em className="font-light italic text-gold">performant</em><br />
            mobile apps.
          </h1>
          
          <p className="max-w-[48ch] text-muted leading-[1.75] text-[clamp(0.95rem,1.1vw,1.05rem)] mb-8 reveal reveal-delay-2">
            Senior Flutter Developer focused on FinTech, investment platforms, and digital wallets. 
            Shipping production-grade apps used by thousands — built on Clean Architecture.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 reveal reveal-delay-3">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-ink rounded-md font-medium text-sm transition-all duration-200 hover:bg-[#d4b57e] hover:-translate-y-0.5 w-full sm:w-auto">
              Get in touch
            </a>
            <a href="#projects" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-dark-warmBorder text-paper rounded-md font-medium text-sm transition-all duration-200 hover:bg-gold/15 hover:border-gold hover:-translate-y-0.5 w-full sm:w-auto">
              View projects
            </a>
            <a href="https://drive.google.com/file/d/1qGEkGbon_5jEnqUm7FZONrnbfAh0z8i4/view" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-dark-warmBorder text-paper rounded-md font-medium text-sm transition-all duration-200 hover:bg-gold/15 hover:border-gold hover:-translate-y-0.5 w-full sm:w-auto">
              Download CV
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 mt-12 border-t border-dark-border reveal reveal-delay-4">
            <div className="flex flex-col">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-paper mb-1">5+</span>
              <span className="font-mono text-[0.65rem] sm:text-xs text-gold tracking-widest uppercase">Years Exp</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-paper mb-1">9+</span>
              <span className="font-mono text-[0.65rem] sm:text-xs text-gold tracking-widest uppercase">Apps Shipped</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-paper mb-1">50+</span>
              <span className="font-mono text-[0.65rem] sm:text-xs text-gold tracking-widest uppercase">Trained</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-20 hidden lg:flex flex-col items-center gap-2 text-muted text-[0.7rem] tracking-[0.15em] uppercase font-mono z-10 reveal reveal-delay-4">
        <div className="w-[1px] h-[50px] bg-gradient-to-b from-gold to-transparent animate-scrollPulse"></div>
        <span>Scroll</span>
      </div>

    </section>
  );
};

export default Hero;
