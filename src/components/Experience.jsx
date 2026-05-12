import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Senior Flutter Developer",
      company: "Confidential FinTech Company",
      period: "Aug 2024 – Present",
      location: "Riyadh, KSA (Remote)",
      description: "Engineered core modules for investment portfolios, digital wallets, and financial transactions. Implemented Clean Architecture to separate UI, Domain, and Data layers. Secured REST APIs handling sensitive financial data within Agile sprint cycles."
    },
    {
      role: "Flutter Trainer",
      company: "BBSoft Academy / Experts Institute",
      period: "Aug 2023 – Present",
      location: "Aden, Yemen",
      description: "Trained over 50 developers on Flutter, Dart, Clean Architecture, and advanced state management. Designed a comprehensive curriculum covering API integration, Firebase architecture, and full app store deployment workflows."
    },
    {
      role: "Mobile Developer — Flutter",
      company: "You for Information Technology (YOU-IT)",
      period: "Dec 2021 – Jul 2024",
      location: "Aden, Yemen",
      description: "Built and shipped 9+ production apps to Google Play & App Store. Led Clean Architecture implementation across projects, integrated Firebase and diverse REST APIs, and delivered pixel-perfect UIs based on Figma and Adobe XD designs."
    },
    {
      role: "Android Developer",
      company: "Freelance",
      period: "Jan 2020 – Dec 2021",
      location: "Aden, Yemen",
      description: "Built native Java Android applications leveraging MVVM architectural patterns. Integrated Firebase for backend services and real-time data, and implemented AdMob monetization strategies."
    }
  ];

  return (
    <section id="experience" className="px-[clamp(1.5rem,5vw,5rem)] py-28 border-t border-dark-border relative">
      <div className="flex items-baseline gap-6 mb-16 reveal">
        <span className="font-mono text-[0.7rem] text-gold tracking-[0.1em]">02</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.02em] text-paper">
          Experience <em className="italic text-gold">Timeline</em>
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-dark-warmBorder to-transparent"></div>
      </div>

      <div className="flex flex-col gap-0">
        {experiences.map((exp, idx) => (
          <div 
            key={idx} 
            className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-8 py-10 border-b border-dark-border first:border-t transition-colors duration-300 hover:bg-transparent group reveal"
            style={{ transitionDelay: `${idx * 70}ms` }}
          >
            <div>
              <div className="font-mono text-[0.7rem] text-gold tracking-[0.08em] mb-[0.4rem]">{exp.period}</div>
              <div className="text-[0.85rem] text-muted font-medium">{exp.company}</div>
              <div className="text-[0.75rem] text-muted/60 mt-1">{exp.location}</div>
            </div>
            
            <div>
              <h3 className="font-serif text-[1.4rem] text-paper mb-[0.7rem] transition-colors duration-250 group-hover:text-gold">{exp.role}</h3>
              <p className="text-[0.875rem] text-muted leading-[1.7] max-w-[65ch] mb-4">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
