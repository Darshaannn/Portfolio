import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const SchoolIcon = () => (
    <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-56 md:h-56 stroke-white stroke-[1.5px] fill-none overflow-visible" style={{ strokeLinecap: 'round', strokeLinejoin: 'round', filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.6))' }}>
        <circle cx="50" cy="50" r="10" />
        <circle cx="50" cy="50" r="4" opacity="0.6" />
        <path d="M42 42 L25 25" />
        <rect x="15" y="15" width="15" height="15" transform="rotate(45 22.5 22.5)" />
        <path d="M18 18 L12 12 M27 27 L33 33" opacity="0.5" />
        <path d="M58 58 L75 75" />
        <rect x="65" y="65" width="15" height="15" transform="rotate(45 72.5 72.5)" />
        <path d="M68 68 L62 62 M77 77 L82 82" opacity="0.5" />
        <path d="M58 42 L75 25" />
        <rect x="65" y="15" width="15" height="15" transform="rotate(-45 72.5 22.5)" />
        <path d="M42 58 L25 75" />
        <rect x="15" y="65" width="15" height="15" transform="rotate(-45 22.5 72.5)" />
        <path d="M75 15 L95 25 M65 25 L85 35 M85 75 L95 65 M75 85 L85 75" strokeDasharray="2 2" opacity="0.7" />
        <path d="M25 85 L5 75 M35 75 L15 65 M15 25 L5 35 M25 15 L15 25" strokeDasharray="2 2" opacity="0.7" />
    </svg>
);

const CollegeIcon = () => (
    <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-56 md:h-56 stroke-white stroke-[1.5px] fill-none overflow-visible" style={{ strokeLinecap: 'round', strokeLinejoin: 'round', filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.6))' }}>
        <path d="M45 10 L55 10 L52 40 L48 40 Z" />
        <circle cx="50" cy="45" r="8" />
        <ellipse cx="50" cy="65" rx="40" ry="12" />
        <ellipse cx="50" cy="65" rx="35" ry="8" opacity="0.5" />
        <path d="M42 45 L20 65 M58 45 L80 65" opacity="0.5" />
        <path d="M15 30 C 10 50 15 80 25 95 L 30 90 C 20 75 20 45 25 30 Z" />
        <path d="M85 30 C 90 50 85 80 75 95 L 70 90 C 80 75 80 45 75 30 Z" />
        <path d="M50 77 L50 90 L45 90 L45 77 Z M55 77 L55 90 L60 90 L60 77 Z" opacity="0.7" />
        <path d="M20 60 L30 65 M80 60 L70 65 M85 45 L75 50 M15 45 L25 50" opacity="0.4" />
    </svg>
);

const InternshipIcon = () => (
    <svg viewBox="0 0 100 100" className="w-36 h-36 md:w-60 md:h-60 stroke-white stroke-[1.5px] fill-none overflow-visible" style={{ strokeLinecap: 'round', strokeLinejoin: 'round', filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.6))' }}>
        <rect x="5" y="47" width="8" height="6" rx="2" opacity="0.4" />
        <rect x="18" y="45" width="12" height="10" rx="3" opacity="0.6" />
        <path d="M13 50 L18 50 M30 50 L35 50" opacity="0.5" />
        <path d="M35 40 L85 40 A5 10 0 0 1 85 60 L35 60 A5 10 0 0 1 35 40 Z" />
        <path d="M85 40 A5 10 0 0 0 85 60" opacity="0.5" />
        <path d="M45 40 L45 60 M60 40 L60 60 M75 40 L75 60" opacity="0.5" />
        <rect x="48" y="42" width="5" height="3" />
        <rect x="65" y="52" width="6" height="4" />
        <path d="M38 50 L42 50 M80 50 L83 50 M45 45 L60 45" strokeDasharray="1 2" opacity="0.7" />
        <ellipse cx="55" cy="50" rx="6" ry="30" strokeDasharray="10 5" />
        <ellipse cx="55" cy="50" rx="4" ry="25" opacity="0.4" />
        <ellipse cx="65" cy="50" rx="5" ry="20" strokeDasharray="8 6" opacity="0.8" />
        <circle cx="50" cy="15" r="0.5" />
        <circle cx="60" cy="85" r="0.5" />
        <path d="M30 25 L32 26 M70 18 L73 17 M65 80 L68 78 M40 82 L42 80" opacity="0.5" />
    </svg>
);

const SpaceshipIcon = () => (
    <svg viewBox="0 0 120 120" className="w-20 h-20 md:w-32 md:h-32 stroke-white stroke-[2px] fill-none overflow-visible" style={{ strokeLinecap: 'round', strokeLinejoin: 'round', filter: 'drop-shadow(0 0 8px rgba(0, 234, 255, 0.8))' }}>
        <path d="M60 10 C 80 40 75 80 60 95 C 45 80 40 40 60 10 Z" />
        <path d="M58 12 C 76 40 71 78 60 91 C 49 78 44 40 58 12 Z" opacity="0.4" />
        <path d="M60 25 L60 90" strokeDasharray="2 4" opacity="0.5" />
        <path d="M60 30 C 65 35 65 45 60 50 C 55 45 55 35 60 30 Z" />
        <path d="M62 33 C 64 38 64 42 60 47" opacity="0.6" />
        <path d="M45 60 L15 85 L42 80 Z" />
        <path d="M75 60 L105 85 L78 80 Z" />
        <path d="M48 68 L25 83 L44 78 Z" opacity="0.3" />
        <path d="M72 68 L95 83 L76 78 Z" opacity="0.3" />
        <path d="M50 65 L70 65 M52 72 L68 72 M55 79 L65 79" opacity="0.5" />
        <circle cx="48" cy="85" r="2" />
        <circle cx="72" cy="85" r="2" />
        <path d="M52 95 L60 115 L68 95 Z" stroke="#ff8a00" />
        <path d="M55 95 L60 108 L65 95 Z" stroke="#fff" opacity="0.8" />
        <path d="M50 115 L60 125 L70 115" stroke="rgba(255, 138, 0, 0.5)" strokeDasharray="2 2" />
    </svg>
);

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothConfig = { stiffness: 40, damping: 15, mass: 1.5 };
    const BP = [0, 0.08, 0.2, 0.3, 0.4, 0.55, 0.65, 0.75, 0.9, 1];

    const worldYVal = useTransform(scrollYProgress, BP, [0, 0, 0, -32.5, -65, -65, -107.5, -150, -150, -180]);
    const worldYSpring = useSpring(worldYVal, smoothConfig);
    const worldY = useTransform(worldYSpring, v => `${v}vh`);

    const shipXVal = useTransform(scrollYProgress, BP, [-10, 20, 20, 50, 80, 80, 50, 20, 20, 20]);
    const shipXSpring = useSpring(shipXVal, smoothConfig);
    const shipX = useTransform(shipXSpring, v => `${v}vw`);

    const shipYVal = useTransform(scrollYProgress, BP, [-20, 30, 30, 45, 65, 65, 75, 80, 80, 120]);
    const shipYSpring = useSpring(shipYVal, smoothConfig);
    const shipY = useTransform(shipYSpring, v => `${v}vh`);

    const shipRotVal = useTransform(scrollYProgress, BP, [135, 90, 90, 110, -90, -90, -110, 90, 90, 180]);
    const shipRot = useSpring(shipRotVal, smoothConfig);

    const op1 = useTransform(scrollYProgress, [0, 0.05, 0.08, 0.2, 0.25, 1], [0, 0, 1, 1, 0, 0]);
    const y1Val = useTransform(scrollYProgress, [0, 0.05, 0.08, 0.2, 0.25, 1], [30, 30, 0, 0, -30, -30]);
    const y1 = useTransform(useSpring(y1Val, smoothConfig), v => `${v}px`);

    const op2 = useTransform(scrollYProgress, [0, 0.35, 0.4, 0.55, 0.6, 1], [0, 0, 1, 1, 0, 0]);
    const y2Val = useTransform(scrollYProgress, [0, 0.35, 0.4, 0.55, 0.6, 1], [30, 30, 0, 0, -30, -30]);
    const y2 = useTransform(useSpring(y2Val, smoothConfig), v => `${v}px`);

    const op3 = useTransform(scrollYProgress, [0, 0.7, 0.75, 0.9, 0.95, 1], [0, 0, 1, 1, 0, 0]);
    const y3Val = useTransform(scrollYProgress, [0, 0.7, 0.75, 0.9, 0.95, 1], [30, 30, 0, 0, -30, -30]);
    const y3 = useTransform(useSpring(y3Val, smoothConfig), v => `${v}px`);

    const stars = useMemo(() => Array.from({ length: 150 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1 + 'px',
        opacity: Math.random() * 0.8 + 0.1
    })), []);

    return (
        <section
            ref={containerRef}
            className="w-full relative bg-[var(--color-brand-primary)]"
            style={{ height: '500vh' }}
        >
            <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[var(--color-brand-primary)] box-border">
                {stars.map(star => (
                    <div
                        key={star.id}
                        className="absolute rounded-full bg-white z-0 pointer-events-none"
                        style={{ left: star.left, top: star.top, width: star.size, height: star.size, opacity: star.opacity }}
                    />
                ))}

                <div className="absolute top-20 md:top-24 w-full text-center z-10 pointer-events-none">
                    <p className="font-mono text-sm tracking-[0.4em] uppercase text-white/50 mb-4">Journey</p>
                    <h2 className="text-4xl md:text-6xl font-display text-white drop-shadow-md">
                        Education & <span className="text-white" style={{ textShadow: '0 0 15px rgba(255,255,255,0.5)' }}>Experience</span>
                    </h2>
                </div>

                <motion.div
                    className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
                    style={{ y: worldY }}
                >
                    <div className="absolute top-[30vh] left-[20vw] -translate-x-1/2 -translate-y-1/2">
                        <SchoolIcon />
                    </div>
                    <motion.div
                        className="absolute w-[85vw] md:w-[320px] top-[45vh] md:top-[30vh] left-1/2 md:left-[35vw] -translate-x-1/2 md:translate-x-0 !pointer-events-auto flex flex-col justify-center"
                        style={{ opacity: op1, y: y1 }}
                    >
                        <div className="p-6 md:p-8 rounded-2xl h-full" style={{ background: 'rgba(30, 15, 5, 0.75)', border: '1px solid rgba(255,255,255,0.15)', boxShadow: '0 10px 40px rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)' }}>
                            <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 font-display tracking-widest uppercase">Schooling</h3>
                            <p className="text-white/80 text-sm md:text-lg font-sans font-light leading-relaxed">Completed my school education with a strong foundation in science and mathematics.</p>
                        </div>
                    </motion.div>

                    <div className="absolute top-[130vh] left-[80vw] -translate-x-1/2 -translate-y-1/2">
                        <CollegeIcon />
                    </div>
                    <motion.div
                        className="absolute w-[85vw] md:w-[320px] top-[145vh] md:top-[125vh] left-1/2 md:left-auto md:right-[30vw] -translate-x-1/2 md:translate-x-0 !pointer-events-auto flex flex-col justify-center"
                        style={{ opacity: op2, y: y2 }}
                    >
                        <div className="p-6 md:p-8 rounded-2xl h-full" style={{ background: 'rgba(30, 15, 5, 0.75)', border: '1px solid rgba(255,255,255,0.15)', boxShadow: '0 10px 40px rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)' }}>
                            <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 font-display tracking-widest uppercase">Diploma</h3>
                            <p className="text-white/80 text-sm md:text-lg font-sans font-light leading-relaxed">Pursuing diploma in Computer Engineering, learning programming, web development, and software fundamentals.</p>
                        </div>
                    </motion.div>

                    <div className="absolute top-[230vh] left-[20vw] -translate-x-1/2 -translate-y-1/2">
                        <InternshipIcon />
                    </div>
                    <motion.div
                        className="absolute w-[85vw] md:w-[320px] top-[245vh] md:top-[230vh] left-1/2 md:left-[35vw] -translate-x-1/2 md:translate-x-0 !pointer-events-auto flex flex-col justify-center"
                        style={{ opacity: op3, y: y3 }}
                    >
                        <div className="p-6 md:p-8 rounded-2xl h-full" style={{ background: 'rgba(30, 15, 5, 0.75)', border: '1px solid rgba(255,255,255,0.15)', boxShadow: '0 10px 40px rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)' }}>
                            <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 font-display tracking-widest uppercase">Internship</h3>
                            <p className="text-white/80 text-sm md:text-lg font-sans font-light leading-relaxed">Currently interning at Xpand Ventures, working on real-world websites and frontend projects.</p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="absolute z-30 pointer-events-none"
                    style={{
                        left: shipX,
                        top: shipY,
                        x: "-50%",
                        y: "-50%",
                        rotate: shipRot
                    }}
                >
                    <SpaceshipIcon />
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
