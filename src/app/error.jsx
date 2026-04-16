// app/error.jsx
'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen px-6 bg-offwhite dark:bg-charcoal">
      <div className="w-full max-w-md text-center">
        {/* Animated error indicator */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center w-20 h-20 mx-auto border-2 border-red-500 rounded-full dark:border-red-400">
            <span className="text-4xl">⚠️</span>
          </div>
        </motion.div>

        {/* Error code */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-bold tracking-tighter text-7xl md:text-8xl text-stone-300 dark:text-stone-700"
        >
          500
        </motion.h1>

        {/* Error message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4 mb-3 text-2xl font-bold tracking-tight md:text-3xl"
        >
          Something went wrong
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mb-8 leading-relaxed text-ash"
        >
          An unexpected error occurred. Don't worry, it's not you — it's us.
          <br />
          <span className="block mt-2 font-mono text-xs opacity-60">
            Error: {error.message || 'Unknown error'}
          </span>
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <button
            onClick={reset}
            className="px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black text-sm uppercase tracking-wider hover:opacity-80 transition-all duration-300 rounded-full"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-2.5 border border-stone-300 dark:border-stone-700 text-sm uppercase tracking-wider hover:border-black dark:hover:border-white transition-all duration-300 rounded-full"
          >
            Go home
          </Link>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 mt-12 border-t border-stone-200 dark:border-stone-800"
        >
          <p className="text-xs text-ash">
            Error ID: {Math.random().toString(36).substring(7)}
          </p>
        </motion.div>
      </div>
    </div>
  );
}