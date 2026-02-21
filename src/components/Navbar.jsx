import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Work', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Simple intersection observer alternative for active section
            const sections = navLinks.map(link => link.href.substring(1));
            // Add home
            sections.unshift('home');

            let current = 'home';
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-[#1a0502]/80 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}>
            <a href="#" className="text-xl font-display font-bold tracking-widest text-white hover:text-[var(--color-brand-accent)] transition-colors">
                DARSHAN<span className="text-[var(--color-brand-accent)]">.</span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-2">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className={`px-4 py-2 rounded-sm text-sm font-sans tracking-wide transition-all relative ${activeSection === link.href.substring(1)
                            ? 'text-[var(--color-brand-accent)]'
                            : 'text-white/70 hover:text-white'
                            }`}
                    >
                        {link.name}
                        {activeSection === link.href.substring(1) && (
                            <motion.div
                                layoutId="navbar-indicator"
                                className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--color-brand-accent)]"
                                initial={false}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </a>
                ))}
            </div>

            {/* Resume Button */}
            <a
                href="/Darshan_Final_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center gap-2 border border-white/20 text-white px-5 py-2 hover:bg-white hover:text-[#1a0502] transition-colors rounded-sm font-sans text-xs tracking-widest uppercase"
            >
                Resume
            </a>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden text-white p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-[#1a0502]/95 backdrop-blur-xl border-t border-white/10 flex flex-col py-4 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`px-6 py-4 text-sm font-sans tracking-widest uppercase border-b border-white/5 ${activeSection === link.href.substring(1)
                                    ? 'text-[var(--color-brand-accent)] bg-white/5'
                                    : 'text-white/70 hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/Darshan_Final_Resume.pdf"
                            target="_blank"
                            className="px-6 py-4 text-sm font-sans tracking-widest uppercase text-white/70 hover:text-white"
                        >
                            Resume
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
