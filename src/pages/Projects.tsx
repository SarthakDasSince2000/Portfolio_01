
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import GradientBackground from '../components/backgrounds/GradientBackground';
import GlassCard from '../components/ui/GlassCard';

const projects = [
    {
        title: 'Custom Shoe Designer',
        description: 'A 3D interactive shoe customization platform built with React and Three.js (concept). Users can customize colors and materials.',
        tech: ['React', 'Node.js', 'Three.js', 'Tailwind'],
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop', // Placeholder
        liveLink: '#',
        githubLink: '#',
    },
    {
        title: 'LMS Admin Panel',
        description: 'Comprehensive Learning Management System admin dashboard for managing courses, students, and analytics.',
        tech: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', // Placeholder
        liveLink: '#',
        githubLink: '#',
    },
    {
        title: 'Portfolio Website',
        description: 'This premium portfolio website featuring galaxy animations, glassmorphism UI, and smooth page transitions.',
        tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop', // Placeholder
        liveLink: '#',
        githubLink: '#',
    },
];

const Projects = () => {
    return (
        <div className="relative min-h-screen pt-24 pb-12 px-6">
            <GradientBackground />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400">A showcase of my recent work and side projects.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard className="h-full flex flex-col p-0 overflow-hidden group">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] to-transparent opacity-60" />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-xs px-2 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 mt-auto">
                                        <a
                                            href={project.liveLink}
                                            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-medium hover:opacity-90 transition-opacity"
                                        >
                                            <ExternalLink size={16} /> Live Demo
                                        </a>
                                        <a
                                            href={project.githubLink}
                                            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                                        >
                                            <Github size={16} /> GitHub
                                        </a>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
