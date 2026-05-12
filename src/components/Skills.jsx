import React from 'react';

const Skills = () => {
  const skillGroups = [
    {
      number: "01",
      title: "Mobile Development",
      description: "Building fast, native-quality applications with cross-platform frameworks, ensuring robust logic and smooth interfaces.",
      skills: ["Flutter", "Dart", "Android (Java)", "iOS"]
    },
    {
      number: "02",
      title: "Architecture",
      description: "Designing scalable codebases using established patterns that separate UI, business logic, and data layers effectively.",
      skills: ["Clean Architecture", "MVVM", "MVC", "GetX", "BLoC", "Riverpod"]
    },
    {
      number: "03",
      title: "APIs & Backend",
      description: "Integrating with complex RESTful APIs, handling authentication, and working closely with Firebase ecosystems.",
      skills: ["REST API", "Retrofit", "Firebase", "Postman"]
    },
    {
      number: "04",
      title: "Databases",
      description: "Managing local state and persistence to ensure offline capabilities and smooth user experiences.",
      skills: ["SQLite", "MySQL", "Firebase Realtime DB", "Cloud Storage"]
    },
    {
      number: "05",
      title: "Design & UI",
      description: "Translating high-fidelity designs into pixel-perfect, responsive components.",
      skills: ["Figma", "Adobe XD", "Material Design", "Responsive UI"]
    },
    {
      number: "06",
      title: "Tools & Workflow",
      description: "Utilizing modern development tools to streamline collaboration, version control, and agile delivery.",
      skills: ["Git", "GitHub", "VS Code", "Android Studio", "Xcode", "Agile"]
    }
  ];

  return (
    <section id="skills" className="px-[clamp(1.5rem,5vw,5rem)] py-28 border-t border-dark-border bg-[#0e0e10] relative">
      <div className="flex items-baseline gap-6 mb-16 reveal">
        <span className="font-mono text-[0.7rem] text-gold tracking-[0.1em]">01</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.02em] text-paper">
          Skills <em className="italic text-gold">Modules</em>
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-dark-warmBorder to-transparent"></div>
      </div>
      
      <p className="max-w-[68ch] text-[0.95rem] leading-[1.75] text-muted mt-[-2rem] mb-12 reveal reveal-delay-1">
        Senior Flutter developer focused on production-scale mobile systems: modular architecture, optimized APIs, and pixel-perfect UI.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, idx) => (
          <article 
            key={idx} 
            className="p-[1.75rem_1.85rem] bg-dark border border-dark-border rounded-xl transition-all duration-300 relative overflow-hidden group hover:border-dark-warmBorder hover:bg-[#0f0f12] hover:-translate-y-[3px] hover:shadow-[0_18px_48px_rgba(0,0,0,0.35)] reveal"
            style={{ transitionDelay: `${idx * 70}ms` }}
          >
            {/* Top border highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-dark-warmBorder to-transparent opacity-60"></div>
            {/* Hover glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,var(--tw-colors-gold-dim),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none"></div>
            
            <div className="relative z-10">
              <span className="font-mono text-[0.62rem] text-gold tracking-[0.14em] uppercase block mb-[0.85rem]">{group.number}</span>
              <h3 className="font-serif text-[1.15rem] font-normal text-paper mb-[0.55rem] tracking-[-0.02em]">{group.title}</h3>
              <p className="text-[0.8rem] text-muted leading-[1.65] mb-[1.1rem]">{group.description}</p>
              
              <div className="flex flex-wrap gap-[0.4rem]">
                {group.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="text-[0.65rem] px-[0.58rem] py-[0.28rem] rounded bg-gold/5 border border-dark-warmBorder text-gold font-mono tracking-[0.02em]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
