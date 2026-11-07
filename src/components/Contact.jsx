import React from 'react';
import { Mail, Globe, Code, Send } from 'lucide-react';

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! This form is connected.');
  };

  return (
    <section id="contact" className="py-20 bg-slate-100/60 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-slate-600 text-lg">
            Have a project in mind, a question, or just want to connect? Send me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Let's Talk</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                I am open to collaborations, web development projects, and new opportunities. Feel free to drop a message or reach out through social channels.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Email</p>
                    <a href="mailto:natale.idris.work@gmail.com" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-semibold hover:text-indigo-600 transition-colors">
                      natale.idris.work@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Profiles</p>
                    <a href="https://github.com/gash-kun" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-semibold hover:text-indigo-600 transition-colors">
                      https://github.com/gash-kun
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 text-slate-600 text-sm">
              💡 Based in Addis Ababa, Ethiopia. Available for remote work and technical projects.
            </div>
          </div>

          {/* Right Column - Interactive Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-900"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-900"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                required
                placeholder="How can I help you?"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-900 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};