'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden bg-white dark:bg-black">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                            linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Orbs */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-64 h-64 rounded-full pointer-events-none top-1/4 left-1/4 bg-stone-200/20 dark:bg-stone-800/20 blur-3xl"
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-full pointer-events-none bottom-1/4 right-1/4 w-80 h-80 bg-stone-300/10 dark:bg-stone-700/10 blur-3xl"
      />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center"
      >
        {/* 404 Display */}
        <div className="relative mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[120px] md:text-[180px] font-bold tracking-tighter text-stone-100 dark:text-stone-900 leading-none select-none"
          >
            404
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-6xl md:text-8xl">◈</span>
          </motion.div>
        </div>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xs uppercase tracking-[0.3em] text-stone-400 dark:text-stone-600 mb-6 font-medium"
        >
          Page Not Found
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-4 text-2xl font-bold tracking-tight md:text-3xl text-stone-900 dark:text-stone-100"
        >
          This page doesn&apos;t exist.
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="max-w-sm mx-auto mb-10 leading-relaxed text-stone-500 dark:text-stone-500"
        >
          The page you&apos;re looking for might have been moved, deleted, or never existed.
        </motion.p>

        {/* Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 text-xs font-medium tracking-wider text-white uppercase transition-all duration-300 rounded-full group bg-stone-900 dark:bg-stone-100 dark:text-stone-900 hover:shadow-xl"
            >
              Back to Studio
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Corner Decorations */}
        <div className="absolute w-16 h-16 border-t border-l top-8 left-8 border-stone-200 dark:border-stone-800 opacity-30" />
        <div className="absolute w-16 h-16 border-b border-r bottom-8 right-8 border-stone-200 dark:border-stone-800 opacity-30" />
      </motion.div>
    </div>
  );
}