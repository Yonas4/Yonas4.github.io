import React from 'react';

const Experience = () => {
  const experiences = [
    {
      period: "2021 - Present",
      role: "Mobile Developer",
      company: "You-IT",
      description: "Developing and maintaining mobile applications for various clients. Implementing modern architectures, integrating RESTful APIs, and ensuring high performance across Android and iOS platforms."
    },
    {
      period: "2020 - 2021",
      role: "Android Developer",
      company: "Freelance",
      description: "Worked on various freelance projects, developing native Android applications. Focused on UI/UX, responsive design, and robust backend integration."
    }
  ];

  const education = [
    {
      period: "2020 - 2021",
      degree: "Bachelor's degree in Computer Science",
      institution: "Aden University"
    },
    {
      period: "2022",
      degree: "The Complete Flutter Development Guide",
      institution: "Udemy"
    },
    {
      period: "2022",
      degree: "The Complete Dart Learning Guide",
      institution: "Udemy"
    }
  ];

  return (
    <section id="experience" className="py-20 border-t border-dark-border">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Experience Column */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-serif font-bold text-white mb-10">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l border-dark-border">
                <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-gold"></span>
                <span className="text-sm font-mono text-gray-500 mb-2 block">{exp.period}</span>
                <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
                <h4 className="text-gold mb-3">{exp.company}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-serif font-bold text-white mb-10">Education</h2>
          <div className="space-y-12">
            {education.map((edu, idx) => (
              <div key={idx} className="relative pl-8 border-l border-dark-border">
                <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-gray-600"></span>
                <span className="text-sm font-mono text-gray-500 mb-2 block">{edu.period}</span>
                <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                <h4 className="text-gray-400">{edu.institution}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
