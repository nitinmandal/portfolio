import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                {/* Brand / Name */}
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">Nitin Kumar Mandal</h3>
                    <p className="text-sm">
                        Combining logic & creativity to build intelligent web solutions.
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-6">
                    <a href="https://github.com/nitinmandal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Github"><Github className="w-5 h-5" /></a>
                    <a href="https://www.linkedin.com/in/nitin-kumar-mandal" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
                    <a href="mailto:nitinmandal172006@gmail.com" className="hover:text-red-400 transition-colors" aria-label="Email"><Mail className="w-5 h-5" /></a>
                </div>

                {/* Copyright */}
                <div className="text-center md:text-right text-sm">
                    <p>© {new Date().getFullYear()} Nitin Kumar Mandal. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
