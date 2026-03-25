import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Brain, Activity, Calculator, Stethoscope } from 'lucide-react';

const projects = [
    {
        title: 'MedExplain AI – Medical Analyzer',
        description: 'Building with AI is more than just API calls — it’s about solving real-world friction. A full-stack health-tech application leveraging Google Gemini 1.5 Flash for multi-modal medical data extraction, structured JSON processing of complex lab reports, and longitudinal health tracking.',
        tags: ['React', 'Node.js', 'MongoDB', 'Gemini 1.5 Flash', 'Recharts'],
        image: '/medexplain.png',
        liveLink: 'https://medexplain-ai.netlify.app/',
        githubLink: 'https://github.com/nitinmandal', 
        icon: <Stethoscope className="w-5 h-5 text-red-400" />
    },
    {
        title: 'MindMate – AI Wellness Platform',
        description: 'An AI-powered mental wellness ecosystem providing early stress detection, emotion-aware chatbot support, and personalized mood journaling using NLP models.',
        tags: ['React', 'Tailwind', 'Node.js', 'Supabase', 'Hugging Face NLP'],
        image: '/mindmate.png',
        liveLink: 'https://mindmate-wellness.vercel.app/',
        githubLink: 'https://github.com/nitinmandal/Mindmate',
        icon: <Brain className="w-5 h-5 text-purple-400" />
    },
    {
        title: 'BeachGuide – AI Smart Safety',
        description: 'AI-driven real-time beach recommendation system. Evaluates environmental parameters to compute Beach Suitability Index and provides hazard alerts.',
        tags: ['JavaScript', 'ML Concepts', 'System Architecture', 'Hackathon Top 20'],
        image: '/beachguide.png',
        liveLink: '#',
        githubLink: 'https://github.com/nitinmandal',
        icon: <Activity className="w-5 h-5 text-blue-400" />
    },
    {
        title: 'Smart Calorie Calculator',
        description: 'A responsive health tool that calculates daily calorie requirements based on user activity levels and biometrics. Features complex DOM manipulation logic.',
        tags: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
        image: '/smartcalorie.png',
        liveLink: 'https://nitinmandal.github.io/smart-calorie-calculator/',
        githubLink: 'https://github.com/nitinmandal/smart-calorie-calculator',
        icon: <Calculator className="w-5 h-5 text-green-400" />
    }
];

const Portfolio = () => {
    return (
        <div className="text-white py-12 md:py-16">
            <div className="text-center mb-12 md:mb-24">
                <h2 className="text-4xl md:text-6xl font-black mb-6">
                    Featured <span className="text-gradient">Projects</span>
                </h2>
                <div className="w-16 md:w-20 h-1 md:h-1.5 bg-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group flex flex-col rounded-3xl bg-[#0a0a0b] border border-gray-800/60 hover:border-blue-500/30 transition-all shadow-xl hover:shadow-2xl overflow-hidden"
                    >
                        {/* Top Image Section */}
                        <div className="w-full h-40 sm:h-56 relative overflow-hidden border-b border-gray-800/60 bg-gray-900/50">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] to-transparent opacity-80" />
                        </div>

                        {/* Content Section */}
                        <div className="p-6 md:p-8 flex flex-col flex-1 relative">
                            {/* Floating Icon */}
                            <div className="absolute -top-6 md:-top-7 right-6 md:right-8 bg-[#121214] p-3 md:p-3.5 rounded-2xl border border-gray-800 shadow-xl z-20">
                                {project.icon}
                            </div>
                            
                            <h3 className="text-xl md:text-3xl font-bold mb-3 tracking-tight">
                                {project.title}
                            </h3>
                            
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 md:mb-8 flex-1">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-blue-500/5 border border-blue-500/10 text-[9px] md:text-[10px] uppercase font-semibold tracking-wider text-blue-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3 md:gap-4">
                                <a 
                                    href={project.liveLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex-1 flex items-center justify-center gap-2 text-white font-semibold text-xs md:text-sm bg-blue-600/90 py-2.5 md:py-3 rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"
                                >
                                    Launch <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                </a>
                                <a 
                                    href={project.githubLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex-1 flex items-center justify-center gap-2 text-gray-300 font-semibold text-xs md:text-sm bg-white/5 py-2.5 md:py-3 rounded-xl hover:bg-white/10 hover:text-white transition-colors border border-white/5"
                                >
                                    Code <Github className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
