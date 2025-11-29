import React from 'react';

const GradientBackground: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#030014]">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a0a1a] via-[#1a1a2e] to-[#2d1b4e] opacity-80" />

            {/* Radial Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px]" />

            {/* Grid Overlay (Optional for futuristic feel) */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
    );
};

export default GradientBackground;
