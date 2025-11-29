
import { motion } from 'framer-motion';
import GradientBackground from '../components/backgrounds/GradientBackground';
import GlassCard from '../components/ui/GlassCard';

const skills = [
    { name: 'HTML5', category: 'Frontend', level: 95 },
    { name: 'CSS3', category: 'Frontend', level: 90 },
    { name: 'JavaScript', category: 'Frontend', level: 85 },
    { name: 'React', category: 'Frontend', level: 85 },
    { name: 'TypeScript', category: 'Frontend', level: 80 },
    { name: 'Tailwind CSS', category: 'Frontend', level: 90 },
    { name: 'C#', category: 'Backend', level: 75 },
    { name: '.NET Core', category: 'Backend', level: 75 },
    { name: 'ASP.NET', category: 'Backend', level: 70 },
    { name: 'SQL Server', category: 'Database', level: 75 },
    { name: 'MySQL', category: 'Database', level: 70 },
    { name: 'Git / GitHub', category: 'Tools', level: 85 },
];

const Skills = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

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
                        Technical Skills
                    </h2>
                    <p className="text-gray-400">My technical toolkit and proficiency levels.</p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {skills.map((skill) => (
                        <motion.div key={skill.name} variants={item}>
                            <GlassCard hoverEffect className="h-full flex flex-col justify-center items-center text-center group">
                                <div className="w-16 h-16 mb-4 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                    {/* Placeholder for skill icon - using first letter for now */}
                                    <span className="text-2xl font-bold text-purple-400 group-hover:text-cyan-400 transition-colors">
                                        {skill.name[0]}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                                <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5">
                                    {skill.category}
                                </span>

                                {/* Progress Bar */}
                                <div className="w-full h-1 bg-gray-700 rounded-full mt-4 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
                                    />
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
