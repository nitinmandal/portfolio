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
        <div className="text-white py-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Get In Touch
                </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        I'm currently looking for internships and opportunities to apply my skills in real-world projects.
                        Whether you have a question, a project idea, or just want to network, feel free to drop a message!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="p-3 bg-gray-800/50 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                                <Mail className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Email</p>
                                <a href="mailto:nitinmandal172006@gmail.com" aria-label="Email Nitin" className="text-white font-medium hover:text-purple-400 transition-colors">
                                    nitinmandal172006@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="p-3 bg-gray-800/50 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                                <Github className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Github</p>
                                <a href="https://github.com/nitinmandal" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub Profile" className="text-white font-medium hover:text-blue-400 transition-colors">
                                    github.com/nitinmandal
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="p-3 bg-gray-800/50 rounded-lg group-hover:bg-blue-700/20 transition-colors">
                                <Linkedin className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">LinkedIn</p>
                                <a href="https://www.linkedin.com/in/nitin-kumar-mandal" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn Profile" className="text-white font-medium hover:text-blue-500 transition-colors">
                                    linkedin.com/in/nitin-kumar-mandal
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/40 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm shadow-xl"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full px-4 py-3 bg-gray-950 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors text-white placeholder-gray-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your.email@example.com"
                                className="w-full px-4 py-3 bg-gray-950 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors text-white placeholder-gray-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message here..."
                                rows="4"
                                className="w-full px-4 py-3 bg-gray-950 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors text-white placeholder-gray-500 resize-none"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold transition-all flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]'}`}
                        >
                            {isSubmitting ? (
                                <>
                                    Sending... <Loader2 className="w-4 h-4 animate-spin" />
                                </>
                            ) : (
                                <>
                                    Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>

                        {/* Success/Error Message */}
                        {result === 'success' && (
                            <p className="text-green-400 text-center text-sm font-medium mt-4">
                                Message sent successfully! I'll get back to you soon.
                            </p>
                        )}
                        {result === 'error' && (
                            <p className="text-red-400 text-center text-sm font-medium mt-4">
                                Something went wrong. Please try emailing me directly.
                            </p>
                        )}
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
