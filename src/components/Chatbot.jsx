import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-24 right-6 w-[400px] h-[600px] max-w-[calc(100vw-48px)] max-h-[calc(100vh-120px)] bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
                    >
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex justify-between items-center text-white">
                            <h3 className="font-semibold flex items-center gap-2">
                                <MessageCircle className="w-5 h-5" />
                                AI Assistant
                            </h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-white/20 p-1 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <iframe
                            src="/nitin-portfolio-chatbot.html"
                            className="w-full flex-1 border-none bg-[#080d1a]"
                            title="Chatbot"
                        ></iframe>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center text-white z-50 hover:scale-110 active:scale-95 group"
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
                )}
            </button>
        </>
    );
};

export default Chatbot;
