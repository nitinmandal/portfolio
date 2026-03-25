import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle, Code, Brain, Users, Rocket } from 'lucide-react';

const WhyHireMe = () => {
    const points = [
        {
            icon: <Rocket className="w-5 h-5 text-blue-400" />,
            title: "Real-World Projects",
            description: "I build production-style applications that solve actual problems rather than simple tutorial clones."
        },
        {
            icon: <Code className="w-5 h-5 text-purple-400" />,
            title: "Full-Stack Foundation",
            description: "Strong command over React, Node.js, and API integrations for building end-to-end solutions."
        },
        {
            icon: <Brain className="w-5 h-5 text-green-400" />,
            title: "AI Integration",
            description: "Experienced in integrating LLM APIs, Prompt Engineering, and building real-world AI use cases into applications."
        },
        {
            icon: <Users className="w-5 h-5 text-red-400" />,
            title: "Proven Teamwork",
            description: "Recognized as Top 20 / 500+ teams in national hackathons, demonstrating strong collaboration skills."
        },
        {
            icon: <Zap className="w-5 h-5 text-yellow-400" />,
            title: "Fast Learner",
            description: "Rapidly adapt to new technologies with a strong focus on problem-solving and clean code architecture."
        }
    ];

    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-6xl font-black mb-6">
                        Why <span className="text-gradient">Hire Me?</span>
                    </h2>
                    <div className="w-16 md:w-20 h-1 md:h-1.5 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[2.5rem] bg-[#0a0a0b] border border-gray-800/60 hover:border-blue-500/30 transition-all group"
                        >
                            <div className="p-4 rounded-2xl bg-white/5 w-fit mb-6 group-hover:bg-blue-500/10 transition-colors">
                                {point.icon}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                                {point.title}
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                {point.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0,transparent_70%)] -z-10" />
        </section>
    );
};

export default WhyHireMe;