import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-4 md:top-6 left-0 w-full z-50 px-4 md:px-6 pointer-events-none">
            <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`max-w-fit mx-auto glass rounded-full px-4 md:px-8 py-2.5 md:py-3 flex items-center gap-4 md:gap-10 pointer-events-auto transition-all duration-500 ${scrolled ? 'scale-95 py-2 md:py-2.5 opacity-90 hover:scale-100 hover:opacity-100' : ''}`}
            >
                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-wide relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-500/50 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                <div className="h-4 w-px bg-white/10 hidden md:block"></div>

                <div className="flex items-center gap-4">
                    <a
                        href="/Nitin Resume1.docx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold hover:bg-blue-500 hover:text-white transition-all shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                    >
                        Resume <ExternalLink className="w-3 h-3" />
                    </a>

                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-400">
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute top-20 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-sm glass rounded-2xl p-6 md:hidden pointer-events-auto"
                    >
                        <div className="space-y-3 flex flex-col">
                            {navLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="px-6 py-4 text-gray-300 hover:text-white text-lg font-medium glass-hover rounded-xl text-center"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
