import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Globe, Laptop } from 'lucide-react';

const About = () => {
  return (
    <div className="text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Left Col: The 'Persona' Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative group h-full"
        >
          <div className="relative h-full z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl glass p-3">
            <div className="relative h-full rounded-[2rem] overflow-hidden">
                <img
                src="/nitin-profile.jpeg"
                alt="Nitin Kumar Mandal"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                
                {/* Floating Status */}
                <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl flex items-center justify-between border-white/20">
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-0.5">Focus Area</span>
                        <span className="text-sm font-black">AI & Health Tech</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[10px] font-bold text-green-400 uppercase tracking-tighter">Active Now</span>
                    </div>
                </div>
            </div>
          </div>
        </motion.div>

        {/* Right Col: The 'Content' Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="md:col-span-2 glass p-8 md:p-10 rounded-[2.5rem]"
            >
                <h2 className="text-3xl md:text-5xl font-black mb-8">
                    Exploring the <span className="text-gradient">Tech</span> Landscape
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
                    I am a Computer Science student at <span className="text-white font-medium">Indraprastha Engineering College</span>, currently exploring the world of full-stack development.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                    I'm focused on learning how to build functional and reliable web applications. My journey involves diving into frontend and backend technologies, while also experimenting with how data and intelligent features can enhance user experiences. I enjoy the process of continuous learning and am always looking for ways to improve my coding skills and understand best practices.
                </p>
            </motion.div>

            {/* Sub-cards */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-hover p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] transition-all"
            >
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 w-fit mb-4">
                    <Code className="w-6 h-6" />
                </div>
                <h4 className="font-black text-xl mb-2">Frontend</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Modern UI with React, Vite & Tailwind for seamless interaction.</p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-hover p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] transition-all"
            >
                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 w-fit mb-4">
                    <Brain className="w-6 h-6" />
                </div>
                <h4 className="font-black text-xl mb-2">AI Logic</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Specialized in LLM prompting and multi-modal data extraction.</p>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
