import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── PLANET CONFIG ─────────────────────────────────────────── */
const PLANETS = [
    {
        id: 1,
        color: "#00eaff",
        colorDark: "#006f7a",
        orbitRadiusX: 480,
        orbitRadiusY: 175,
        speed: 0.26,
        startAngle: 15,    // right side
        size: 52,
        variant: 'split',
        project: {
            title: "Aykyam Website",
            description: "A modern school website built with a focus on clean UI, smooth animations, and responsive design.",
            tech: ["HTML", "CSS", "JavaScript", "React"],
            link: "https://aykyam.com",
        },
    },
    {
        id: 2,
        color: "#b56cff",
        colorDark: "#4a1c8a",
        orbitRadiusX: 560,
        orbitRadiusY: 205,
        speed: 0.15,
        startAngle: 190,   // left side
        size: 88,
        variant: 'core',
        project: {
            title: "Aston High School",
            description: "An official school website created for real users with structured content, accessibility, and performance in mind.",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "https://www.astonhighschool.org/",
        },
    },
    {
        id: 3,
        color: "#7CFF00",
        colorDark: "#2d5e00",
        orbitRadiusX: 380,
        orbitRadiusY: 140,
        speed: 0.19,
        startAngle: 100,   // below center
        size: 54,
        variant: 'halo',
        project: {
            title: "Tiffinity",
            description: "A homemade food delivery web app with user-friendly UI and order management features.",
            tech: ["React", "Node.js", "MongoDB"],
            link: "https://github.com/Darshaannn/Tiffinity",
        },
    },
    {
        id: 4,
        color: "#ff5fd2",
        colorDark: "#7a1060",
        orbitRadiusX: 660,
        orbitRadiusY: 242,
        speed: 0.08,
        startAngle: 310,   // upper-right / far
        size: 62,
        variant: 'ring',
        project: {
            title: "AI Dementia Detection",
            description: "An AI-based tool designed to help detect early signs of dementia using machine learning techniques.",
            tech: ["Python", "Machine Learning", "Data Analysis"],
            link: null,
        },
    },
];

/* ─── VARIANT: SPLIT GRADIENT ───────────────────────────────── */
const SplitPlanet = ({ planet }) => (
    <div className="w-full h-full rounded-full relative overflow-hidden">
        <div className="absolute inset-0 rounded-full" style={{
            background: `linear-gradient(to bottom, ${planet.color} 0%, ${planet.color}dd 40%, ${planet.colorDark} 100%)`,
        }} />
        <div className="absolute inset-0 rounded-full" style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 45%, rgba(0,0,0,0.45) 100%)',
        }} />
        <div className="absolute rounded-full" style={{ top: '10%', left: '15%', width: '30%', height: '22%', background: 'rgba(255,255,255,0.45)', filter: 'blur(4px)' }} />
        <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle at 50% 50%, transparent 55%, rgba(0,0,0,0.4) 100%)' }} />
    </div>
);

/* ─── VARIANT: CORE (clean sphere) ──────────────────────────── */
const CorePlanet = ({ planet }) => (
    <div className="w-full h-full rounded-full relative overflow-hidden">
        <div className="absolute inset-0 rounded-full" style={{
            background: `radial-gradient(circle at 38% 35%, ${planet.color}ee 0%, ${planet.color}88 45%, ${planet.colorDark} 100%)`,
        }} />
        <div className="absolute rounded-full" style={{ top: '12%', left: '18%', width: '26%', height: '18%', background: 'rgba(255,255,255,0.3)', filter: 'blur(3px)' }} />
        <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle at 50% 50%, transparent 55%, rgba(0,0,0,0.5) 100%)' }} />
    </div>
);

/* ─── VARIANT: ROTATING HALO AURA ───────────────────────────── */
const HaloPlanet = ({ planet }) => (
    <div className="w-full h-full" style={{ position: 'relative' }}>
        <motion.div className="absolute" style={{ inset: '-40%', borderRadius: '50%', background: `radial-gradient(ellipse at 40% 40%, ${planet.color}30 0%, ${planet.color}18 35%, transparent 70%)`, filter: 'blur(6px)' }}
            animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} />
        <motion.div className="absolute" style={{ inset: '-25%', borderRadius: '50%', background: `radial-gradient(ellipse at 60% 60%, ${planet.color}20 0%, transparent 65%)`, filter: 'blur(4px)' }}
            animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} />
        <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full" style={{ background: `radial-gradient(circle at 36% 32%, ${planet.color}ff 0%, ${planet.color}99 42%, ${planet.colorDark} 100%)` }} />
            <div className="absolute rounded-full" style={{ top: '11%', left: '16%', width: '28%', height: '20%', background: 'rgba(255,255,255,0.4)', filter: 'blur(4px)' }} />
            <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle at 50% 50%, transparent 55%, rgba(0,0,0,0.4) 100%)' }} />
        </div>
    </div>
);

/* ─── VARIANT: RING PLANET ───────────────────────────────────── */
const RingPlanet = ({ planet }) => {
    const ringW = planet.size * 2.6;
    const ringH = planet.size * 0.55;
    const tilt = 'translate(-50%, -50%) rotate(-30deg)';
    return (
        <div className="w-full h-full" style={{ position: 'relative' }}>
            {/* Back arc */}
            <div className="absolute" style={{ width: ringW, height: ringH, top: '50%', left: '50%', transform: tilt, zIndex: 0, clipPath: 'inset(0 0 50% 0)' }}>
                <div style={{ width: ringW, height: ringH, borderRadius: '50%', border: `2px solid ${planet.color}88`, boxShadow: `0 0 8px ${planet.color}44`, position: 'absolute', inset: 0 }} />
            </div>
            {/* Sphere */}
            <div className="absolute inset-0 rounded-full overflow-hidden" style={{ zIndex: 1 }}>
                <div className="absolute inset-0 rounded-full" style={{ background: `radial-gradient(circle at 36% 32%, ${planet.color}ff 0%, ${planet.color}99 42%, ${planet.colorDark} 100%)` }} />
                <div className="absolute rounded-full" style={{ top: '11%', left: '16%', width: '28%', height: '20%', background: 'rgba(255,255,255,0.35)', filter: 'blur(4px)' }} />
                <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle at 50% 50%, transparent 55%, rgba(0,0,0,0.4) 100%)' }} />
            </div>
            {/* Front arc */}
            <div className="absolute" style={{ width: ringW, height: ringH, top: '50%', left: '50%', transform: tilt, zIndex: 2, clipPath: 'inset(50% 0 0 0)' }}>
                <div style={{ width: ringW, height: ringH, borderRadius: '50%', border: `2px solid ${planet.color}cc`, boxShadow: `0 0 10px ${planet.color}66`, position: 'absolute', inset: 0 }} />
            </div>
        </div>
    );
};

const VARIANT_MAP = { split: SplitPlanet, core: CorePlanet, halo: HaloPlanet, ring: RingPlanet };

/* ─── PROJECT CARD ───────────────────────────────────────────── */
const ProjectCard = ({ planet, px, py, onCardEnter, onCardLeave }) => {
    const CARD_W = 280;
    const GAP = 24;

    // Horizontal: right-half planet → card goes LEFT; left-half planet → card goes RIGHT
    const onRight = px >= 0;
    const cardLeft = onRight ? px - CARD_W - GAP : px + GAP;
    // Vertical: always render card ABOVE planet center to avoid bottom clipping
    const cardTop = py - 10;
    const translateX = '0%';
    const translateY = '-100%';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.88, y: py >= 0 ? 12 : -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: py >= 0 ? 12 : -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute"
            style={{
                left: cardLeft,
                top: cardTop,
                transform: `translate(${translateX}, ${translateY})`,
                width: CARD_W,
                zIndex: 200,
                pointerEvents: 'auto',
            }}
            onMouseEnter={onCardEnter}
            onMouseLeave={onCardLeave}
        >
            <div
                style={{
                    background: 'rgba(18, 7, 3, 0.82)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: `1px solid ${planet.color}55`,
                    boxShadow: `0 0 30px ${planet.color}18, 0 20px 50px rgba(0,0,0,0.6)`,
                    borderRadius: 16,
                    padding: '20px 22px',
                }}
            >
                <h3 className="text-white font-display text-lg leading-snug mb-2">{planet.project.title}</h3>
                {/* Colour accent bar — under the title */}
                <div style={{ width: 36, height: 3, borderRadius: 2, background: planet.color, marginBottom: 12, boxShadow: `0 0 8px ${planet.color}` }} />

                <p className="text-white/55 text-[12px] leading-relaxed mb-4">{planet.project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1 mb-5">
                    {planet.project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-full font-mono"
                            style={{ background: `${planet.color}18`, border: `1px solid ${planet.color}40`, color: `${planet.color}cc` }}>
                            {t}
                        </span>
                    ))}
                </div>

                {/* CTA */}
                {planet.project.link ? (
                    <a href={planet.project.link} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-wide group/btn"
                        style={{ color: planet.color }}>
                        View Project
                        <span className="inline-block group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
                    </a>
                ) : (
                    <span className="text-[12px] font-mono" style={{ color: `${planet.color}55` }}>Under Development</span>
                )}
            </div>
        </motion.div>
    );
};

/* ─── PLANET SPHERE WRAPPER ──────────────────────────────────── */
const PlanetSphere = ({ planet, x, y, depth, isHovered, isAnyHovered, onHover }) => {
    const depthScale = 0.82 + depth * 0.18;
    const depthOpacity = 0.55 + depth * 0.45;
    const zIndex = Math.round((depth + 1) * 50);
    const baseGlow = `0 0 18px ${planet.color}88`;
    const hoverGlow = `0 0 40px ${planet.color}cc, 0 0 80px ${planet.color}44`;
    const VariantComponent = VARIANT_MAP[planet.variant] || SplitPlanet;
    const wrapperSize = planet.variant === 'halo' ? planet.size * 2 : planet.size;
    const innerOffset = planet.variant === 'halo' ? planet.size * 0.5 : 0;

    return (
        <motion.div
            className="absolute"
            style={{ x: x - wrapperSize / 2, y: y - wrapperSize / 2, zIndex, width: wrapperSize, height: wrapperSize, borderRadius: '50%', cursor: 'pointer' }}
            animate={{
                opacity: isAnyHovered ? (isHovered ? 1 : 0.2) : depthOpacity,
                scale: isHovered ? depthScale * 1.18 : depthScale,
                boxShadow: isHovered ? hoverGlow : baseGlow,
            }}
            transition={{ duration: 0.4 }}
            onMouseEnter={() => onHover(planet.id, 'enter')}
            onMouseLeave={() => onHover(planet.id, 'leave')}
        >
            <div style={{ position: 'absolute', top: innerOffset, left: innerOffset, width: planet.size, height: planet.size }}>
                <VariantComponent planet={planet} isHovered={isHovered} />
            </div>
        </motion.div>
    );
};

/* ─── MAIN SECTION ───────────────────────────────────────────── */
const Projects = () => {
    const [hoveredSun, setHoveredSun] = useState(false);
    const [hoveredPlanet, setHoveredPlanet] = useState(null);
    const anglesRef = useRef(PLANETS.map(p => p.startAngle));
    const Y_OFFSET = -100;

    const [positions, setPositions] = useState(() =>
        PLANETS.map(p => {
            const rad = (p.startAngle * Math.PI) / 180;
            return { x: Math.cos(rad) * p.orbitRadiusX, y: Math.sin(rad) * p.orbitRadiusY + Y_OFFSET, depth: Math.sin(rad) };
        })
    );

    // Shared hover timeout for planet ↔ card continuity
    const leaveTimeoutRef = useRef(null);

    const scheduleLeave = () => {
        leaveTimeoutRef.current = setTimeout(() => setHoveredPlanet(null), 160);
    };
    const cancelLeave = () => {
        if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };

    // Freeze position snapshot when planet is hovered (for card placement)
    const frozenPos = useRef({});
    const handleHover = (id, action) => {
        if (action === 'enter') {
            cancelLeave();
            const idx = PLANETS.findIndex(p => p.id === id);
            frozenPos.current[id] = { ...positions[idx] };
            setHoveredPlanet(id);
        } else {
            scheduleLeave();
        }
    };

    useEffect(() => {
        let rafId;
        const tick = () => {
            anglesRef.current = anglesRef.current.map((angle, i) =>
                hoveredPlanet === PLANETS[i].id ? angle : angle + PLANETS[i].speed
            );
            setPositions(anglesRef.current.map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                return { x: Math.cos(rad) * PLANETS[i].orbitRadiusX, y: Math.sin(rad) * PLANETS[i].orbitRadiusY + Y_OFFSET, depth: Math.sin(rad) };
            }));
            rafId = requestAnimationFrame(tick);
        };
        rafId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId);
    }, [hoveredPlanet]);

    const sortedIndices = positions
        .map((p, i) => ({ i, depth: p.depth }))
        .sort((a, b) => a.depth - b.depth)
        .map(p => p.i);

    const isAnyHovered = hoveredPlanet !== null;
    const hoveredPlanetData = PLANETS.find(p => p.id === hoveredPlanet) ?? null;
    const cardPos = hoveredPlanet !== null ? frozenPos.current[hoveredPlanet] : null;

    return (
        <section className="w-full h-screen relative bg-[var(--color-brand-primary)] overflow-hidden flex flex-col">
            {/* Section label — absolutely placed, won't affect height */}
            <div className="absolute top-6 left-6 pointer-events-none select-none z-10">
                <p className="font-mono text-xs text-white/20 tracking-[0.3em] uppercase">004 — Selected Works</p>
            </div>

            <div className="relative w-full flex-1 flex items-center justify-center"
                style={{ perspective: '900px', perspectiveOrigin: '50% 60%' }}>

                {/* Tilted ambient glow */}
                <div style={{ position: 'absolute', width: '100%', height: '100%', transform: 'rotateX(52deg) rotateZ(-15deg)', transformStyle: 'preserve-3d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <motion.div className="rounded-full pointer-events-none"
                        animate={{ opacity: [0.12, 0.28, 0.12] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ width: 520, height: 520, background: 'radial-gradient(circle, #ff8a0022 0%, transparent 70%)' }} />
                </div>

                {/* Orbit plane */}
                <div className="absolute" style={{ width: 0, height: 0, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>

                    {/* Planets */}
                    {sortedIndices.map(i => {
                        const planet = PLANETS[i];
                        const pos = positions[i];
                        return (
                            <PlanetSphere key={planet.id} planet={planet} x={pos.x} y={pos.y} depth={pos.depth}
                                isHovered={hoveredPlanet === planet.id} isAnyHovered={isAnyHovered} onHover={handleHover} />
                        );
                    })}

                    {/* ── SELECTED WORK title layer ──────────────────────────
                        z-index 22 sits between back-arc planets (z 0–22) and
                        front-arc planets (z 22–100), so some revolve behind
                        the letters, some in front — stencil effect.          */}
                    <div
                        className="absolute pointer-events-none select-none"
                        style={{
                            width: 780,
                            left: -390,          // centered on orbit origin
                            top: -265,
                            zIndex: 22,
                            textAlign: 'center',
                            lineHeight: 1,
                        }}
                    >
                        <span style={{
                            display: 'block',
                            fontSize: 'clamp(3.2rem, 7vw, 6.5rem)',
                            fontWeight: 900,
                            letterSpacing: '0.22em',
                            color: 'transparent',
                            WebkitTextStroke: '1.5px rgba(255,255,255,0.30)',
                            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                            whiteSpace: 'nowrap',
                            userSelect: 'none',
                            lineHeight: 1.1,
                        }}>
                            SELECTED
                        </span>
                        {/* WORK split — WO left of Sun, RK right of Sun */}
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                            <span style={{
                                flex: 1,
                                textAlign: 'right',
                                paddingRight: 0,
                                transform: 'translateX(20px)',
                                fontSize: 'clamp(3.2rem, 7vw, 6.5rem)',
                                fontWeight: 900,
                                letterSpacing: '0.22em',
                                color: 'transparent',
                                WebkitTextStroke: '1.5px rgba(255,255,255,0.30)',
                                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                                userSelect: 'none',
                                lineHeight: 1.1,
                            }}>WO</span>
                            {/* Gap = Sun diameter ~195px */}
                            <div style={{ width: 195, flexShrink: 0 }} />
                            <span style={{
                                flex: 1,
                                textAlign: 'left',
                                paddingLeft: 8,
                                fontSize: 'clamp(3.2rem, 7vw, 6.5rem)',
                                fontWeight: 900,
                                letterSpacing: '0.22em',
                                color: 'transparent',
                                WebkitTextStroke: '1.5px rgba(255,255,255,0.30)',
                                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                                userSelect: 'none',
                                lineHeight: 1.1,
                            }}>RK</span>
                        </div>
                    </div>


                    <AnimatePresence>
                        {hoveredPlanetData && cardPos && (
                            <ProjectCard
                                key={hoveredPlanetData.id}
                                planet={hoveredPlanetData}
                                px={cardPos.x}
                                py={cardPos.y}
                                onCardEnter={cancelLeave}
                                onCardLeave={scheduleLeave}
                            />
                        )}
                    </AnimatePresence>

                    {/* SUN */}
                    <div className="absolute" style={{ width: 0, height: 0, top: 0, left: 0, zIndex: 50 }}
                        onMouseEnter={() => setHoveredSun(true)} onMouseLeave={() => setHoveredSun(false)}>

                        <motion.div className="rounded-full cursor-pointer relative overflow-hidden"
                            animate={hoveredSun
                                ? { scale: 1.1, opacity: 0.14 }
                                : { scale: [1, 1.045, 1], opacity: isAnyHovered ? 0.7 : 1, boxShadow: ['0 0 55px #ff8a0099, 0 0 110px #ff3c0044', '0 0 90px #ff8a00cc, 0 0 190px #ff3c0066', '0 0 55px #ff8a0099, 0 0 110px #ff3c0044'] }}
                            transition={{ duration: hoveredSun ? 0.4 : 4, repeat: hoveredSun ? 0 : Infinity, ease: 'easeInOut' }}
                            style={{
                                width: 190, height: 190, x: -95, y: Y_OFFSET - 95, borderRadius: '50%',
                                background: 'radial-gradient(circle at 36% 34%, #ffdc88 0%, #ff8a00 38%, #ff3c00 75%, #7a1800 100%)',
                                boxShadow: '0 0 55px #ff8a0099, 0 0 110px #ff3c0044',
                            }}>
                            <div className="absolute top-[11%] left-[16%] w-[30%] h-[20%] rounded-full bg-white/25 blur-[5px] pointer-events-none" />
                            <div className="absolute inset-0 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, transparent 55%, #00000044 100%)' }} />
                        </motion.div>

                        <AnimatePresence>
                            {hoveredSun && (
                                <motion.div initial={{ opacity: 0, scale: 0.82 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.82 }}
                                    transition={{ duration: 0.35, ease: 'easeOut' }}
                                    style={{
                                        position: 'absolute', top: 0, left: 0, zIndex: 100,
                                        transform: `translate(calc(-50% - 0px), calc(-50% + ${Y_OFFSET}px))`,
                                        width: 310,
                                        background: 'rgba(22, 9, 3, 0.82)',
                                        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                                        border: '1px solid #ff8a0055',
                                        boxShadow: '0 0 40px #ff8a0020, 0 24px 60px rgba(0,0,0,0.5)',
                                        borderRadius: 18, padding: '28px',
                                    }}>
                                    <h3 className="text-2xl font-display text-white mb-3">My Selected Works</h3>
                                    <p className="text-sm text-white/60 leading-relaxed mb-5">
                                        "These projects represent my journey as a frontend developer — from real client websites to personal tools and experiments. Each one focuses on clean UI, smooth interactions, and practical usability."
                                    </p>
                                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: '#ff8a00cc' }}>
                                        ✦ Hover on a planet to explore each project.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Pulse rings */}
                {[0, 1.6].map((delay, i) => (
                    <motion.div key={i} className="absolute rounded-full border border-[#ff8a00]/10 pointer-events-none"
                        style={{ width: 190, height: 190, top: '50%', left: '50%', marginTop: Y_OFFSET - 95, marginLeft: -95 }}
                        animate={{ scale: [1, 2.5, 3.2], opacity: [0.4, 0.1, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeOut', delay }} />
                ))}

                <motion.p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-white/20 text-[10px] tracking-[0.3em] uppercase pointer-events-none"
                    animate={{ opacity: [0.2, 0.55, 0.2] }} transition={{ duration: 3, repeat: Infinity }}>
                    Hover a planet to explore
                </motion.p>
            </div>
        </section>
    );
};

export default Projects;
