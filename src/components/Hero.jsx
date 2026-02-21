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

            {/* Dark tint on the upper area so text pops */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'linear-gradient(to bottom, rgba(60,15,5,0.45) 0%, rgba(0,0,0,0) 55%)',
                }}
            />

            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col items-center" style={{ paddingTop: '7vh' }}>

                {/* SOFTWARE DEVELOPER label */}
                <motion.p
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="font-sans uppercase text-[var(--color-brand-cream)] mb-2"
                    style={{
                        fontSize: 'clamp(0.6rem, 1.1vw, 0.85rem)',
                        letterSpacing: '0.45em',
                    }}
                >
                    Software Developer
                </motion.p>

                {/* DARSHAN — giant outlined stroke text */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                    className="font-display w-full text-center leading-none select-none"
                    style={{
                        fontSize: 'clamp(4rem, 14vw, 18rem)',
                        color: 'transparent',
                        WebkitTextStroke: '2px rgba(245, 230, 211, 0.92)',
                        letterSpacing: '0.02em',
                        lineHeight: 0.9,
                    }}
                >
                    DARSHAN
                </motion.h1>
            </div>
        </section>
    );
};

export default Hero;
