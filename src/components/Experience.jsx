import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const SchoolStation = () => (
    <div className="relative w-48 h-48 md:w-72 md:h-72 flex justify-center items-center">
        {/* Blinking lights */}
        <div className="absolute top-[20%] left-[30%] w-1.5 h-1.5 bg-[var(--color-brand-neon-cyan)] rounded-full animate-pulse shadow-[0_0_8px_var(--color-brand-neon-cyan)]"></div>
        <div className="absolute bottom-[30%] right-[25%] w-1 h-1 bg-[var(--color-brand-accent)] rounded-full animate-ping shadow-[0_0_5px_var(--color-brand-accent)]" style={{ animationDuration: '3s' }}></div>

        <svg viewBox="0 0 200 200" className="w-full h-full stroke-white fill-none overflow-visible neon-glow-cyan drop-shadow-lg" style={{ strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
            <motion.g animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "center" }}>
                {/* Outer Ring System */}
                <ellipse cx="100" cy="100" rx="90" ry="30" strokeDasharray="4 8" opacity="0.4" />
                <ellipse cx="100" cy="100" rx="85" ry="25" opacity="0.2" />
                <path d="M 10 100 A 90 30 0 0 0 190 100" strokeDasharray="1 15" strokeWidth="3" opacity="0.6" />

                {/* Core Station */}
                <circle cx="100" cy="100" r="25" opacity="0.8" />
                <circle cx="100" cy="100" r="15" />
                <circle cx="100" cy="100" r="5" fill="white" className="neon-glow-cyan" />

                {/* Connecting structures */}
                <path d="M100 75 L100 40 M100 125 L100 160" />
                <path d="M75 100 L40 100 M125 100 L160 100" opacity="0.5" />
                <path d="M82 82 L60 60 M118 118 L140 140" strokeDasharray="2 4" />

                {/* Solar Panels / Modules */}
                <rect x="90" y="30" width="20" height="10" />
                <rect x="90" y="160" width="20" height="10" />
                <rect x="25" y="95" width="15" height="10" />
                <rect x="160" y="95" width="15" height="10" />
                <path d="M85 35 L70 35 M115 35 L130 35" opacity="0.6" />
                <path d="M85 165 L70 165 M115 165 L130 165" opacity="0.6" />

                {/* Details */}
                <path d="M95 95 L105 105 M105 95 L95 105" opacity="0.4" />
                <circle cx="70" cy="70" r="2" opacity="0.8" />
                <circle cx="130" cy="130" r="2" opacity="0.8" />
            </motion.g>
        </svg>
    </div>
);

const CollegeStation = () => (
    <div className="relative w-48 h-48 md:w-[320px] md:h-[320px] flex justify-center items-center">
        {/* Blinking lights */}
        <div className="absolute top-[40%] right-[20%] w-1.5 h-1.5 bg-[var(--color-brand-neon-pink)] rounded-full animate-pulse shadow-[0_0_10px_var(--color-brand-neon-pink)]" style={{ animationDuration: '2s' }}></div>
        <div className="absolute bottom-[20%] left-[35%] w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]" style={{ animationDuration: '4s' }}></div>

        <svg viewBox="0 0 200 200" className="w-full h-full stroke-white fill-none overflow-visible neon-glow-cyan drop-shadow-xl" style={{ strokeWidth: '1.2', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
            <motion.g animate={{ rotate: -360 }} transition={{ duration: 150, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "center" }}>
                {/* Base Structure */}
                <path d="M70 50 L130 50 L140 150 L60 150 Z" opacity="0.3" />
                <path d="M80 50 L120 50 L130 150 L70 150 Z" />
                <path d="M95 50 L105 50 L115 150 L85 150 Z" opacity="0.7" />

                {/* Connecting Rings */}
                <ellipse cx="100" cy="80" rx="45" ry="12" />
                <ellipse cx="100" cy="120" rx="55" ry="15" />
                <ellipse cx="100" cy="80" rx="60" ry="16" strokeDasharray="4 6" opacity="0.5" />
                <ellipse cx="100" cy="120" rx="75" ry="20" strokeDasharray="2 8" opacity="0.6" />

                {/* Details */}
                <line x1="100" y1="20" x2="100" y2="50" />
                <circle cx="100" cy="20" r="3" fill="var(--color-brand-accent)" stroke="none" className="neon-glow-orange" />
                <path d="M60 150 L40 170 M140 150 L160 170" opacity="0.6" />
                <circle cx="40" cy="170" r="4" opacity="0.5" />
                <circle cx="160" cy="170" r="4" opacity="0.5" />

                <path d="M85 90 L115 90 M85 100 L115 100 M85 110 L115 110" opacity="0.4" />
                <path d="M65 130 L135 130 M60 140 L140 140" strokeDasharray="1 3" />
            </motion.g>
        </svg>
    </div>
);

const InternshipStation = () => (
    <div className="relative w-56 h-56 md:w-[350px] md:h-[350px] flex justify-center items-center">
        {/* Blinking lights */}
        <div className="absolute top-[30%] left-[45%] w-2 h-2 bg-[var(--color-brand-accent)] rounded-full animate-pulse shadow-[0_0_12px_var(--color-brand-accent)]"></div>
        <div className="absolute bottom-[40%] right-[30%] w-1.5 h-1.5 bg-[var(--color-brand-neon-cyan)] rounded-full animate-ping shadow-[0_0_8px_var(--color-brand-neon-cyan)]" style={{ animationDuration: '2.5s' }}></div>

        <svg viewBox="0 0 200 200" className="w-full h-full stroke-white fill-none overflow-visible neon-glow-cyan drop-shadow-2xl" style={{ strokeWidth: '1.2', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
            <motion.g animate={{ rotate: 360 }} transition={{ duration: 180, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "center" }}>
                {/* Complex Orbital Structure */}
                <circle cx="100" cy="100" r="60" strokeDasharray="10 5" opacity="0.4" />
                <circle cx="100" cy="100" r="45" opacity="0.6" />
                <circle cx="100" cy="100" r="12" fill="rgba(255,255,255,0.1)" />

                {/* Hexagonal Core */}
                <path d="M100 80 L117 90 L117 110 L100 120 L83 110 L83 90 Z" strokeWidth="2" />
                <path d="M100 85 L113 93 L113 107 L100 115 L87 107 L87 93 Z" opacity="0.5" />

                {/* Spokes & Nodes */}
                <path d="M100 40 L100 80 M100 120 L100 160" />
                <path d="M48 70 L83 90 M117 110 L152 130" />
                <path d="M48 130 L83 110 M117 90 L152 70" />

                {/* Outer Nodes */}
                <circle cx="100" cy="40" r="8" />
                <circle cx="100" cy="160" r="8" />
                <circle cx="48" cy="70" r="6" opacity="0.7" />
                <circle cx="152" cy="130" r="6" opacity="0.7" />
                <circle cx="48" cy="130" r="6" opacity="0.7" />
                <circle cx="152" cy="70" r="6" opacity="0.7" />

                {/* Tech Accents */}
                <path d="M85 40 L115 40 M85 160 L115 160" strokeDasharray="2 2" />
                <circle cx="100" cy="100" r="3" fill="var(--color-brand-neon-cyan)" stroke="none" className="neon-glow-cyan" />
            </motion.g>
        </svg>
    </div>
);

const Spaceship = () => (
    <div className="relative w-24 h-32 md:w-32 md:h-44">
        <svg viewBox="0 0 100 150" className="w-full h-full stroke-white fill-none overflow-visible neon-glow-cyan scale-110" style={{ strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
            {/* Engine Flame with Pulse */}
            <motion.path
                d="M45 120 L50 145 L55 120 Z"
                fill="var(--color-brand-accent)"
                stroke="var(--color-brand-accent)"
                className="neon-glow-orange"
                animate={{ opacity: [0.6, 1, 0.6], scaleY: [0.8, 1.2, 0.8] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "50% 120px" }}
            />
            <motion.path
                d="M48 120 L50 135 L52 120 Z"
                fill="white"
                stroke="none"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Main Fuselage */}
            <path d="M50 15 C 70 50 65 100 50 120 C 35 100 30 50 50 15 Z" />
            <path d="M50 25 C 62 55 58 95 50 110 C 42 95 38 55 50 25 Z" opacity="0.4" />

            {/* Wings */}
            <path d="M38 80 L15 110 L45 105 Z" />
            <path d="M62 80 L85 110 L55 105 Z" />

            {/* Details */}
            <path d="M50 40 L50 55" strokeDasharray="2 2" />
            <path d="M45 65 L55 65 M42 75 L58 75 M40 85 L60 85" opacity="0.5" />
            <circle cx="50" cy="45" r="4" />
            <circle cx="50" cy="45" r="1.5" fill="var(--color-brand-neon-cyan)" stroke="none" className="neon-glow-cyan" />

            {/* Trailing Particles Placeholder (Handled by framer in main component usually, but adding stationary hints here) */}
            <circle cx="50" cy="155" r="1" opacity="0.4" />
            <circle cx="45" cy="165" r="0.5" opacity="0.2" />
            <circle cx="55" cy="160" r="0.8" opacity="0.3" />
        </svg>
    </div>
);

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothConfig = { stiffness: 30, damping: 20, mass: 1 };

    // We will use a larger scroll area to give the journey more time
    // BP = Breakpoints for the journey
    const BP = [0, 0.15, 0.3, 0.5, 0.65, 0.85, 1];

    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Background Parallax
    const bgY = useTransform(scrollYProgress, [0, 1], ["0vh", "-50vh"]);

    // Spaceship Movement (Curved Path)
    // Starts top middle, arcs left to station 1, arcs right to station 2, arcs left to station 3, continues down
    const shipXVal = useTransform(scrollYProgress, BP, isMobile ? [
        "50vw", "50vw", "50vw", "50vw", "50vw", "50vw", "50vw"
    ] : [
        "50vw",  // Start top
        "40vw",  // Arriving at Station 1 (Grid center point)
        "40vw",  // Leaving Station 1
        "60vw",  // Arriving at Station 2 (Grid center point)
        "60vw",  // Leaving Station 2
        "45vw",  // Arriving at Station 3 (Grid center point)
        "45vw"   // End
    ]);
    const shipXSpring = useSpring(shipXVal, smoothConfig);

    const shipYVal = useTransform(scrollYProgress, BP, [
        "10vh",  // Start top
        "35vh",  // Station 1 Y
        "35vh",  // Station 1 pause
        "60vh",  // Station 2 Y
        "60vh",  // Station 2 pause
        "85vh",  // Station 3 Y
        "110vh"  // Fly off screen
    ]);
    const shipYSpring = useSpring(shipYVal, smoothConfig);

    // Spaceship Rotation (tilts based on direction)
    const shipRotVal = useTransform(scrollYProgress, BP, isMobile ? [
        180, 180, 180, 180, 180, 180, 180
    ] : [
        180, // Pointing straight down
        210, // Tilting left towards Station 1
        180, // Straightening out
        150, // Tilting right towards Station 2
        180, // Straightening out
        200, // Tilting left towards Station 3
        180  // Straight down
    ]);
    const shipRotSpring = useSpring(shipRotVal, smoothConfig);

    // Card Opacities and Scales (Fade in only when ship is at the station)
    // Station 1: Ship arrives at 0.15, pauses until 0.28
    const card1OpVal = useTransform(scrollYProgress, [0.12, 0.15, 0.28, 0.32], [0, 1, 1, 0]);
    const card1Op = useSpring(card1OpVal, { stiffness: 60, damping: 20 });
    const card1ScaleVal = useTransform(scrollYProgress, [0.12, 0.15, 0.28, 0.32], [0.8, 1, 1, 0.8]);
    const card1Scale = useSpring(card1ScaleVal, { stiffness: 60, damping: 20 });

    // Station 2: Ship arrives at 0.5, pauses until 0.63
    const card2OpVal = useTransform(scrollYProgress, [0.47, 0.5, 0.63, 0.67], [0, 1, 1, 0]);
    const card2Op = useSpring(card2OpVal, { stiffness: 60, damping: 20 });
    const card2ScaleVal = useTransform(scrollYProgress, [0.47, 0.5, 0.63, 0.67], [0.8, 1, 1, 0.8]);
    const card2Scale = useSpring(card2ScaleVal, { stiffness: 60, damping: 20 });

    // Station 3: Ship arrives at 0.85, pauses until end
    const card3OpVal = useTransform(scrollYProgress, [0.82, 0.85, 0.98, 1], [0, 1, 1, 0]);
    const card3Op = useSpring(card3OpVal, { stiffness: 60, damping: 20 });
    const card3ScaleVal = useTransform(scrollYProgress, [0.82, 0.85, 0.98, 1], [0.8, 1, 1, 0.8]);
    const card3Scale = useSpring(card3ScaleVal, { stiffness: 60, damping: 20 });

    // Generate static stars
    const stars = useMemo(() => Array.from({ length: 200 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() > 0.9 ? '3px' : Math.random() > 0.5 ? '2px' : '1px',
        opacity: Math.random() * 0.7 + 0.1,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 3 + 2}s`
    })), []);

    // Shooting stars
    const [shootingStars, setShootingStars] = React.useState([]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.5) { // 50% chance every 4 seconds
                const newStar = {
                    id: Date.now(),
                    top: `${Math.random() * 40}%`,
                    left: `${Math.random() * 80}%`,
                };
                setShootingStars(prev => [...prev.slice(-2), newStar]); // Keep max 3

                // Remove out after animation
                setTimeout(() => {
                    setShootingStars(prev => prev.filter(s => s.id !== newStar.id));
                }, 2000);
            }
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Y map position:
    const mapYVal = useTransform(scrollYProgress, [0, 1], ["0vh", "-300vh"]);
    const mapYSpring = useSpring(mapYVal, { stiffness: 40, damping: 25 });

    return (
        <section
            ref={containerRef}
            className="w-full relative bg-[var(--color-brand-primary)]"
            style={{ height: '600vh' }} // Increased height for slower, deeper cinematic experience
        >
            {/* STICKY VIEWPORT DRIVER */}
            <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[var(--color-brand-primary)] box-border">

                {/* Parallax Star Background */}
                <motion.div className="absolute top-0 left-0 w-full h-[200%] pointer-events-none" style={{ y: bgY }}>
                    {stars.map(star => (
                        <div
                            key={star.id}
                            className="absolute rounded-full bg-white z-0 pointer-events-none"
                            style={{
                                left: star.left,
                                top: star.top,
                                width: star.size,
                                height: star.size,
                                opacity: star.opacity,
                                boxShadow: star.size === '3px' ? '0 0 4px #fff' : 'none',
                                animation: `twinkle ${star.animationDuration} infinite alternate`
                            }}
                        />
                    ))}
                    <style>{`
                        @keyframes twinkle {
                            0% { opacity: 0.2; transform: scale(0.8); }
                            100% { opacity: 1; transform: scale(1.2); }
                        }
                        @keyframes shootingStar {
                            0% { transform: translateX(0) translateY(0) rotate(-45deg); opacity: 1; width: 0; }
                            70% { width: 150px; opacity: 1; }
                            100% { transform: translateX(-500px) translateY(500px) rotate(-45deg); opacity: 0; width: 0; }
                        }
                    `}</style>
                </motion.div>

                {/* Shooting Stars Layer */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
                    {shootingStars.map(star => (
                        <div
                            key={star.id}
                            className="absolute h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
                            style={{
                                top: star.top,
                                left: star.left,
                                animation: 'shootingStar 2s ease-out forwards',
                                transformOrigin: 'right center'
                            }}
                        />
                    ))}
                </div>

                {/* Title Overlay (Fades out early) */}
                <motion.div
                    className="absolute top-16 md:top-24 w-full text-center z-10 pointer-events-none"
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
                >
                    <p className="font-sans text-xs tracking-[0.5em] uppercase text-white/50 mb-4 font-light">Journey</p>
                    <h2 className="text-4xl md:text-6xl font-display text-white neon-glow">
                        Education & <span className="text-white text-stroke">Experience</span>
                    </h2>
                </motion.div>

                {/* THE MAP CONSTRUCT (Moving upwards) */}
                <motion.div
                    className="absolute top-0 left-0 w-full pointer-events-none z-20"
                    style={{ height: '400vh', y: mapYSpring }}
                >

                    {/* STATION 1: SCHOOL (Left) - Target Gap Center: 40vw */}
                    <div
                        className="absolute top-[80vh] left-[50vw] md:left-[40vw] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-10 md:gap-0"
                        style={!isMobile ? { display: 'grid', gridTemplateColumns: 'min-content 15vw auto' } : {}}
                    >
                        {/* The Station: Grid Col 1 */}
                        <div className="scale-[0.7] md:scale-[1.5] w-[180px] flex justify-center items-center">
                            <SchoolStation />
                        </div>
                        {/* The Card: Grid Col 3 */}
                        <motion.div
                            className="w-[85vw] md:w-[500px] !pointer-events-auto z-40"
                            style={{ opacity: card1Op, scale: card1Scale, gridColumn: 3 }}
                        >
                            <div className="p-6 md:p-8 rounded-2xl h-full glass-card group border border-white/5 hover:border-white/20 transition-all duration-500">
                                <span className="text-[var(--color-brand-accent)] text-xs md:text-sm font-sans tracking-widest uppercase mb-3 block">01 / High School</span>
                                <h3 className="text-white   text-2xl md:text-3xl font-display mb-3">Foundations & Physics</h3>
                                <p className="text-white/70 text-sm md:text-base font-sans font-light leading-relaxed mb-4">Completed foundational education with distinction, sparking an early interest in technology, science, and mathematics.</p>
                                <p className="text-white font-mono text-sm tracking-widest bg-white/5 inline-block px-3 py-1 rounded">ICSE: 92%</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* STATION 2: COLLEGE (Right) - Target Gap Center: 60vw */}
                    <div
                        className="absolute top-[210vh] left-[50vw] md:left-[60vw] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-10 md:gap-0"
                        style={!isMobile ? { display: 'grid', gridTemplateColumns: 'auto 15vw min-content' } : {}}
                    >
                        {/* The Card: Grid Col 1 */}
                        <motion.div
                            className="w-[85vw] md:w-[500px] !pointer-events-auto z-40"
                            style={{ opacity: card2Op, scale: card2Scale, gridColumn: 1 }}
                        >
                            <div className="p-6 md:p-8 rounded-2xl h-full glass-card group border border-white/5 hover:border-[var(--color-brand-cyan)] transition-all duration-500 md:text-right">
                                <span className="text-[var(--color-brand-neon-cyan)] text-xs md:text-sm font-sans tracking-widest uppercase mb-3 block">02 / Diploma</span>
                                <h3 className="text-white text-2xl md:text-3xl font-display mb-3">Govt. Polytechnic Mumbai</h3>
                                <p className="text-white/70 text-sm md:text-base font-sans font-light leading-relaxed mb-4">Pursuing a Diploma in Computer Engineering. Deep diving into system architecture, web development technologies, and software engineering principles.</p>
                                <p className="text-white font-mono text-sm tracking-widest bg-[#00eaff]/10 border border-[#00eaff]/20 inline-block px-3 py-1 rounded">AGGREGATE: 89%</p>
                            </div>
                        </motion.div>
                        {/* The Station: Grid Col 3 */}
                        <div className="scale-[0.7] md:scale-[1.5] w-[180px] flex justify-center items-center" style={{ gridColumn: 3 }}>
                            <CollegeStation />
                        </div>
                    </div>

                    {/* STATION 3: INTERNSHIP (Center-Left) - Target Gap Center: 45vw */}
                    <div
                        className="absolute top-[340vh] left-[50vw] md:left-[45vw] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-10 md:gap-0"
                        style={!isMobile ? { display: 'grid', gridTemplateColumns: 'min-content 15vw auto' } : {}}
                    >
                        {/* The Station: Grid Col 1 */}
                        <div className="scale-[0.7] md:scale-[1.5] w-[180px] flex justify-center items-center">
                            <InternshipStation />
                        </div>
                        {/* The Card: Grid Col 3 */}
                        <motion.div
                            className="w-[85vw] md:w-[500px] !pointer-events-auto z-40"
                            style={{ opacity: card3Op, scale: card3Scale, gridColumn: 3 }}
                        >
                            <div className="p-6 md:p-8 rounded-2xl h-full glass-card group border border-white/5 hover:border-[var(--color-brand-accent)] transition-all duration-500">
                                <span className="text-[var(--color-brand-accent)] text-xs md:text-sm font-sans tracking-widest uppercase mb-3 block">03 / Experience</span>
                                <h3 className="text-white text-2xl md:text-3xl font-display mb-3">Xpand Ventures Intern</h3>
                                <p className="text-white/70 text-sm md:text-base font-sans font-light leading-relaxed">Currently engaged as a Frontend Developer Intern. Building high-performance, real-world web applications and directly impacting user experience design.</p>
                            </div>
                        </motion.div>
                    </div>

                </motion.div>

                {/* THE SPACESHIP (Moving across viewport relative to overall scroll) */}
                <motion.div
                    className="absolute z-30 pointer-events-none"
                    style={{
                        left: shipXSpring,
                        top: shipYSpring,
                        x: "-50%",
                        y: "-50%",
                        rotate: shipRotSpring
                    }}
                >
                    <div className="scale-[0.6] md:scale-100 origin-center transition-transform">
                        <Spaceship />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
