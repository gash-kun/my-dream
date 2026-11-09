import React from 'react';
import { ArrowRight, Globe, Code, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Column - Intro Text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold tracking-wide">
            Front-End Developer & CS Student
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Hi, I'm <span className="text-indigo-600">Natale</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            I craft modern, responsive web applications using React, JavaScript, and Tailwind CSS. Focused on clean code, interactive learning tools, and seamless user experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 border border-slate-300 hover:border-slate-400 text-slate-700 font-medium rounded-lg hover:bg-slate-100 transition-all text-center"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-start gap-5 pt-4 text-slate-500">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors" title="GitHub">
              <Globe className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors" title="LinkedIn">
              <Code className="h-6 w-6" />
            </a>
            <a href="mailto:natale.idris.work@gmail.com" className="hover:text-indigo-600 transition-colors" title="Email">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        {/* Right Column - Avatar Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-1 shadow-xl overflow-hidden">
            <img
              src="{`${import.meta.env.BASE_URL}profile.jpg`}"
              alt="Natale Idris Bekit"
              className="w-full h-full object-cover object-top rounded-full scale-110"
           />
          </div>
        </div>

      </div>
    </section>
  );
};