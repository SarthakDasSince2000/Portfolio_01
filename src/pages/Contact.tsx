import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import GradientBackground from '../components/backgrounds/GradientBackground';
import GlassCard from '../components/ui/GlassCard';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Message sent! (This is a demo)');
    };

    return (
        <div className="relative min-h-screen pt-24 pb-12 px-6">
            <GradientBackground />

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-gray-400">Have a project in mind or just want to say hi?</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <GlassCard>
                            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <a href="mailto:sarthakdas0508@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group">
                                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-purple-500/20 transition-colors">
                                        <Mail size={20} />
                                    </div>
                                    <span>sarthakdas0508@gmail.com</span>
                                </a>

                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group">
                                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-purple-500/20 transition-colors">
                                        <Github size={20} />
                                    </div>
                                    <span>github.com/sarthakdas</span>
                                </a>

                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group">
                                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-purple-500/20 transition-colors">
                                        <Linkedin size={20} />
                                    </div>
                                    <span>linkedin.com/in/sarthakdas</span>
                                </a>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <GlassCard>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 resize-none"
                                        placeholder="Your message..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                                >
                                    <Send size={18} /> Send Message
                                </button>
                            </form>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
