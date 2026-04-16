'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored === 'dark' || (!stored && prefersDark);
    setIsDark(initial);
    document.documentElement.classList.toggle('dark', initial);
    setMounted(true);
  }, []);

  const toggle = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  // Prevent hydration mismatch - compact skeleton matching new size
  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full bg-transparent" />
    );
  }

  return (
    <motion.button
      onClick={toggle}
      className="relative w-8 h-8 rounded-full flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 dark:focus-visible:ring-stone-600"
      whileTap={{ scale: 0.88 }}
      whileHover={{ scale: 1.08 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Subtle hover background */}
      <motion.div
        className="absolute inset-0 rounded-full bg-stone-200/0 dark:bg-stone-700/0"
        whileHover={{ backgroundColor: isDark ? 'rgba(68, 68, 68, 0.3)' : 'rgba(230, 230, 230, 0.5)' }}
        transition={{ duration: 0.2 }}
      />

      <div className="relative w-4 h-4">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.svg
              key="moon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute inset-0 w-4 h-4 text-stone-700 dark:text-stone-300"
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 45, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </motion.svg>
          ) : (
            <motion.svg
              key="sun"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute inset-0 w-4 h-4 text-stone-600 dark:text-stone-400"
              initial={{ scale: 0, rotate: 45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: -45, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </motion.svg>
          )}
        </AnimatePresence>
      </div>

      {/* Tooltip on hover */}
      <motion.span
        initial={{ opacity: 0, y: 5 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-wider text-stone-500 dark:text-stone-400 whitespace-nowrap pointer-events-none"
      >
        {isDark ? 'Light' : 'Dark'}
      </motion.span>
    </motion.button>
  );
}