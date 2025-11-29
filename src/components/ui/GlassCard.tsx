import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className, hoverEffect = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
                'relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl',
                hoverEffect && 'transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-purple-500/30',
                className
            )}
        >
            {/* Neon Glow Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />

            {children}
        </motion.div>
    );
};

export default GlassCard;
