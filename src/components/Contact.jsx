import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="px-[clamp(1.5rem,5vw,5rem)] py-28 border-t border-dark-border bg-[#0e0e10] relative">
      <div className="flex items-baseline gap-6 mb-16 reveal">
        <span className="font-mono text-[0.7rem] text-gold tracking-[0.1em]">04</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.02em] text-paper">
          Open <em className="italic text-gold">Channel</em>
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-dark-warmBorder to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <p className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.15] tracking-[-0.02em] text-paper mb-6">
            Let's build something <em className="italic text-gold">great</em> together.
          </p>
          <p className="text-muted text-[0.95rem] leading-[1.7] max-w-lg">
            Open for remote opportunities, freelance projects, and collaboration. 
            Based in Aden / Riyadh — working with teams worldwide.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 reveal reveal-delay-1">
          <div className="flex flex-col gap-1 p-5 border border-dark-border rounded-lg bg-dark transition-colors duration-200 hover:border-dark-warmBorder hover:bg-[rgba(201,169,110,0.03)] group">
            <span className="font-mono text-[0.62rem] text-muted tracking-[0.15em] uppercase">Email</span>
            <a href="mailto:yunes.alkhaledi@gmail.com" className="text-[0.95rem] text-paper no-underline transition-colors group-hover:text-gold">yunes.alkhaledi@gmail.com</a>
          </div>
          
          <div className="flex flex-col gap-1 p-5 border border-dark-border rounded-lg bg-dark transition-colors duration-200 hover:border-dark-warmBorder hover:bg-[rgba(201,169,110,0.03)] group">
            <span className="font-mono text-[0.62rem] text-muted tracking-[0.15em] uppercase">Phone</span>
            <a href="tel:+967778420917" className="text-[0.95rem] text-paper no-underline transition-colors group-hover:text-gold">+967 778420917</a>
          </div>
          
          <div className="flex flex-col gap-1 p-5 border border-dark-border rounded-lg bg-dark transition-colors duration-200 hover:border-dark-warmBorder hover:bg-[rgba(201,169,110,0.03)] group">
            <span className="font-mono text-[0.62rem] text-muted tracking-[0.15em] uppercase">Location</span>
            <span className="text-[0.95rem] text-paper">Aden, Yemen / Riyadh (Remote)</span>
          </div>
          
          <div className="flex flex-col gap-1 p-5 border border-dark-border rounded-lg bg-dark transition-colors duration-200 hover:border-dark-warmBorder hover:bg-[rgba(201,169,110,0.03)] group">
            <span className="font-mono text-[0.62rem] text-muted tracking-[0.15em] uppercase">Status</span>
            <span className="text-[0.95rem] text-[#4ade80]">● Available for Remote Work</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
