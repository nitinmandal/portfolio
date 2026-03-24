import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      {/* Background radial gradient spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0,transparent_60%)] -z-10" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto my-32">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest"
        >
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Projects
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black tracking-tight mb-10 leading-[1.1]"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 block drop-shadow-sm">
            Nitin Kumar Mandal
          </span>
          <span className="text-gradient block text-4xl md:text-6xl mt-4">Aspiring Full-Stack Developer</span>
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto mb-14 leading-relaxed text-lg md:text-xl font-light"
        >
           A Computer Science student exploring full-stack web development and learning to build <span className="text-white font-medium">functional, user-centric applications</span>.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-20"
        >
          <a href="#portfolio" className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-bold text-sm shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95 transition-all">
            See My Work
          </a>
          
          <div className="flex items-center gap-4 border border-white/10 p-1.5 rounded-full glass">
            <a href="https://github.com/nitinmandal" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full hover:bg-white/10 transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/nitin-kumar-mandal" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full hover:bg-white/10 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:nitinmandal172006@gmail.com" className="p-2.5 rounded-full hover:bg-white/10 transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-500 font-mono text-[10px] uppercase tracking-widest opacity-30">
          <span>Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
