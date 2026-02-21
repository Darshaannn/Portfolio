import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="min-h-screen w-full flex items-center justify-center relative py-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-[var(--color-brand-primary)] rounded-full blur-[100px] opacity-30 pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-[var(--color-brand-accent)] rounded-full blur-[100px] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">

                {/* Visual / Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full md:w-1/2 relative"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 border-2 border-[var(--color-brand-accent)] rounded-lg transform -rotate-6 translate-x-4 translate-y-4 opacity-50 z-0"></div>
                        <div className="absolute inset-0 glass-card rounded-lg transform rotate-3 z-10 flex items-center justify-center overflow-hidden">
                            {/* Placeholder for abstract or code visual since no specific second image provided yet, or reuse hero image crop */}
                            <div className="p-8 text-[var(--color-brand-accent)] font-mono text-sm opacity-80 leading-relaxed">
                                {`class Developer {\n  constructor() {\n    this.name = "Darshan";\n    this.role = "Frontend Specialist";\n    this.passion = "UI/UX";\n  }\n\n  create() {\n    return "Awesome Experiences";\n  }\n}`}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full md:w-1/2 space-y-8"
                >
                    <h2 className="text-5xl md:text-7xl font-display text-white mb-8 flex flex-col z-20 relative">
                        <span className="md:pl-32">Professional</span>
                        <span className="text-transparent text-stroke">Summary</span>
                    </h2>

                    <p className="font-sans text-xl md:text-2xl text-[var(--color-brand-cream)]/90 leading-relaxed font-light text-justify">
                        Motivated <span className="text-[var(--color-brand-accent)] font-bold">Computer Engineering student</span> seeking internship opportunities in software development. Skilled in <span className="text-[var(--color-brand-neon-cyan)]">Java, Python, JavaScript, Flutter</span>, and modern web technologies. Strong interest in <span className="text-[var(--color-brand-neon-pink)]">AI development</span> and scalable application design. Quick learner with problem-solving mindset and hands-on project experience.
                    </p>

                    <button className="text-[var(--color-brand-accent)] font-bold tracking-widest uppercase text-sm border-b border-[var(--color-brand-accent)] pb-1 hover:text-white hover:border-white transition-colors interactive">
                        Learn More →
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
