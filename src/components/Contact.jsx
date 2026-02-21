import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="w-full pb-32 pt-20 relative flex flex-col items-center px-4 md:px-8 z-20">
            {/* Glowing Box Container */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="container mx-auto px-6 md:px-12 flex flex-col items-center max-w-4xl relative z-10 glass-card rounded-[2rem] py-16 w-full border border-white/10"
            >
                {/* Accent Top Bar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[var(--color-brand-accent)] rounded-b-full shadow-[0_4px_20px_var(--color-brand-accent)]"></div>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-5xl md:text-7xl font-display text-center mb-6 text-white neon-glow"
                >
                    Let's <span className="text-[var(--color-brand-accent)]">Connect</span>
                </motion.h2>

                <p className="font-sans text-lg md:text-xl text-white/70 text-center mb-16 max-w-2xl font-light">
                    Have a project in mind or looking for a dedicated frontend developer? Let's create something amazing together.
                </p>

                <form action="https://formsubmit.co/darshangadhave10@gmail.com" method="POST" className="w-full space-y-6 mb-20">
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative group">
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Name"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white font-sans focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors placeholder:text-white/30"
                            />
                        </div>
                        <div className="relative group">
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white font-sans focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors placeholder:text-white/30"
                            />
                        </div>
                    </div>
                    <textarea
                        name="message"
                        required
                        rows="4"
                        placeholder="Message"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white font-sans focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors placeholder:text-white/30 resize-none"
                    ></textarea>

                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            className="px-12 py-4 bg-[var(--color-brand-accent)] text-[#1a0502] font-bold font-sans rounded-sm text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,138,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                {/* Footer / Social Links */}
                <div className="w-full pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="font-mono text-xs tracking-widest uppercase text-white/40">
                        © {new Date().getFullYear()} Darshan Gadhave
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        <a href="https://github.com/Darshaannn" target="_blank" rel="noopener noreferrer" className="font-sans text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors">GitHub</a>
                        <a href="https://www.linkedin.com/in/darshan-gadhave-80ab97369/" target="_blank" rel="noopener noreferrer" className="font-sans text-sm tracking-widest uppercase text-white/60 hover:text-[#00eaff] transition-colors">LinkedIn</a>
                        <a href="mailto:darshangadhave10@gmail.com" className="font-sans text-sm tracking-widest uppercase text-white/60 hover:text-[var(--color-brand-accent)] transition-colors">Email</a>
                        <a href="/Darshan_Final_Resume.pdf" target="_blank" rel="noopener noreferrer" className="font-sans text-sm tracking-widest uppercase text-[var(--color-brand-accent)] hover:text-white transition-colors font-bold flex items-center gap-2">
                            Resume <span className="text-lg leading-none mb-1">↓</span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
