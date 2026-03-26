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

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

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
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="md:hidden p-2 rounded-full hover:bg-white/5 text-gray-400 active:scale-95 transition-all"
                    aria-label="Toggle Menu"
                >
                    <Menu className="w-5 h-5" />
                </button>

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

                <div className="h-4 w-px bg-white/10"></div>

                <div className="flex items-center gap-2 md:gap-4">
                    <a
                        href="/Nitin Resume1.docx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] md:text-xs font-semibold hover:bg-blue-500 hover:text-white transition-all shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                    >
                        Resume <ExternalLink className="w-3 h-3" />
                    </a>
                </div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:hidden pointer-events-auto bg-black/60 backdrop-blur-md"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div 
                            className="w-[90%] max-w-sm glass rounded-[2.5rem] p-8 flex flex-col gap-4 relative shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-8 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5 pointer-events-none" />
                            </button>

                            <div className="flex flex-col gap-2 mt-4">
                                {navLinks.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsOpen(false);
                                            setTimeout(() => {
                                                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                                            }, 300);
                                        }}
                                        className="px-6 py-4 text-gray-300 hover:text-white text-2xl font-black rounded-2xl hover:bg-white/5 transition-all text-left"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                            <div className="h-px w-full bg-white/5 my-2"></div>

                            <a
                                href="/Nitin Resume1.docx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full py-5 rounded-3xl bg-blue-600 text-white font-bold text-lg shadow-xl shadow-blue-600/20 active:scale-95 transition-all"
                            >
                                Resume <ExternalLink className="w-5 h-5" />
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
