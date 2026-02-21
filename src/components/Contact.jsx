import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="w-full pb-32 relative flex flex-col items-center px-4 md:px-8 z-20">
            {/* Glowing Box Container */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="container mx-auto px-6 md:px-12 flex flex-col items-center max-w-4xl relative z-10 border-[1.5px] rounded-[2rem] pt-16 pb-16 w-full -mt-2"
                style={{
                    borderColor: '#ff8a00',
                    boxShadow: '0 0 40px rgba(255, 138, 0, 0.4), inset 0 0 30px rgba(255, 138, 0, 0.1)',
                    background: 'linear-gradient(180deg, rgba(255,138,0,0.08) 0%, rgba(0,0,0,0.5) 100%)',
                    backdropFilter: 'blur(10px)'
                }}
            >
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-6xl md:text-9xl font-display text-center mb-8 text-white"
                >
                    Let's <span className="text-transparent text-stroke" style={{ WebkitTextStrokeColor: '#ff8a00', textShadow: '0 0 20px rgba(255,138,0,0.8)' }}>Build</span>
                </motion.h2>

                <p className="font-sans text-xl md:text-2xl text-[var(--color-brand-cream)]/80 text-center mb-16 max-w-2xl">
                    Have a project in mind? Let's create something amazing together.
                </p>

                <form className="w-full space-y-8 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#ff8a00] transition-colors interactive"
                            />
                        </div>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#ff8a00] transition-colors interactive"
                            />
                        </div>
                    </div>
                    <textarea
                        rows="4"
                        placeholder="Message"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#ff8a00] transition-colors interactive"
                    ></textarea>

                    <div className="flex justify-center">
                        <button className="px-12 py-4 bg-[#ff8a00] text-white font-bold rounded-full text-lg tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_#ff8a00] interactive uppercase hover:bg-white hover:text-[#ff8a00] duration-300">
                            Send Message
                        </button>
                    </div>
                </form>

                {/* Social Links */}
                <div className="flex space-x-12">
                    <a href="https://github.com/Darshaannn?tab=repositories" target="_blank" rel="noopener noreferrer" className="font-display text-2xl text-white/50 hover:text-[#00eaff] transition-colors interactive">GitHub</a>
                    <a href="https://www.linkedin.com/in/darshan-gadhave-80ab97369/" target="_blank" rel="noopener noreferrer" className="font-display text-2xl text-white/50 hover:text-[#ff5fd2] transition-colors interactive">LinkedIn</a>
                    <a href="mailto:darshangadhave10@gmail.com" className="font-display text-2xl text-white/50 hover:text-[#ff8a00] transition-colors interactive">Email</a>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
