import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

const GalaxyBackground: React.FC = () => {
    const { theme } = useTheme();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];

        // Mouse state
        let mouseX = 0;
        let mouseY = 0;
        let targetSpeedX = 0;
        let targetSpeedY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX - window.innerWidth / 2;
            mouseY = e.clientY - window.innerHeight / 2;
        };

        const initStars = () => {
            stars = [];
            for (let i = 0; i < 800; i++) {
                stars.push(new Star());
            }
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        class Star {
            x: number;
            y: number;
            z: number;
            size: number;
            color: string;

            constructor() {
                this.x = (Math.random() - 0.5) * canvas!.width * 2;
                this.y = (Math.random() - 0.5) * canvas!.height * 2;
                this.z = Math.random() * canvas!.width;
                this.size = Math.random() * 2;
                // Cosmic colors based on theme
                const colors = theme === 'dark'
                    ? ['#01252192', '#a78bfa', '#60a5fa', '#c084fc'] // Dark mode: White, Blue, Purple
                    : ['#000000', '#4b5563', '#6b7280', '#6d6706ff']; // Light mode: Black, Gray
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update(speedX: number, speedY: number) {
                // Move stars based on mouse position (parallax effect)
                this.x -= speedX * (this.z / canvas!.width);
                this.y -= speedY * (this.z / canvas!.width);

                // Standard forward movement
                this.z -= 2;

                // Reset if out of bounds or too close
                if (this.z <= 0) {
                    this.z = canvas!.width;
                    this.x = (Math.random() - 0.5) * canvas!.width * 2;
                    this.y = (Math.random() - 0.5) * canvas!.height * 2;
                }
            }

            draw() {
                const x = (this.x / this.z) * 100 + canvas!.width / 2;
                const y = (this.y / this.z) * 100 + canvas!.height / 2;
                const radius = (1 - this.z / canvas!.width) * this.size * 2;

                if (radius > 0) {
                    ctx!.beginPath();
                    ctx!.arc(x, y, radius, 0, Math.PI * 2);
                    ctx!.fillStyle = this.color;
                    ctx!.fill();
                }
            }
        }

        const animate = () => {
            // Background gradient based on theme
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            if (theme === 'dark') {
                gradient.addColorStop(0, '#020617'); // Dark navy
                gradient.addColorStop(1, '#1e1b4b'); // Deep purple
            } else {
                gradient.addColorStop(0, '#2d1c1cff'); // White
                gradient.addColorStop(1, '#97b3ecff'); // Light gray
            }
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            targetSpeedX = (mouseX / window.innerWidth) * 50;
            targetSpeedY = (mouseY / window.innerHeight) * 50;

            stars.forEach(star => {
                star.update(targetSpeedX, targetSpeedY);
                star.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10"
        />
    );
};

export default GalaxyBackground;
