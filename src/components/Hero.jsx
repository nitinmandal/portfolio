import React from 'react';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden text-white">
      {/* Background is handled by ParticleBackground in App.jsx */}

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-500 to-blue-500 animate-gradient-x">
            Nitin Kumar Mandal
          </span>
        </h1>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-gray-300 text-lg md:text-xl font-light mb-12">
          <span className="px-2">Frontend Developer</span>
          <span className="hidden md:inline text-gray-600">|</span>
          <span className="px-2">Aspiring Full Stack Dev</span>
          <span className="hidden md:inline text-gray-600">|</span>
          <span className="px-2">AI-Web Builder</span>
        </div>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed text-base md:text-lg">
          I build intelligent, user-focused web applications that combine clean design with smart functionality.
          Transforming ideas into responsive, scalable digital solutions.
        </p>

        <div className="flex justify-center gap-6 mb-16">
          <a href="https://github.com/nitinmandal" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800/50 hover:bg-white/10 transition-colors border border-gray-700 hover:border-blue-500 group" aria-label="GitHub">
            <Github className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/nitin-kumar-mandal" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800/50 hover:bg-white/10 transition-colors border border-gray-700 hover:border-blue-500 group" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-700 transition-colors" />
          </a>
          <a href="mailto:nitinmandal172006@gmail.com" className="p-3 rounded-full bg-gray-800/50 hover:bg-white/10 transition-colors border border-gray-700 hover:border-red-500 group" aria-label="Email">
            <Mail className="w-6 h-6 text-gray-400 group-hover:text-red-400 transition-colors" />
          </a>
          {/* Optional Resume Link Placeholder */}
          {/* <a href="#" className="p-3 rounded-full bg-gray-800/50 hover:bg-white/10 transition-colors border border-gray-700 hover:border-green-500 group" aria-label="Resume">
                <FileText className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors" />
            </a> */}
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-500 w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
