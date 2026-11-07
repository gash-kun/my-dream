import React from 'react';
import { Code2 } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200/80 py-8 text-center text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Code2 className="h-5 w-5 text-indigo-600" />
          <span className="font-bold text-slate-900 text-base">Natale Idris Bekit</span>
        </div>
        <p>© {new Date().getFullYear()} Natale. Built with React, Vite & Tailwind CSS v4.</p>
      </div>
    </footer>
  );
};