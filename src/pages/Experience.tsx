
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import GradientBackground from '../components/backgrounds/GradientBackground';
import GlassCard from '../components/ui/GlassCard';

const experiences = [
    {
        id: 1,
        role: '.NET Developer Intern',
        company: 'Naresh IT',
        period: '2025 - Present',
        description: [
            'Developing scalable web applications using ASP.NET Core and React.',
            'Optimizing SQL queries for better database performance.',
            'Collaborating with senior developers to design RESTful APIs.',
            'Debugging and resolving critical UI/UX issues.'
        ]
    }
];

const education = [
    {
        id: 1,
        degree: 'Master of Computer Applications (MCA)',
        institution: 'Gandhi Institute For Techincal Advancement',
        period: '2023 - 2025',
        description: 'Specialized in Full Stack Development and Cloud Computing.'
    },
    {
        id: 2,
        degree: 'Bachelor IN Technology(B.Tech)',
        institution: 'Gandhi Institute for Engineering and Technology',
        period: '2018 - 2022',
        description: 'Graduated with distinction. Focus on Software Engineering.'
    }
];

const Experience = () => {
    return (
        <div className="relative min-h-screen pt-24 pb-12 px-6">
            <GradientBackground />

            <div className="max-w-4xl mx-auto space-y-16">

                {/* Experience Section */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                            <Briefcase size={28} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Work Experience</h2>
                    </motion.div>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-8 border-l-2 border-purple-500/30"
                            >
                                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

                                <GlassCard className="p-6">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                            <p className="text-purple-400 font-medium">{exp.company}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 text-sm mt-2 md:mt-0">
                                            <Calendar size={14} />
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>

                                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                                        {exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400">
                            <GraduationCap size={28} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
                    </motion.div>

                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-8 border-l-2 border-cyan-500/30"
                            >
                                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

                                <GlassCard className="p-6">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                                            <p className="text-cyan-400 font-medium">{edu.institution}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 text-sm mt-2 md:mt-0">
                                            <Calendar size={14} />
                                            <span>{edu.period}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-300">{edu.description}</p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Experience;
