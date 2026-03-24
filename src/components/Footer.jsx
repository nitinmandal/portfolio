import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-transparent border-t border-white/5 text-gray-500 py-16">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Brand / Name */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-black text-white mb-2 tracking-tight font-display">Nitin Kumar Mandal</h3>
                    <p className="text-xs font-light max-w-xs">
                        Building intelligent, full-stack ecosystems with specialized AI functionality.
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-5">
                    {[
                        { icon: <Github />, href: 'https://github.com/nitinmandal' },
                        { icon: <Linkedin />, href: 'https://www.linkedin.com/in/nitin-kumar-mandal' },
                        { icon: <Mail />, href: 'mailto:nitinmandal172006@gmail.com' }
                    ].map((item, idx) => (
                        <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/5 glass glass-hover text-gray-500 hover:text-white transition-all">
                            {React.cloneElement(item.icon, { className: 'w-4 h-4' })}
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <div className="text-center md:text-right">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600 mb-1 font-display">Portfolio v2.0</p>
                    <p className="text-xs italic">© {new Date().getFullYear()} Nitin Kumar Mandal</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
