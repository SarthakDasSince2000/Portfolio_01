import { motion } from 'framer-motion';
import { Download, ArrowRight, Code, Rocket } from 'lucide-react';
import GalaxyBackground from '../components/backgrounds/GalaxyBackground';
import HyperText from '../components/ui/HyperText';
import developerImg from '../assets/developer_3d_character.png';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../utils/cn';

const Home = () => {
    const { theme } = useTheme();

    return (
        <div className="relative w-full min-h-screen overflow-hidden flex items-center">
            <GalaxyBackground />

            {/* Radial Glow Effect */}
            <div className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] -z-10 pointer-events-none",
                theme === 'dark' ? "bg-#f7ddb2" : "bg-purple-400/10"
            )} />

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 pt-20">

                {/* Left Section: Text Content */}
                <div className="flex flex-col items-start text-left space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={cn(
                            "px-4 py-2 rounded-full border backdrop-blur-md",
                            theme === 'dark' ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
                        )}
                    >
                        <span className={cn("text-sm font-medium", theme === 'dark' ? "text-purple-300" : "text-purple-600")}>
                            Front-End & Full Stack .NET Developer
                        </span>
                    </motion.div>

                    <div className="space-y-2">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className={cn("text-5xl md:text-7xl font-bold tracking-tight", theme === 'dark' ? "text-white" : "text-black")}
                        >
                            Hi, I'm
                        </motion.h1>
                        <HyperText
                            text="Sarthak"
                            className={cn(
                                "text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r tracking-tighter",
                                theme === 'dark'
                                    ? "from-purple-400 via-fuchsia-400 to-pink-400 drop-shadow-[0_0_30px_rgba(192,132,252,0.4)]"
                                    : "from-violet-600 via-indigo-600 to-purple-600 drop-shadow-[0_0_30px_rgba(124,58,237,0.3)]"
                            )}
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className={cn("text-lg max-w-xl leading-relaxed", theme === 'dark' ? "text-gray-300" : "text-gray-600")}
                    >
                        I build modern, responsive web applications using <span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-black")}>React</span> and <span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-black")}>.NET</span>.
                        Focusing on seamless user experiences, robust backends, and pixel-perfect design.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <a
                            href="/contact"
                            className="group relative px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl transition-all shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.7)] flex items-center gap-2 font-semibold text-white overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Hire Me <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>

                        <a
                            href="/resume.pdf"
                            className={cn(
                                "px-8 py-4 bg-transparent border rounded-xl transition-all flex items-center gap-2 font-medium",
                                theme === 'dark'
                                    ? "border-white/20 hover:border-white/40 hover:bg-white/5 text-white"
                                    : "border-black/20 hover:border-black/40 hover:bg-black/5 text-black"
                            )}
                        >
                            <Download size={20} /> Download Resume
                        </a>
                    </motion.div>
                </div>

                {/* Right Section: 3D Character & Glass Cards */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative flex justify-center items-center"
                >
                    {/* Main Glass Card with 3D Tilt */}
                    <motion.div
                        whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={cn(
                            "relative w-full max-w-md aspect-square backdrop-blur-xl border rounded-3xl p-8 shadow-2xl flex items-center justify-center overflow-hidden",
                            theme === 'dark' ? "bg-white/5 border-white/10" : "bg-white/40 border-white/40"
                        )}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />

                        {/* 3D Character Image */}
                        <img
                            src={developerImg}
                            alt="Developer Character"
                            className="w-full h-full object-contain drop-shadow-2xl relative z-10"
                        />
                    </motion.div>

                    {/* Floating Badges */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className={cn(
                            "absolute -top-6 -right-6 md:right-10 p-4 backdrop-blur-md border rounded-2xl shadow-[0_0_20px_rgba(139,92,246,0.3)]",
                            theme === 'dark' ? "bg-[#1a1a2e]/80 border-purple-500/30" : "bg-white/80 border-purple-500/20"
                        )}
                    >
                        <Code size={32} className="text-cyan-400" />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className={cn(
                            "absolute -bottom-10 -left-6 md:left-10 p-4 backdrop-blur-md border rounded-2xl shadow-[0_0_20px_rgba(139,92,246,0.3)]",
                            theme === 'dark' ? "bg-[#1a1a2e]/80 border-purple-500/30" : "bg-white/80 border-purple-500/20"
                        )}
                    >
                        <Rocket size={32} className="text-purple-400" />
                    </motion.div>
                </motion.div>

            </div>
        </div>
    );
};

export default Home;
