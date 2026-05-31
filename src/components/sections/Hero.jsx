'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: (clientX - left) / width,
        y: (clientY - top) / height,
      });
    };

    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => container?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const letterVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.04, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const firstName = 'Muhammad'.split('');
  const lastName = 'Umair'.split('');

  const stats = [
    { value: '5+', label: 'Years Coding' },
    { value: '50+', label: 'Projects Built' },
    { value: '20K+', label: 'Users Served' },
  ];

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative flex items-center min-h-screen overflow-hidden bg-offwhite dark:bg-charcoal"
    >
      <div className="absolute inset-0 mesh-gradient dark:mesh-gradient-dark" />

      <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]">
        <div
          className="w-full h-full text-stone-400"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
            transform: `translate(${(mousePosition.x - 0.5) * -16}px, ${(mousePosition.y - 0.5) * -16}px)`,
            transition: 'transform 0.4s ease-out',
          }}
        />
      </div>

      <motion.div
        className="absolute rounded-full pointer-events-none top-1/4 -left-20 w-[500px] h-[500px] bg-accent/10 blur-[100px]"
        animate={{
          x: (mousePosition.x - 0.5) * 40,
          y: (mousePosition.y - 0.5) * 40,
        }}
        transition={{ type: 'spring', stiffness: 40, damping: 30 }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none bottom-1/4 -right-20 w-[400px] h-[400px] bg-teal-400/8 blur-[80px]"
        animate={{
          x: (mousePosition.x - 0.5) * -25,
          y: (mousePosition.y - 0.5) * -25,
        }}
        transition={{ type: 'spring', stiffness: 40, damping: 30 }}
      />

      <motion.div style={{ y, opacity }} className="container-custom relative z-10">
        <div className="grid items-center min-h-screen gap-12 py-24 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 lg:col-span-7 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 rounded-full glass-card"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-accent" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-stone-600 dark:text-stone-400 font-medium">
                Open to Opportunities
              </span>
            </motion.div>

            <div className="mb-1 overflow-hidden">
              <motion.div className="flex flex-wrap" initial="hidden" animate="visible">
                {firstName.map((letter, i) => (
                  <motion.span
                    key={`first-${i}`}
                    custom={i}
                    variants={letterVariants}
                    className="heading-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-charcoal dark:text-offwhite"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <div className="mb-8 overflow-hidden">
              <motion.div className="flex flex-wrap items-baseline" initial="hidden" animate="visible">
                {lastName.map((letter, i) => (
                  <motion.span
                    key={`last-${i}`}
                    custom={i + firstName.length}
                    variants={letterVariants}
                    className="heading-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl gradient-text"
                  >
                    {letter}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.4, type: 'spring' }}
                  className="heading-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-accent/40"
                >
                  .
                </motion.span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-2.5 mb-8"
            >
              {['Full-Stack Developer', 'AI Engineer', 'UI Architect'].map((role) => (
                <span
                  key={role}
                  className="px-3.5 py-1.5 text-[11px] tracking-wider uppercase rounded-lg glass-card text-stone-600 dark:text-stone-400 hover:border-accent/30 transition-colors duration-300"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="max-w-xl mb-10 text-lg font-light leading-relaxed md:text-xl text-ash text-balance"
            >
              Crafting scalable digital architectures for{' '}
              <span className="font-semibold text-charcoal dark:text-offwhite">20,000+ users</span>.
              Specialized in agentic AI systems and next-generation web interfaces that merge
              functionality with exceptional design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a href="#projects" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-primary interactive">
                View Portfolio
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  →
                </motion.span>
              </motion.a>
              <motion.a href="#contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-secondary interactive">
                <span className="accent-dot" />
                Get in Touch
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="grid grid-cols-3 gap-6 pt-10 mt-14 border-t border-stone-200 dark:border-stone-800/80"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="heading-display text-2xl md:text-3xl text-charcoal dark:text-offwhite mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] tracking-[0.15em] uppercase text-ash">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center order-1 lg:col-span-5 lg:order-2 lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative animate-float"
            >
              <div className="absolute -inset-3 rounded-3xl border border-accent/20 rotate-3 transition-transform duration-500 hover:rotate-6" />
              <div className="absolute -inset-6 rounded-3xl border border-stone-200/50 dark:border-stone-800/50 -rotate-2" />

              <div className="relative overflow-hidden w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl bg-stone-100 dark:bg-stone-900 ring-1 ring-stone-200 dark:ring-stone-800">
                <Image
                  src="/umair_img.jpg"
                  alt="Muhammad Umair"
                  fill
                  sizes="(max-width: 640px) 18rem, (max-width: 768px) 20rem, 24rem"
                  className="object-cover transition-all duration-700 grayscale-30 hover:grayscale-0"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal/30 via-transparent to-transparent opacity-60" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute px-4 py-3 glass-card shadow-xl -bottom-5 -left-5 rounded-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-wider uppercase text-ash">Focus</div>
                    <div className="text-sm font-semibold font-display">Full-Stack & AI</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute w-20 h-20 border border-dashed border-accent/30 rounded-full -top-6 -right-6"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute flex flex-col items-center gap-3 -translate-x-1/2 bottom-10 left-1/2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-ash font-medium">Scroll</span>
        <div className="relative flex justify-center w-5 h-9 pt-2 border rounded-full border-stone-300 dark:border-stone-700">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
