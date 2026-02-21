import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Frontend",
        color: "var(--color-brand-accent)",
        items: [
            { name: "React / Next.js", level: 3 },
            { name: "JavaScript (ES6+)", level: 3 },
            { name: "Tailwind CSS", level: 3 },
            { name: "HTML5 / CSS3", level: 3 },
            { name: "Framer Motion", level: 2 },
        ]
    },
    {
        category: "Backend & DB",
        color: "var(--color-brand-neon-cyan)",
        items: [
            { name: "Node.js", level: 2 },
            { name: "Python", level: 2 },
            { name: "Java", level: 2 },
            { name: "MongoDB", level: 2 },
            { name: "MySQL", level: 2 },
        ]
    },
    {
        category: "Tools & Others",
        color: "var(--color-brand-cream)",
        items: [
            { name: "Git & GitHub", level: 3 },
            { name: "Figma", level: 2 },
            { name: "VS Code", level: 3 },
            { name: "Vite", level: 3 },
            { name: "Postman", level: 2 },
        ]
    }
];

const ProficiencyDots = ({ level, color }) => {
    return (
        <div className="flex gap-1">
            {[1, 2, 3].map((dot) => (
                <div
                    key={dot}
                    className={`w-2 h-2 rounded-full ${dot <= level ? '' : 'opacity-20'}`}
                    style={{ backgroundColor: dot <= level ? color : 'white' }}
                />
            ))}
        </div>
    );
};

const SkillCard = ({ category, items, color, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full glass-card rounded-2xl p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden group border border-white/5 hover:border-white/20 transition-colors"
        >
            {/* Subtle header line */}
            <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: color, opacity: 0.8 }}></div>

            <h3 className="text-2xl font-display text-white tracking-wide" style={{ textShadow: `0 0 10px ${color}80` }}>
                {category}
            </h3>

            <div className="space-y-4">
                {items.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className="flex items-center justify-between group/item"
                    >
                        <span className="text-base font-sans text-white/80 group-hover/item:text-white transition-colors">
                            {item.name}
                        </span>
                        <ProficiencyDots level={item.level} color={color} />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 z-10 overflow-hidden">

            {/* Background SKILLS text */}
            <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none select-none z-0 overflow-hidden">
                <span className="text-outline-bg" style={{ fontSize: 'clamp(4rem, 16vw, 15rem)', opacity: 0.35 }}>
                    SKILLS
                </span>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-display text-white neon-glow">
                        Technical <span className="text-white text-stroke">Arsenal</span>
                    </h2>
                    <p className="font-sans text-white/60 mt-4 max-w-2xl mx-auto uppercase tracking-widest text-xs md:text-sm">
                        Beginner <span className="mx-2 text-[var(--color-brand-accent)]">•</span>
                        Intermediate <span className="mx-2 text-[var(--color-brand-accent)]">•</span>
                        Advanced
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((skill, index) => (
                        <SkillCard
                            key={index}
                            {...skill}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
