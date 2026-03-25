import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Brain, Activity, Calculator, Stethoscope } from 'lucide-react';

const projects = [
    {
        title: 'MedExplain AI – AI Medical Report Analyzer',
        description: 'Built a full-stack AI-powered application that analyzes medical lab reports using Google Gemini 1.5 Flash. Implemented multi-modal input processing (text + image), structured JSON extraction, and interactive health data visualization for better user understanding. Designed a scalable backend with Node.js and MongoDB to store and track longitudinal health data.',
        impact: [
            'Reduced manual report interpretation effort',
            'Improved data readability through structured output',
            'Demonstrates real-world AI + healthcare integration'
        ],
        keyFeatures: [
            'Multi-modal report processing (text + image)',
            'Structured JSON data extraction',
            'Health trend visualization dashboard'
        ],
        tags: ['React', 'Node.js', 'MongoDB', 'Gemini API', 'Recharts'],
        image: '/medexplain.png',
        liveLink: 'https://medexplain-ai.netlify.app/',
        githubLink: 'https://github.com/nitinmandal', 
        icon: <Stethoscope className="w-5 h-5 text-red-400" />,
        caseStudy: {
            problem: "Users struggle to understand complex medical reports.",
            solution: "Built an AI-powered analyzer that extracts and simplifies medical data.",
            challenges: ["Handling unstructured medical text", "Designing accurate prompts", "Structuring JSON output"],
            outcome: "Functional AI system, Clean UI for health insights, Hackathon-level innovation"
        }
    },
    {
        title: 'MindMate – AI Mental Wellness Platform',
        description: 'Developed a full-stack mental wellness platform providing AI-powered emotional support, community interaction, and therapist booking. Implemented an NLP-based chatbot for real-time emotional assistance and built a secure backend to manage user data and interactions. Designed features for mood tracking, peer support, and seamless appointment scheduling with mental health professionals.',
        impact: [
            'Automated initial emotional support through NLP-based sentiment analysis',
            'Streamlined therapist discovery and booking process with real-time availability',
            'Implemented secure, privacy-first data handling for sensitive user journals and interactions'
        ],
        keyFeatures: [
            'AI chatbot for emotional support',
            'Community interaction system',
            'Therapist booking system'
        ],
        tags: ['React', 'Node.js', 'Supabase', 'Hugging Face NLP', 'Tailwind CSS'],
        image: '/mindmate.png',
        liveLink: 'https://mindmate-wellness.vercel.app/',
        githubLink: 'https://github.com/nitinmandal/Mindmate',
        icon: <Brain className="w-5 h-5 text-purple-400" />,
        caseStudy: {
            problem: "Traditional mental health resources are often inaccessible or delayed for users in immediate need of emotional support.",
            solution: "Built a 24/7 AI-integrated platform providing instant NLP responses, community peer support, and direct therapist booking.",
            challenges: ["Ensuring high-accuracy sentiment detection", "Managing secure user-therapist data flows", "Optimizing real-time community interactions"],
            outcome: "A functional, secure wellness MVP featuring a responsive AI chatbot, a moderated community system, and a seamless appointment workflow."
        }
    },
    {
        title: 'BeachGuide – AI Smart Safety',
        description: 'Developed an AI-driven system to recommend safe beach locations based on environmental and safety parameters. Designed a Beach Suitability Index using multiple factors such as weather conditions and hazard indicators to generate real-time recommendations. Implemented decision logic for risk analysis and alert generation. Built as part of a hackathon project where I led a team of 4.',
        impact: [
            'Awarded Top 20 / 500+ teams in a national hackathon',
            'Real-time data fetching from environmental APIs',
            'Efficient decision logic for safe beach selection'
        ],
        tags: ['JavaScript', 'ML Concepts', 'System Architecture', 'Hackathon Top 20'],
        image: '/beachguide.png',
        liveLink: '#',
        githubLink: 'https://github.com/nitinmandal',
        icon: <Activity className="w-5 h-5 text-blue-400" />
    },
    {
        title: 'Smart Calorie Calculator',
        description: 'A responsive health tool that calculates daily calorie requirements based on user activity levels and biometrics. Features complex DOM manipulation logic.',
        impact: [
            'Precision calorie calculations based on global health standards',
            'Fully responsive UI with consistent performance',
            'Clean modular JavaScript architecture'
        ],
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
                        <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-1 relative">
                            {/* Floating Icon */}
                            <div className="absolute -top-6 md:-top-7 right-6 md:right-8 bg-[#121214] p-3 md:p-3.5 rounded-2xl border border-gray-800 shadow-xl z-20">
                                {project.icon}
                            </div>
                            
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 tracking-tight pr-12">
                                {project.title}
                            </h3>
                            
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                {project.description}
                            </p>

                            {/* Impact Layer */}
                            <div className="mb-6">
                                <h4 className="text-xs uppercase tracking-widest text-blue-400 font-black mb-3">Impact</h4>
                                <ul className="space-y-2">
                                    {project.impact.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                            <span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Key Features Section */}
                            {project.keyFeatures && (
                                <div className="mb-6">
                                    <h4 className="text-xs uppercase tracking-widest text-purple-400 font-black mb-3">Key Features</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.keyFeatures.map((feature, i) => (
                                            <span key={i} className="text-xs text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-md">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-blue-500/5 border border-blue-500/10 text-[10px] md:text-xs uppercase font-semibold tracking-wider text-blue-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-2 sm:gap-4 mt-auto">
                                <a 
                                    href={project.liveLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 text-white font-semibold text-xs sm:text-sm bg-blue-600/90 py-2.5 sm:py-3 rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"
                                >
                                    Launch <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                </a>
                                <a 
                                    href={project.githubLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 text-gray-300 font-semibold text-xs sm:text-sm bg-white/5 py-2.5 sm:py-3 rounded-xl hover:bg-white/10 hover:text-white transition-colors border border-white/5"
                                >
                                    Code <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                </a>
                            </div>

                            {/* Case Study Section */}
                            {project.caseStudy && (
                                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800/60">
                                    <h4 className="text-sm font-black text-white mb-4 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        Case Study
                                    </h4>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-[10px] uppercase tracking-tighter text-blue-400 font-bold mb-1">Problem</p>
                                            <p className="text-xs text-gray-400 leading-relaxed font-medium">{project.caseStudy.problem}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-tighter text-blue-400 font-bold mb-1">Solution</p>
                                            <p className="text-xs text-gray-400 leading-relaxed font-medium">{project.caseStudy.solution}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-tighter text-blue-400 font-bold mb-2">Key Challenges</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.caseStudy.challenges.map((challenge, i) => (
                                                    <span key={i} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-gray-400">
                                                        {challenge}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 p-3 rounded-xl bg-blue-500/5 border border-blue-500/10">
                                        <p className="text-[10px] uppercase tracking-tighter text-blue-400 font-bold mb-1">Outcome</p>
                                        <p className="text-xs text-blue-200/80 font-semibold leading-relaxed">
                                            {project.caseStudy.outcome}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
