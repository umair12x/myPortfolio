"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      setMousePosition({ x, y });
    };

    const container = containerRef.current;
    container?.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => container?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const firstName = "Muhammad".split("");
  const lastName = "Umair".split("");

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative flex items-center min-h-screen overflow-hidden bg-white dark:bg-black"
    >
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            transform: `translate(${(mousePosition.x - 0.5) * -20}px, ${(mousePosition.y - 0.5) * -20}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute rounded-full pointer-events-none top-1/4 left-1/4 w-96 h-96 bg-linear-to-br from-stone-200/40 to-transparent dark:from-stone-800/30 blur-3xl"
        animate={{
          x: (mousePosition.x - 0.5) * 50,
          y: (mousePosition.y - 0.5) * 50,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none bottom-1/4 right-1/4 w-80 h-80 bg-linear-to-tl from-stone-300/30 to-transparent dark:from-stone-700/20 blur-3xl"
        animate={{
          x: (mousePosition.x - 0.5) * -30,
          y: (mousePosition.y - 0.5) * -30,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="container relative z-10 px-6 mx-auto lg:px-12"
      >
        <div className="grid items-center min-h-screen gap-8 py-20 lg:grid-cols-12 lg:gap-12">
          {/* Left Content - 7 columns */}
          <div className="order-2 lg:col-span-7 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 border rounded-full border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/50 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] text-stone-600 dark:text-stone-400 font-medium">
                Available for Projects
              </span>
            </motion.div>

            {/* Name with Character Animation */}
            <div className="mb-2 overflow-hidden">
              <motion.div
                className="flex flex-wrap"
                initial="hidden"
                animate="visible"
              >
                {firstName.map((letter, i) => (
                  <motion.span
                    key={`first-${i}`}
                    custom={i}
                    variants={letterVariants}
                    className="text-4xl font-bold leading-none tracking-tighter sm:text-5xl md:text-7xl lg:text-8xl text-stone-900 dark:text-stone-100"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <div className="mb-8 overflow-hidden">
              <motion.div
                className="flex flex-wrap"
                initial="hidden"
                animate="visible"
              >
                {lastName.map((letter, i) => (
                  <motion.span
                    key={`last-${i}`}
                    custom={i + firstName.length}
                    variants={letterVariants}
                    className="text-4xl font-bold leading-none tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl text-stone-400 dark:text-stone-600"
                  >
                    {letter}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.4, type: "spring" }}
                  className="ml-2 text-5xl font-light sm:text-7xl md:text-8xl lg:text-9xl text-stone-300 dark:text-stone-700"
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
              {["Full-Stack Developer", "AI Specialist", "UI Architect"].map(
                (role, i) => (
                  <span
                    key={role}
                    className="px-4 py-2 text-xs tracking-wider uppercase transition-colors duration-300 border rounded-lg border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-stone-600"
                  >
                    {role}
                  </span>
                ),
              )}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="max-w-xl mb-10 text-lg font-light leading-relaxed md:text-xl text-stone-600 dark:text-stone-400"
            >
              Crafting scalable digital architectures for{" "}
              <span className="font-semibold text-stone-900 dark:text-stone-200">
                20,000+ users
              </span>
              . Specialized in agentic AI systems and next-generation web
              interfaces that merge functionality with exceptional design.
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
                className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-wider text-white uppercase transition-all duration-300 rounded-full group bg-stone-900 dark:bg-stone-100 dark:text-stone-900 hover:shadow-xl hover:shadow-stone-900/20 dark:hover:shadow-stone-100/20"
              >
                View Portfolio
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 border rounded-full group border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-stone-900 dark:hover:border-stone-400"
              >
                <span className="w-2 h-2 transition-colors rounded-full bg-stone-400 dark:bg-stone-600 group-hover:bg-stone-900 dark:group-hover:bg-stone-300" />
                Start a Conversation
              </motion.a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex gap-12 pt-8 mt-16 border-t border-stone-200 dark:border-stone-800"
            >
              {[
                { value: "5+", label: "Years Experience" },
                { value: "50+", label: "Projects Delivered" },
                { value: "20K+", label: "Users Impacted" },
              ].map((stat, i) => (
                <div key={stat.label}>
                  <div className="mb-1 text-2xl font-bold md:text-3xl text-stone-900 dark:text-stone-100">
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-wider uppercase text-stone-500 dark:text-stone-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Image - 5 columns */}
          <div className="flex justify-center order-1 lg:col-span-5 lg:order-2 lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Decorative Frame */}
              <div className="absolute transition-transform duration-500 transform border -inset-4 border-stone-200 dark:border-stone-800 rounded-2xl rotate-3 hover:rotate-6" />
              <div className="absolute transition-transform duration-500 transform border -inset-8 border-stone-100 dark:border-stone-900 rounded-2xl -rotate-2 hover:-rotate-4" />

              {/* Main Image Container */}
              <div className="relative overflow-hidden w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl bg-stone-100 dark:bg-stone-900">
                <Image
                  src="/umair_img.jpg"
                  alt="Muhammad Umair"
                  fill
                  sizes="(max-width: 640px) 18rem, (max-width: 768px) 20rem, 24rem"
                  className="object-cover transition-all duration-700 grayscale hover:grayscale-0"
                  priority
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-linear-to-t from-stone-900/20 to-transparent hover:opacity-100" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="absolute px-4 py-3 bg-white border shadow-xl -bottom-4 -left-4 dark:bg-stone-800 rounded-xl border-stone-100 dark:border-stone-700"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-700">
                    <span className="text-lg">⚡</span>
                  </div>
                  <div>
                    <div className="text-xs tracking-wider uppercase text-stone-500 dark:text-stone-400">
                      Specialization
                    </div>
                    <div className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                      Web Development
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-16 h-16 border border-dashed rounded-full -top-8 -right-8 border-stone-300 dark:border-stone-700"
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
        className="absolute flex flex-col items-center gap-3 -translate-x-1/2 bottom-8 left-1/2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 dark:text-stone-600 font-medium">
          Explore
        </span>
        <div className="relative flex justify-center w-6 h-10 pt-2 border rounded-full border-stone-300 dark:border-stone-700">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-stone-400 dark:bg-stone-600"
          />
        </div>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute w-20 h-20 border-t border-l opacity-50 top-8 left-8 border-stone-200 dark:border-stone-800" />
      <div className="absolute w-20 h-20 border-b border-r opacity-50 bottom-8 right-8 border-stone-200 dark:border-stone-800" />
    </section>
  );
}
