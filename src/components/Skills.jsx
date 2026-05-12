import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Technologies",
      skills: ["Flutter", "Dart", "Java", "Android Development", "PHP", "Laravel"]
    },
    {
      title: "Tools & Methods",
      skills: ["Git", "RESTful APIs", "Firebase", "App Store Connect", "Google Play Console", "Agile/Scrum"]
    }
  ];

  return (
    <section id="skills" className="py-20 border-t border-dark-border">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <h2 className="text-sm font-mono text-gold tracking-widest uppercase mb-4">Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
            Tools & <br /> Technologies
          </h3>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-dark-card border border-dark-border p-8 rounded-2xl hover:border-gray-600 transition-colors">
              <h4 className="text-xl font-semibold text-white mb-6">{category.title}</h4>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
