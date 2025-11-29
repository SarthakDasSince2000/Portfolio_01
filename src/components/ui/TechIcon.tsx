import React from 'react';
import { motion } from 'framer-motion';

interface TechIconProps {
    icon: React.ReactNode;
    delay?: number;
    x?: number;
    y?: number;
}

const TechIcon: React.FC<TechIconProps> = ({ icon, delay = 0, x = 0, y = 0 }) => {
    return (
        <motion.div
            className="absolute text-white/20 backdrop-blur-sm p-4 rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            initial={{ opacity: 0, x, y }}
            animate={{
                opacity: [0.2, 0.5, 0.2],
                y: [y, y - 20, y],
                rotate: [0, 10, -10, 0]
            }}
            transition={{
                duration: 5,
                delay: delay,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            {icon}
        </motion.div>
    );
};

export default TechIcon;
