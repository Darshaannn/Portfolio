import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Primary Skills",
        items: ["Java", "Python", "JavaScript", "HTML", "CSS", "AI (Basic Concepts)"],
        color: "var(--color-brand-neon-cyan)"
    },
    {
        category: "Secondary Skills",
        items: ["Flutter", "C", "MySQL", "Firebase", "MongoDB"],
        color: "var(--color-brand-neon-pink)"
    }
];

const SkillCard = ({ category, items, color, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5 }}
            className={`group w-full max-w-[300px] glass-card rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden interactive ${className}`}
            style={{ border: `1px solid ${color}50` }}
        >
            {/* Subtle dark backing for readability */}
            <div className="absolute inset-0 bg-black/40 rounded-2xl z-0"></div>

            {/* Neon Glow on Hover */}
            <div
                className="absolute -inset-1 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl"
                style={{ backgroundColor: color }}
            ></div>

            <h3 className="text-3xl font-display z-10" style={{ color }}>
                {category}
            </h3>

            <ul className="space-y-3 z-10">
                {items.map((item, index) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className="flex items-center space-x-3 text-base font-sans text-white/85"
                    >
                        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }}></span>
                        <span>{item}</span>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section
            className="relative min-h-screen w-full flex flex-col items-center justify-start pt-12 md:pt-7 overflow-hidden"
            style={{
                backgroundImage: "url('/images/skills-bg.png?v=2')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            {/*
              The background image already contains the hand-drawn doodle lines.
              Layout:
                - Left doodle lives in roughly the left 25% of the image.
                - Right doodle lives in roughly the right 20% of the image.
                - Centre arrow points between the two cards.
              So we push content into the middle 55% — using px-[22%] to keep
              the cards away from the drawn lines on either side.
            */}
            <div className="relative z-10 w-full flex flex-col items-center pb-20 px-4">

                {/* SKILLS title — centred, sits in the clear top area */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-9xl font-display text-[var(--color-brand-accent)] neon-glow mb-8 md:mb-12 text-center"
                >
                    SKILLS
                </motion.h2>

                {/* Cards in the centre corridor — clear of left & right doodles */}
                <div className="w-full grid md:grid-cols-2 gap-8 md:gap-10 pl-4 md:pl-[25%] pr-4 md:pr-[20%] justify-items-center">
                    {skillsData.map((skill, index) => (
                        <SkillCard
                            key={index}
                            {...skill}
                            className={index === 0 ? "md:-translate-x-12" : "md:-translate-x-12"}
                        />
                    ))}
                </div>
            </div>

            {/* Vertical "Checkout My" and "Works" text */}
            <div className="absolute right-4 md:right-[2%] top-[10%] md:top-[15%] hidden md:flex h-full items-start gap-2 pointer-events-none z-20">
                <p
                    className="text-4xl md:text-5xl font-sans font-light tracking-wide uppercase origin-center opacity-80 whitespace-nowrap mt-48"
                    style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed',
                        WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)',
                        color: 'transparent'
                    }}
                >
                    WORKS
                </p>
                <p
                    className="text-4xl md:text-5xl font-sans font-light tracking-wide uppercase origin-center opacity-80 whitespace-nowrap"
                    style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed',
                        WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)',
                        color: 'transparent'
                    }}
                >
                    CHECKOUT MY
                </p>
            </div>
        </section>
    );
};

export default Skills;
