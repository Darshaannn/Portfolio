import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

    return (
        <section
            ref={ref}
            className="relative w-full overflow-hidden"
            style={{ height: '100vh' }}
        >
            {/* Full-bleed background image */}
            <img
                src="/images/hero-v3.png"
                alt="Darshan"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center 20%' }}
            />

            {/* Background DARSHAN text */}
            <div className="absolute top-[20%] w-full flex justify-center pointer-events-none select-none overflow-hidden z-0">
                <span className="text-outline-bg" style={{ fontSize: 'clamp(5rem, 16vw, 14rem)', opacity: 0.45 }}>
                    DARSHAN
                </span>
            </div>

            {/* Dark tint on the upper area so text pops */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'linear-gradient(to bottom, rgba(60,15,5,0.45) 0%, rgba(0,0,0,0) 55%)',
                }}
            />

            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col items-center" style={{ paddingTop: '7vh' }}>

                {/* Role label */}
                <motion.p
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="font-sans text-[var(--color-brand-accent)] mb-4 md:mb-6 uppercase tracking-widest font-bold"
                    style={{
                        fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)',
                    }}
                >
                    Software Developer / Computer Engineering Student
                </motion.p>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                    className="font-display w-full max-w-5xl text-center leading-tight select-none text-white px-4 drop-shadow-2xl"
                    style={{
                        fontSize: 'clamp(2rem, 4.5vw, 4rem)',
                    }}
                >
                    I craft modern, <span className="text-[var(--color-brand-cream)] italic">interactive digital experiences.</span>
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="font-sans text-white/80 mt-6 max-w-2xl text-center px-6 leading-relaxed"
                    style={{
                        fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                    }}
                >
                    I combine design, development, and intelligent systems to create fast, engaging, and user-focused digital products.
                </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-12 md:bottom-20 w-full flex justify-center gap-16 md:gap-[32rem] px-4 pointer-events-none"
            >
                {/* Primary CTA Button */}
                <a
                    href="#projects"
                    className="pointer-events-auto w-40 md:w-56 py-3 md:py-4 bg-[var(--color-brand-accent)] text-white text-center font-sans tracking-[0.15em] text-xs md:text-sm uppercase hover:bg-white hover:text-[#1a0502] transition-colors duration-500 rounded-sm shadow-lg shadow-[var(--color-brand-accent)]/20"
                >
                    View My Work
                </a>

                {/* Secondary CTA Button */}
                <a
                    href="#contact"
                    className="pointer-events-auto w-40 md:w-56 py-3 md:py-4 border border-white/40 backdrop-blur-md text-white text-center font-sans tracking-[0.15em] text-xs md:text-sm uppercase hover:bg-white hover:text-[#1a0502] transition-colors duration-500 rounded-sm"
                >
                    Contact Me
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
