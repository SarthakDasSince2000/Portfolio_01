import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn'; // We'll create this utility

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Skills', path: '/skills' },
        { name: 'Projects', path: '/projects' },
        { name: 'Experience', path: '/experience' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent',
                scrolled
                    ? theme === 'dark'
                        ? 'bg-[#030014]/70 backdrop-blur-md border-[#2d1b4e]/50'
                        : 'bg-white/70 backdrop-blur-md border-gray-200'
                    : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className={cn("text-2xl font-bold transition-colors", theme === 'dark' ? "text-white" : "text-black")}>
                    Sarthak<span className="text-purple-500">.dev</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={cn(
                                'text-sm font-medium transition-colors duration-300 hover:text-purple-400',
                                location.pathname === link.path
                                    ? 'text-purple-400'
                                    : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Social Icons (Desktop) */}
                <div className="hidden md:flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className={cn(
                    "md:hidden absolute top-full left-0 w-full backdrop-blur-xl border-b py-4 px-6 flex flex-col space-y-4",
                    theme === 'dark' ? "bg-[#030014]/95 border-[#2d1b4e]/50" : "bg-white/95 border-gray-200"
                )}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-gray-300 hover:text-purple-400 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex space-x-4 pt-4 border-t border-gray-800">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
