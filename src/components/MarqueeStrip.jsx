'use client';

import { motion } from 'framer-motion';

const technologies = [
  'MERN Stack',
  'React.js',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'TypeScript',
  'Agentic AI',
  'Python',
  'Tailwind CSS',
  'Docker',
  'Playwright',
  'REST APIs',
  'Framer Motion',
  'Vercel',
  'GraphQL',
  'Redis',
  'OpenAI API',
];

const duplicatedTech = [...technologies, ...technologies, ...technologies];

export default function MarqueeStrip() {
  return (
    <div className="relative py-4 border-y border-stone-200/80 dark:border-stone-800/80 overflow-hidden bg-surface-2 dark:bg-surface-dark-2">
      <div className="absolute inset-0 mesh-gradient dark:mesh-gradient-dark opacity-60" />

      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-linear-to-r from-surface-2 dark:from-surface-dark-2 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-linear-to-l from-surface-2 dark:from-surface-dark-2 to-transparent z-10 pointer-events-none" />

      <div className="relative flex whitespace-nowrap animate-marquee-left mb-2.5">
        {duplicatedTech.map((tech, idx) => (
          <div key={`left-${idx}`} className="group flex items-center gap-3 mx-5 sm:mx-8">
            <span className="accent-dot group-hover:scale-125 transition-transform duration-300" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-stone-500 dark:text-stone-500 group-hover:text-accent dark:group-hover:text-accent-light transition-colors duration-300 font-medium font-display">
              {tech}
            </span>
          </div>
        ))}
      </div>

      <div className="relative flex whitespace-nowrap animate-marquee-right opacity-50">
        {[...duplicatedTech].reverse().map((tech, idx) => (
          <div key={`right-${idx}`} className="group flex items-center gap-3 mx-5 sm:mx-8">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-stone-400 dark:text-stone-600 group-hover:text-accent/70 transition-colors duration-300 font-display">
              {tech}
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-700 group-hover:bg-accent transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
