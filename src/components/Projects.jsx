import React from 'react';
import { ExternalLink, Globe, FolderCode } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'Word Puzzle Game',
      description: 'An interactive React & Vite web application featuring engaging puzzle mechanics. Built and deployed to GitHub Pages.',
      tags: ['React', 'Vite', 'Tailwind CSS', 'GitHub Pages'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Kunama Language Learning App',
      description: 'An interactive K–5 educational web application designed for children to learn the Kunama language, featuring alphabet lessons, interactive quizzes, and vocabulary categories.',
      tags: ['React', 'JavaScript', 'Tailwind CSS', 'Web Audio API'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'ShopEasy',
      description: 'A responsive landing page project developed with structured semantic markup and modern CSS techniques.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com',
      demo: 'https://natale-1986.github.io/kunama_culture/index.html',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-100/60 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-slate-600 text-lg">
            A selection of recent applications built with modern web technologies.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-200/80 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                    <FolderCode className="h-6 w-6" />
                  </div>
                  <div className="flex gap-3 text-slate-400">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-slate-900 transition-colors"
                      title="View Source Code"
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-indigo-600 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.description}</p>
              </div>

              {/* Tech Badges */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 mt-auto">
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};