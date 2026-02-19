import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Tailwind CSS', level: 75 },
    { name: 'Vercel Deployment', level: 80 },
    { name: 'Git & GitHub', level: 75 },
    { name: 'Supabase / Firebase', level: 70 },
];

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

const Skills = () => {
    return (
        <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
                    Skills & Experience
                </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
                {/* Left Column: Technical Skills */}
                <div>
                    <h3 className="text-2xl font-semibold mb-8 border-b border-gray-700 pb-2 inline-block">
                        Technical Proficiency
                    </h3>
                    <div className="space-y-6">
                        {skills.map((skill, index) => (
                            <div key={skill.name} className="relative">
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-gray-200">{skill.name}</span>
                                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                        <h4 className="text-sm font-bold text-gray-300 mb-2">Other Skills</h4>
                        <div className="flex flex-wrap gap-2">
                            {['Node.js (Basic)', 'AI/NLP Integration', 'System Architecture', 'Team Leadership'].map(tag => (
                                <span key={tag} className="px-3 py-1 text-xs rounded-full bg-gray-700 text-gray-300 border border-gray-600">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Experience */}
                <div>
                    <h3 className="text-2xl font-semibold mb-10 border-b border-gray-700 pb-2 inline-block">
                        Leadership & Experience
                    </h3>
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative pl-8 border-l-2 border-gray-800 hover:border-blue-500 transition-colors group"
                            >
                                {/* Dot on the timeline */}
                                <span className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-950 border-2 ${exp.borderColor} ${exp.hoverBg} transition-colors shadow-[0_0_10px_rgba(0,0,0,0.5)]`}></span>

                                <h4 className="text-xl font-bold text-gray-100 group-hover:text-blue-300 transition-colors">
                                    {exp.role}
                                </h4>
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-sm text-gray-300 font-medium">
                                        {exp.company}
                                    </p>
                                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {exp.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
