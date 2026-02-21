import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center">
            <div className="flex items-center">
                <span className="text-2xl font-bold tracking-tight text-white">layerstop</span>
                <span className="text-[10px] ml-1 opacity-60">WORLD</span>
            </div>

            <div className="hidden md:flex items-center gap-4">
                <a href="#" className="px-6 py-2 rounded-full glass-card hover:bg-white/10 transition-all text-sm font-medium">home</a>
                <a href="#" className="px-6 py-2 rounded-full glass-card hover:bg-white/10 transition-all text-sm font-medium">about</a>
                <a href="#" className="px-6 py-2 rounded-full bg-[#cc5500] text-white transition-all text-sm font-medium">projects</a>
            </div>

            <button className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-semibold text-sm hover:scale-105 transition-transform">
                Get in touch
                <span className="text-[#cc5500]">→</span>
            </button>

            <button className="md:hidden glass-card p-2 rounded-full">
                <Menu size={24} />
            </button>
        </nav>
    );
};

export default Navbar;
