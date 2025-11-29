import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface HyperTextProps {
    text: string;
    className?: string;
}

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const HyperText: React.FC<HyperTextProps> = ({ text, className }) => {
    const [displayText, setDisplayText] = useState(text.split('').map(() => ' '));
    const [iterations, setIterations] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayText((prev) =>
                prev.map((_char, i) => {
                    if (i < iterations) {
                        return text[i];
                    }
                    return alphabets[Math.floor(Math.random() * 26)];
                })
            );

            if (iterations >= text.length) {
                clearInterval(interval);
            }

            setIterations((prev) => prev + 1 / 3); // Slower reveal
        }, 30);

        return () => clearInterval(interval);
    }, [text, iterations]);

    return (
        <motion.h1
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {displayText.join('')}
        </motion.h1>
    );
};

export default HyperText;
