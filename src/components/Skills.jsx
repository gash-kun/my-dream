import React from 'react';
import { Layout, Code2, Wrench, GraduationCap } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Front-End Development',
      icon: <Layout className="h-6 w-6 text-indigo-600" />,
      skills: ['React', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Vite', 'DOM Manipulation'],
    },
    {
      title: 'Tools & Environments',
      icon: <Wrench className="h-6 w-6 text-indigo-600" />,
      skills: ['VS Code', 'Git & GitHub', 'Node.js', 'Google Cloud Shell', 'npm'],
    },
    {
      title: 'Core Concepts & Academic',
      icon: <GraduationCap className="h-6 w-6 text-indigo-600" />,
      skills: ['Computer Science Fundamentals', 'Responsive Design', 'Web Accessibility', 'Component Architecture'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Skills & Tech Stack</h2>
          <p className="mt-4 text-slate-600 text-lg">
            Technologies and tools I work with to build responsive, modern web applications.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50/80 rounded-2xl border border-slate-200/80 hover:border-indigo-200 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
              </div>

              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2 text-slate-700 font-medium">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    {skill}
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