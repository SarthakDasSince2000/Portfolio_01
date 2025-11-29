import { motion } from 'framer-motion';
import { Server, Layout } from 'lucide-react';
import GradientBackground from '../components/backgrounds/GradientBackground';
import GlassCard from '../components/ui/GlassCard';

const About = () => {
    return (
        <div className="relative min-h-screen pt-24 pb-12 px-6">
            <GradientBackground />

            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg"
                    >
                        Crafting digital experiences with code and creativity.
                    </motion.p>
                </div>

                <GlassCard className="relative z-10">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Profile Image Placeholder or Avatar */}
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-1 shrink-0">
                            <div className="w-full h-full rounded-full bg-[#0a0a1a] flex items-center justify-center overflow-hidden">
                                <span className="text-4xl">👨‍💻</span>
                            </div>
                        </div>

                        <div className="space-y-4 text-center md:text-left">
                            <h3 className="text-2xl font-semibold text-white">Sarthak Das</h3>
                            <p className="text-purple-400 font-medium">Frontend Developer • Full Stack .NET Developer</p>
                            <p className="text-gray-300 leading-relaxed">
                                I am an MCA graduate and a passionate Full Stack Developer with a strong foundation in modern web technologies.
                                Currently interning as a .NET Developer at Naresh IT, I specialize in building scalable web applications using
                                React, TypeScript, and the .NET ecosystem. I love creating intuitive, high-performance user interfaces that
                                blend aesthetics with functionality.
                            </p>

                            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-4">
                                {['MCA Graduate', 'Full Stack Dev', 'UI/UX Enthusiast', '.NET Intern'].map((tag) => (
                                    <span key={tag} className="px-3 py-1 text-sm bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </GlassCard>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <GlassCard hoverEffect>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                <Layout size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold mb-2">Frontend Magic</h4>
                                <p className="text-gray-400 text-sm">
                                    Building responsive, interactive, and accessible UIs using React, Tailwind CSS, and Framer Motion.
                                </p>
                            </div>
                        </div>
                    </GlassCard>

                    <GlassCard hoverEffect>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                <Server size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold mb-2">Backend Power</h4>
                                <p className="text-gray-400 text-sm">
                                    Developing robust APIs and server-side logic with ASP.NET Core, C#, and SQL Server.
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};

export default About;
