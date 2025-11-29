

const Footer = () => {
    return (
        <footer className="w-full py-6 bg-[#030014] border-t border-[#2d1b4e]/50 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Sarthak Das. All rights reserved.</p>
            <p className="mt-1">Built with React, TypeScript & Tailwind CSS</p>
        </footer>
    );
};

export default Footer;
