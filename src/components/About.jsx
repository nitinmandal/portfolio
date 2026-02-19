import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Globe, Laptop } from 'lucide-react';

const About = () => {
    return (
        <div className="text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Col: Image/Visuals */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl group">
                        <img
                            src="/nitin-profile.jpeg"
                            alt="Nitin Kumar Mandal"
                            className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    </div>

                    {/* Floating Stats Card - Bottom Right */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="absolute -bottom-6 -right-6 z-20 bg-gray-900/90 backdrop-blur-md p-6 rounded-xl border border-gray-700 shadow-xl hidden md:block"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <p className="text-sm text-gray-400 font-medium">Status</p>
                        </div>
                        <p className="text-2xl font-bold text-white">Available for</p>
                        <p className="text-sm text-green-400 mt-1">Internships & Projects</p>
                    </motion.div>

                    {/* Decorative element background */}
                    <div className="absolute -top-10 -left-10 w-full h-full border-2 border-gray-800 rounded-2xl -z-10" />
                </motion.div>

                {/* Right Col: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-6">
                        <span className="border-b-4 border-blue-500 pb-2">About</span> Me
                    </h2>

                    <h3 className="text-2xl font-light text-gray-300 mb-6">
                        Exploring the intersection of <span className="text-blue-400 font-semibold">Web Dev & AI</span>.
                    </h3>

                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        I am a Computer Science undergraduate at Indraprastha Engineering College with a growing passion for building intelligent web applications. My journey started with the fundamentals of HTML, CSS, and JavaScript, and I am now actively learning how to integrate AI to make web experiences smarter and more intuitive.
                    </p>

                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        I believe in learning by doing. Whether it's collaborating on hackathon projects or building personal tools, I am constantly exploring new technologies to improve my craft. I am eager to join a team where I can contribute, learn from experienced developers, and grow as a Full Stack engineer.
                    </p>

                    {/* Tech Highlights */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                                <Code className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Frontend</h4>
                                <p className="text-xs text-gray-500">React, Tailwind, HTML/CSS</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                                <Brain className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">AI Exploration</h4>
                                <p className="text-xs text-gray-500">Hugging Face, AI APIs</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-green-500/10 text-green-400">
                                <Globe className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Deployment</h4>
                                <p className="text-xs text-gray-500">Vercel, GitHub Pages</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400">
                                <Laptop className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Soft Skills</h4>
                                <p className="text-xs text-gray-500">Teamwork, Adaptability</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
