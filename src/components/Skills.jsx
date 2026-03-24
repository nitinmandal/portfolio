import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Server, Database, Layout, Sparkles, GitBranch, ShieldCheck, Globe, Terminal } from 'lucide-react';

const experiences = [
    {
        role: 'Social Media Volunteer',
        company: 'HackWithIndia – IPEC Chapter',
        period: 'Jan 2025 – Present',
        description: 'Contributing to digital outreach, managing technical event promotions, and supporting community engagement initiatives.',
        borderColor: 'border-purple-500',
        hoverBg: 'group-hover:bg-purple-500',
    },
    {
        role: 'Social Media Manager',
        company: 'The Craftomaniacs Theatre Society',
        period: 'Oct 2024 – Present',
        description: 'Managed social media presence and content planning. Developed digital strategies to improve reach and community interaction.',
        borderColor: 'border-blue-500',
        hoverBg: 'group-hover:bg-blue-500',
    },
    {
        role: 'Team Lead – AI EdTech Project',
        company: 'Hackspire Hackathon',
        period: '2025',
        description: 'Led a 4-member team to build an AI EdTech platform (Top 20/500+). Managed frontend, backend integration, and system architecture.',
        borderColor: 'border-pink-500',
        hoverBg: 'group-hover:bg-pink-500',
    },
];

const skills = [
    { name: 'JavaScript / ES6+', level: 90, icon: <Code2 className="w-5 h-5" />, color: 'blue' },
    { name: 'React (Vite)', level: 85, icon: <Cpu className="w-5 h-5" />, color: 'cyan' },
    { name: 'Node.js & Express', level: 80, icon: <Server className="w-5 h-5" />, color: 'green' },
    { name: 'MongoDB (Mongoose)', level: 75, icon: <Database className="w-5 h-5" />, color: 'emerald' },
    { name: 'Tailwind & Modern CSS', level: 85, icon: <Layout className="w-5 h-5" />, color: 'sky' },
    { name: 'AI Prompt Engineering', level: 80, icon: <Sparkles className="w-5 h-5" />, color: 'purple' },
    { name: 'Git & Agile Workflow', level: 75, icon: <GitBranch className="w-5 h-5" />, color: 'orange' },
];

const otherSkills = [
    { name: 'Google Gemini 1.5 Flash', icon: <Sparkles className="w-3 h-3 text-purple-400" /> },
    { name: 'JWT Auth', icon: <ShieldCheck className="w-3 h-3 text-green-400" /> },
    { name: 'Restful APIs', icon: <Globe className="w-3 h-3 text-blue-400" /> },
    { name: 'System Design', icon: <Terminal className="w-3 h-3 text-gray-400" /> },
];

const Skills = () => {
    return (
        <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
                    Skills & Experience
                </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 md:gap-7">
                {/* 1. Main Tech Stack (Large Card) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="col-span-1 md:col-span-6 lg:col-span-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-blue-500/30 transition-all group"
                >
                    <div className="flex justify-between items-start mb-10">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Technical Proficiency</h3>
                            <p className="text-sm text-gray-500">Core development stack and specialized expertise</p>
                        </div>
                        <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                            <Code2 className="w-6 h-6" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                        {skills.map((skill, index) => (
                            <div key={skill.name} className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="p-1.5 rounded-md bg-gray-800 group-hover:bg-gray-700 transition-colors">
                                            {skill.icon}
                                        </div>
                                        <span className="text-sm font-semibold text-gray-200">{skill.name}</span>
                                    </div>
                                    <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded font-mono">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-950/50 rounded-full h-1.5 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1.2, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                                        viewport={{ once: true }}
                                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 2. AI Specialization Card (Square Card) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="col-span-1 md:col-span-3 lg:col-span-4 bg-gradient-to-br from-purple-900/20 to-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-all flex flex-col justify-between"
                >
                    <div className="mb-6">
                        <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 inline-block mb-4">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">AI Ecosystem</h4>
                        <p className="text-sm text-gray-400">Integrated OCR, Multimodal extraction, and LLM implementations.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-xs space-y-2">
                            <div className="flex justify-between text-gray-500">
                                <span>Gemini 1.5 Flash</span>
                                <span className="text-purple-400">Expert</span>
                            </div>
                            <div className="w-full bg-gray-950 h-1 rounded-full overflow-hidden">
                                <div className="w-full h-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.4)]"></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {['JSON Extraction', 'Prompt Engineering', 'NLP Pipeline'].map(tag => (
                                <span key={tag} className="text-[10px] bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* 3. Learning Card (Narrow Vertical) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="col-span-1 md:col-span-3 lg:col-span-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition-all flex flex-col h-full"
                >
                    <div className="mb-6 flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-green-500/10 text-green-400">
                            <Globe className="w-5 h-5" />
                        </div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest">Now Scaling</h4>
                    </div>
                    <ul className="space-y-4 flex-grow">
                        {['Advanced Vector DBs', 'RAG Implementation', 'Cloud Infrastructure'].map(item => (
                            <li key={item} className="flex items-start gap-2 text-sm text-gray-400 group/item">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 mt-1.5 group-hover/item:scale-150 transition-transform"></div>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 pt-4 border-t border-gray-800">
                        <p className="text-[10px] text-gray-500">Always iterating on new patterns</p>
                    </div>
                </motion.div>

                {/* 4. Experience Timeline (Large Vertical Card) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="col-span-1 md:col-span-6 lg:col-span-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-blue-500/30 transition-all h-full"
                >
                    <div className="flex items-center justify-between mb-8">
                        <h4 className="text-xl font-bold text-white">Experience</h4>
                        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                            <Terminal className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-gray-800">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="relative pl-8 group/exp">
                                <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full bg-gray-950 border-2 ${exp.borderColor} flex items-center justify-center z-10 group-hover/exp:scale-110 transition-transform shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                                    <div className={`w-1.5 h-1.5 rounded-full ${exp.borderColor.replace('border-', 'bg-')}`}></div>
                                </div>
                                <div className="mb-1 flex flex-wrap justify-between items-center gap-2 text-xs font-mono text-gray-500">
                                    <span>{exp.period}</span>
                                    <span className="px-2 py-0.5 rounded-full bg-gray-800 border border-gray-700 text-gray-400 whitespace-nowrap">{exp.company}</span>
                                </div>
                                <h5 className="font-bold text-gray-200 group-hover/exp:text-white transition-colors">{exp.role}</h5>
                                <p className="text-xs text-gray-500 mt-2 line-clamp-2 md:line-clamp-none">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 5. Philosophy & Values Card (Horizontal Wide Card) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="col-span-1 md:col-span-3 lg:col-span-3 bg-gradient-to-br from-blue-900/30 to-indigo-900/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 md:p-8 hover:border-blue-500/40 transition-all relative overflow-hidden group/philosophy h-full min-h-[250px] flex flex-col justify-end"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover/philosophy:opacity-10 transition-opacity">
                        <Sparkles className="w-24 h-24" />
                    </div>
                    <blockquote className="relative z-10 text-lg md:text-xl font-light leading-relaxed text-gray-100">
                        "Building with AI is more than just API calls — it’s about <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 font-bold">solving real-world friction.</span>"
                    </blockquote>
                    <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-blue-400 relative z-10">
                        <div className="w-8 h-[1px] bg-blue-500"></div>
                        My Core Philosophy
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
