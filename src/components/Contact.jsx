import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState(null); // null, 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResult(null);

        // Web3Forms API Endpoint
        const accessKey = "933a3fd1-3909-4230-afa7-403a7ca4dc85";

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `Portfolio Contact from ${formData.name}`,
                }),
            });

            const json = await response.json();

            if (json.success) {
                setResult('success');
                setFormData({ name: '', email: '', message: '' }); // Clear form
            } else {
                setResult('error');
                console.error("Form Error:", json);
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setResult('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="text-white py-12 md:py-20">
            <div className="text-center mb-10 md:mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                    Open to Frontend / Full-Stack / AI-focused internship roles — available to start immediately
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 italic">
                    Get In <span className="text-gradient">Touch</span>
                </h2>
                <div className="w-12 md:w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 max-w-6xl mx-auto items-center">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6">Let's Connect</h3>
                    <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg font-light">
                        I'm currently looking for <span className="text-white font-medium">internships</span> and opportunities to apply my skills in real-world projects.
                        Whether you have a question, a project idea, or just want to network, feel free to drop a message!
                    </p>

                    <div className="space-y-3 md:space-y-4">
                        {[
                            { icon: <Mail />, label: 'Email', value: 'nitinmandal172006@gmail.com', href: 'mailto:nitinmandal172006@gmail.com' },
                            { icon: <Github />, label: 'Github', value: 'github.com/nitinmandal', href: 'https://github.com/nitinmandal' },
                            { icon: <Linkedin />, label: 'LinkedIn', value: 'in/nitin-kumar-mandal', href: 'https://www.linkedin.com/in/nitin-kumar-mandal' }
                        ].map((item, idx) => (
                            <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-5 p-3 md:p-4 rounded-2xl glass glass-hover border-white/5 transition-all group">
                                <div className="p-2.5 md:p-3 rounded-xl bg-white/5 text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all">
                                    {React.cloneElement(item.icon, { className: 'w-4 h-4 md:w-5 md:h-5' })}
                                </div>
                                <div>
                                    <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500 font-bold">{item.label}</p>
                                    <p className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{item.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="glass p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 shadow-2xl relative"
                >
                    <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6 relative z-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full px-4 md:px-5 py-3 md:py-4 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 focus:border-blue-500/50 outline-none transition-all text-sm text-white placeholder-gray-600 focus:bg-white/[0.08]"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="email@example.com"
                                    className="w-full px-4 md:px-5 py-3 md:py-4 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 focus:border-blue-500/50 outline-none transition-all text-sm text-white placeholder-gray-600 focus:bg-white/[0.08]"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can I help you?"
                                rows="4"
                                className="w-full px-4 md:px-5 py-3 md:py-4 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 focus:border-blue-500/50 outline-none transition-all text-sm text-white placeholder-gray-600 focus:bg-white/[0.08] resize-none"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-3.5 md:py-4 rounded-xl md:rounded-2xl bg-blue-600 text-white font-black text-xs md:text-sm uppercase tracking-widest transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] flex items-center justify-center gap-3 active:scale-95 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-500 hover:shadow-blue-500/40'}`}
                        >
                            {isSubmitting ? (
                                <>Sending <Loader2 className="w-4 h-4 animate-spin" /></>
                            ) : (
                                <>Send Message <Send className="w-4 h-4" /></>
                            )}
                        </button>

                        {result === 'success' && (
                            <p className="text-green-400 text-center text-[10px] md:text-xs font-bold uppercase tracking-widest mt-4 animate-bounce">
                                Message Received!
                            </p>
                        )}
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
