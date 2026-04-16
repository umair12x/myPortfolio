'use client';

import { motion } from 'framer-motion';

const technologies = [
  "MERN Stack",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "C++",
  "JavaScript",
  "Agentic AI",
  "Python",
  "Pandas",
  "Numpy",
  "Scikit-learn",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "Docker",
  "Playwright",
  "REST APIs",
  "JWT",
  "Vercel",
  "TypeScript",
  "Framer Motion",
];

// Duplicate for seamless loop
const duplicatedTech = [...technologies, ...technologies, ...technologies];

export default function MarqueeStrip() {
  return (
    <div className="relative py-3 border-y border-stone-200 dark:border-stone-800 overflow-hidden bg-stone-50 dark:bg-stone-950">
      {/* Gradient masks for smooth fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-r from-stone-50 dark:from-stone-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-l from-stone-50 dark:from-stone-950 to-transparent z-10 pointer-events-none" />

      {/* First marquee row - moving left */}
      <div className="flex whitespace-nowrap animate-marquee-left mb-2">
        {duplicatedTech.map((tech, idx) => (
          <div
            key={`left-${idx}`}
            className="group flex items-center gap-3 mx-4 sm:mx-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-700 group-hover:bg-stone-500 dark:group-hover:bg-stone-500 transition-colors duration-300" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-stone-400 dark:text-stone-600 group-hover:text-stone-700 dark:group-hover:text-stone-400 transition-colors duration-300 font-medium">
              {tech}
            </span>
          </div>
        ))}
      </div>

      {/* Second marquee row - moving right (slower) */}
      <div className="flex whitespace-nowrap animate-marquee-right opacity-60">
        {[...duplicatedTech].reverse().map((tech, idx) => (
          <div
            key={`right-${idx}`}
            className="group flex items-center gap-3 mx-4 sm:mx-6"
          >
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-stone-300 dark:text-stone-700 group-hover:text-stone-500 dark:group-hover:text-stone-500 transition-colors duration-300">
              {tech}
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-200 dark:bg-stone-800 group-hover:bg-stone-400 dark:group-hover:bg-stone-400 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          animation: marquee-left 25s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 35s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}