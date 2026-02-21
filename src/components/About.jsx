import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="min-h-screen w-full flex items-center justify-center relative py-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-[var(--color-brand-primary)] rounded-full blur-[100px] opacity-30 pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-[var(--color-brand-accent)] rounded-full blur-[100px] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16 md:mb-24 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-display text-white neon-glow">
                        About <span className="text-white text-stroke">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-[var(--color-brand-accent)] mx-auto mt-6 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Visual / Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative w-full aspect-[4/5] max-w-md mx-auto group">
                            {/* Decorative Border */}
                            <div className="absolute inset-0 border-2 border-[var(--color-brand-accent)]/30 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 z-0"></div>

                            {/* Image Container */}
                            <div className="absolute inset-0 glass-card rounded-2xl z-10 overflow-hidden border border-white/10">
                                {/* Fallback/Actual Image */}
                                <img
                                    src="/images/darshan_new_profile.webp"
                                    alt="Darshan Profile"
                                    className="w-full h-full object-cover opacity-90 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                                    style={{ objectPosition: 'center 15%' }}
                                    loading="lazy"
                                />
                                {/* Gradient Overlay for blending */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0502] via-transparent to-transparent opacity-80"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:col-span-7 space-y-8 glass-card p-8 md:p-12 rounded-2xl border border-white/5"
                    >
                        {/* Who I am */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-display text-[var(--color-brand-accent)] mb-3 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]"></span>
                                Who I Am
                            </h3>
                            <p className="font-sans text-lg text-white/80 leading-relaxed font-light">
                                I’m a Computer Engineering student and Frontend Developer who enjoys transforming ideas into intelligent, interactive digital products. I work across web interfaces, applications, and emerging technologies while continuously improving my technical and creative skills.
                            </p>
                        </div>

                        {/* What I specialize in */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-display text-white mb-3 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-white/50"></span>
                                What I Specialize In
                            </h3>
                            <p className="font-sans text-lg text-white/80 leading-relaxed font-light">
                                My core expertise lies in building modern digital interfaces and applications. I work with JavaScript, React, and Tailwind CSS to create scalable and responsive user experiences, and I explore AI-driven tools and systems to solve real-world problems through technology.
                            </p>
                        </div>

                        {/* What makes me unique */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-display text-[var(--color-brand-neon-cyan)] mb-3 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-[var(--color-brand-neon-cyan)]"></span>
                                What Makes Me Unique
                            </h3>
                            <p className="font-sans text-lg text-white/80 leading-relaxed font-light">
                                I don’t just write code — I design intelligent experiences. My background in computer engineering helps me approach problems logically, while my interest in design and AI allows me to build products that are both technically strong and visually compelling. I focus on clarity, performance, and meaningful interaction in every project I create.
                            </p>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
