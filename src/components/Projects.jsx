import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "361 Yemen Store",
      category: "Flutter App",
      description: "A comprehensive e-commerce application built with Flutter, providing seamless shopping experience across Android and iOS.",
      links: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.uitapps.threesixtyoneec" },
        { label: "App Store", url: "https://apps.apple.com/kh/app/361%C2%BA-yemen/id1661525655" }
      ]
    },
    {
      title: "Aswaq Aden",
      category: "Flutter App",
      description: "Local marketplace application connecting buyers and sellers in Aden, featuring real-time updates and an intuitive interface.",
      links: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.yonas_you.aswaq_aden" },
        { label: "App Store", url: "https://apps.apple.com/kh/app/%D8%A7%D8%B3%D9%88%D8%A7%D9%82-%D8%B9%D8%AF%D9%86/id1620159881" }
      ]
    },
    {
      title: "Beutiqaty",
      category: "Flutter App",
      description: "Beauty and cosmetics shopping app designed with a focus on high-quality visuals and user engagement.",
      links: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.uitapps.beutiqaty" },
        { label: "App Store", url: "https://apps.apple.com/us/app/beutiqaty/id1668648347" }
      ]
    },
    {
      title: "South Water",
      category: "Native Java App",
      description: "Water delivery service application providing easy ordering and tracking for customers.",
      links: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.uitapps.south_water" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 border-t border-dark-border">
      <div className="mb-12">
        <h2 className="text-sm font-mono text-gold tracking-widest uppercase mb-4">Portfolio</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Selected Works</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="group flex flex-col bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-gray-500 transition-colors">
            {/* Placeholder for project image */}
            <div className="w-full h-64 bg-dark border-b border-dark-border flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent z-10"></div>
              <span className="text-gray-600 font-mono text-sm z-20">[ Project Image Placeholder ]</span>
              {/* Optional: you can add an image tag here later */}
              {/* <img src="your-image-path.jpg" alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /> */}
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <span className="text-xs font-mono text-gold mb-3">{project.category}</span>
              <h4 className="text-2xl font-bold text-white mb-3">{project.title}</h4>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-4 mt-auto">
                {project.links.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white"
                  >
                    <span>{link.label}</span>
                    <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a href="https://github.com/Yonas4" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 text-gold hover:text-white transition-colors font-medium">
          <span>View all projects on GitHub</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
};

export default Projects;
