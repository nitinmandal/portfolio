import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Brain, Activity, Calculator } from 'lucide-react';

const projects = [
    {
        title: 'MindMate – AI Wellness Platform',
        description: 'An AI-powered mental wellness ecosystem providing early stress detection, emotion-aware chatbot support, and personalized mood journaling using NLP models.',
        tags: ['React', 'Tailwind', 'Node.js', 'Supabase', 'Hugging Face NLP'],
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        liveLink: 'https://mindmate-wellness.vercel.app/',
        githubLink: 'https://github.com/nitinmandal',
        icon: <Brain className="w-5 h-5 text-purple-400" />
    },
    {
        title: 'BeachGuide – AI Smart Safety',
        description: 'AI-driven real-time beach recommendation system. Evaluates environmental parameters to compute Beach Suitability Index and provides hazard alerts.',
        tags: ['JavaScript', 'ML Concepts', 'System Architecture', 'Hackathon Top 20'],
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        liveLink: '#',
        githubLink: 'https://github.com/nitinmandal',
        icon: <Activity className="w-5 h-5 text-blue-400" />
    },
    {
        title: 'Smart Calorie Calculator',
        description: 'A responsive health tool that calculates daily calorie requirements based on user activity levels and biometrics. Features complex DOM manipulation logic.',
        tags: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        liveLink: 'https://nitinmandal.github.io/smart-calorie-calculator/',
        githubLink: 'https://github.com/nitinmandal/smart-calorie-calculator', // Assumed likely link structure
        icon: <Calculator className="w-5 h-5 text-green-400" />
    }
];

const Portfolio = () => {
    return (
        <div className="text-white py-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                    Featured Projects
                </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="rounded-xl overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group flex flex-col h-full"
                    >
                        {/* Image Container */}
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80" />
                            <div className="absolute top-4 right-4 p-2 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700">
                                {project.icon}
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                {project.description}
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex justify-between items-center pt-4 border-t border-gray-800 mt-auto">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                                    <Github className="w-4 h-4" /> Code
                                </a>
                                {project.liveLink !== '#' && (
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                                        Live Demo <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
