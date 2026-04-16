'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      setMousePosition({ x, y });
    };

    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => container?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const firstName = "Muhammad".split("");
  const lastName = "Umair".split("");

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-black"
    >
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            transform: `translate(${(mousePosition.x - 0.5) * -20}px, ${(mousePosition.y - 0.5) * -20}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-linear-to-br from-stone-200/40 to-transparent dark:from-stone-800/30 blur-3xl pointer-events-none"
        animate={{
          x: (mousePosition.x - 0.5) * 50,
          y: (mousePosition.y - 0.5) * 50,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-linear-to-tl from-stone-300/30 to-transparent dark:from-stone-700/20 blur-3xl pointer-events-none"
        animate={{
          x: (mousePosition.x - 0.5) * -30,
          y: (mousePosition.y - 0.5) * -30,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />

      {/* Main Content */}
      <motion.div style={{ y, opacity }} className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-screen py-20">
          
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/50 backdrop-blur-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] text-stone-600 dark:text-stone-400 font-medium">
                Available for Projects
              </span>
            </motion.div>

            {/* Name with Character Animation */}
            <div className="overflow-hidden mb-2">
              <motion.div className="flex flex-wrap" initial="hidden" animate="visible">
                {firstName.map((letter, i) => (
                  <motion.span
                    key={`first-${i}`}
                    custom={i}
                    variants={letterVariants}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-stone-900 dark:text-stone-100 leading-none"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <div className="overflow-hidden mb-8">
              <motion.div className="flex flex-wrap" initial="hidden" animate="visible">
                {lastName.map((letter, i) => (
                  <motion.span
                    key={`last-${i}`}
                    custom={i + firstName.length}
                    variants={letterVariants}
                    className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-stone-400 dark:text-stone-600 leading-none"
                  >
                    {letter}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.4, type: "spring" }}
                  className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-stone-300 dark:text-stone-700 ml-2"
                >
                  .
                </motion.span>
              </motion.div>
            </div>

            {/* Role Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {["Full-Stack Developer", "AI Specialist", "UI Architect"].map((role, i) => (
                <span
                  key={role}
                  className="px-4 py-2 text-xs uppercase tracking-wider border border-stone-200 dark:border-stone-800 rounded-lg text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-stone-600 transition-colors duration-300"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-lg md:text-xl text-stone-600 dark:text-stone-400 leading-relaxed max-w-xl mb-10 font-light"
            >
              Crafting scalable digital architectures for <span className="font-semibold text-stone-900 dark:text-stone-200">20,000+ users</span>. 
              Specialized in agentic AI systems and next-generation web interfaces that merge 
              functionality with exceptional design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 hover:shadow-xl hover:shadow-stone-900/20 dark:hover:shadow-stone-100/20"
              >
                View Portfolio
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-8 py-4 border border-stone-300 dark:border-stone-700 rounded-full text-sm uppercase tracking-wider text-stone-700 dark:text-stone-300 font-medium hover:border-stone-900 dark:hover:border-stone-400 transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-stone-400 dark:bg-stone-600 group-hover:bg-stone-900 dark:group-hover:bg-stone-300 transition-colors" />
                Start a Conversation
              </motion.a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex gap-12 mt-16 pt-8 border-t border-stone-200 dark:border-stone-800"
            >
              {[
                { value: "5+", label: "Years Experience" },
                { value: "50+", label: "Projects Delivered" },
                { value: "20K+", label: "Users Impacted" }
              ].map((stat, i) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Image - 5 columns */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-stone-200 dark:border-stone-800 rounded-2xl transform rotate-3 transition-transform duration-500 hover:rotate-6" />
              <div className="absolute -inset-8 border border-stone-100 dark:border-stone-900 rounded-2xl transform -rotate-2 transition-transform duration-500 hover:-rotate-4" />
              
              {/* Main Image Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-900">
                <Image
                  src="/umair_img.jpg"
                  alt="Muhammad Umair"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-stone-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-stone-800 px-4 py-3 rounded-xl shadow-xl border border-stone-100 dark:border-stone-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-700 flex items-center justify-center">
                    <span className="text-lg">⚡</span>
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider">Specialization</div>
                    <div className="text-sm font-semibold text-stone-900 dark:text-stone-100">Web Development</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-16 h-16 border border-dashed border-stone-300 dark:border-stone-700 rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 dark:text-stone-600 font-medium">
          Explore
        </span>
        <div className="relative w-6 h-10 rounded-full border border-stone-300 dark:border-stone-700 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-2 bg-stone-400 dark:bg-stone-600 rounded-full"
          />
        </div>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l border-t border-stone-200 dark:border-stone-800 opacity-50" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r border-b border-stone-200 dark:border-stone-800 opacity-50" />
    </section>
  );
}