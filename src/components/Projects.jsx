import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Confidential FinTech Platform",
      period: "Aug 2024–Present",
      description: "Large-scale investment & digital banking app — portfolios, wallets, transactions.",
      tech: ["Flutter", "Clean Architecture", "REST API", "Dart"],
      links: []
    },
    {
      title: "Anis Phone App",
      period: "May–Jul 2024",
      description: "E-commerce for original iPhones & Apple accessories in Aden.",
      tech: ["Flutter", "REST API", "Clean Architecture", "Figma"],
      links: []
    },
    {
      title: "Mazalah Store",
      period: "Aug–Sep 2023",
      description: "Nonprofit e-commerce app funding foundation projects through branded product sales.",
      tech: ["Flutter", "Firebase", "REST API"],
      links: []
    },
    {
      title: "STC Aden",
      period: "Oct–Dec 2023",
      description: "News app integrated with Jaridah CMS + Firebase push notifications.",
      tech: ["Flutter", "Firebase FCM", "REST API"],
      links: []
    },
    {
      title: "South Water",
      period: "Oct–Dec 2022",
      description: "On-demand water delivery app for Aden Governorate.",
      tech: ["Flutter", "Firebase", "SQLite"],
      links: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.uitapps.south_water" }
      ]
    },
    {
      title: "Tagerly Driver",
      period: "2022–2023",
      description: "Delivery management platform for multiple companies in Aden.",
      tech: ["Flutter", "Clean Architecture", "REST API"],
      links: [
        { label: "Google Drive", url: "https://drive.google.com/drive/folders/1gblk73OJepEQ6rcugJPXIW5N4b3czhKK?usp=drive_link" }
      ]
    },
    {
      title: "Aswaq Aden",
      period: "Dec 2021–Mar 2022",
      description: "City guide — stores & parking locations across Aden (Android + iOS).",
      tech: ["Flutter", "Google Maps", "REST API"],
      links: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.yonas_you.aswaq_aden" },
        { label: "App Store", url: "https://apps.apple.com/kh/app/%D8%A7%D8%B3%D9%88%D8%A7%D9%82-%D8%B9%D8%AF%D9%86/id1620159881" }
      ]
    },
    {
      title: "Mufeed",
      period: "2022–2023",
      description: "Restaurant discovery — menus, prices, and order estimates for Aden.",
      tech: ["Flutter", "REST API"],
      links: [
        { label: "Google Drive", url: "https://drive.google.com/drive/folders/18DMlrFM4A1swIig2tJ91mxZO6QBS_73h?usp=drive_link" }
      ]
    },
    {
      title: "Tagerly Suite (3 apps)",
      period: "2022–2024",
      description: "Three e-commerce apps: 361 Yemen · Beutiqaty · Al-Diafa.",
      tech: ["Flutter", "REST API", "Firebase"],
      links: [
        { label: "361 Yemen Play Store", url: "https://play.google.com/store/apps/details?id=com.uitapps.threesixtyoneec" },
        { label: "361 Yemen App Store", url: "https://apps.apple.com/kh/app/361%C2%BA-yemen/id1661525655" },
        { label: "Beutiqaty App Store", url: "https://apps.apple.com/us/app/beutiqaty/id1668648347" }
      ]
    }
  ];

  return (
    <section id="projects" className="px-[clamp(1.5rem,5vw,5rem)] py-28 border-t border-dark-border bg-[#0e0e10] relative">
      <div className="flex items-baseline gap-6 mb-16 reveal">
        <span className="font-mono text-[0.7rem] text-gold tracking-[0.1em]">03</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.02em] text-paper">
          Project <em className="italic text-gold">Archive</em>
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-dark-warmBorder to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <article 
            key={idx} 
            className="border border-dark-border rounded-xl bg-dark transition-all duration-300 hover:border-dark-warmBorder hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_0_1px_rgba(201,169,110,0.2)] group reveal flex flex-col"
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
            <div className="p-6 flex-1 flex flex-col">
              <div className="inline-flex items-center gap-[0.35rem] font-mono text-[0.65rem] text-gold tracking-[0.12em] uppercase mb-[0.6rem] before:content-[''] before:w-4 before:h-[1px] before:bg-gold">
                {project.period}
              </div>
              <h3 className="font-serif text-[1.4rem] text-paper mb-[0.6rem] tracking-[-0.01em] group-hover:text-gold transition-colors">{project.title}</h3>
              <p className="text-[0.83rem] text-muted leading-[1.65] mb-[1.2rem] flex-1">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[0.65rem] px-[0.58rem] py-[0.28rem] rounded bg-dark border border-dark-border text-muted font-mono tracking-[0.02em]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-border/50">
                {project.links.length > 0 ? project.links.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-[0.75rem] px-[0.9rem] py-[0.4rem] rounded-[5px] border border-dark-warmBorder text-gold no-underline font-mono transition-colors duration-200 hover:bg-gold hover:text-ink inline-flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                    <ExternalLink size={12} />
                  </a>
                )) : (
                  <span className="text-[0.75rem] text-muted/50 italic px-1 py-[0.4rem] font-mono">Confidential / Internal</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
