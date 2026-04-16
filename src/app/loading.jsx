'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-white dark:bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Logo/Icon */}
        <div className="relative mb-8">
          {/* Outer rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 border border-dashed rounded-full border-stone-300 dark:border-stone-700"
          />
          
          {/* Middle ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute border rounded-full inset-2 border-stone-200 dark:border-stone-800"
          />
          
          {/* Inner pulsing circle */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-3xl">◈</span>
          </motion.div>

          {/* Orbiting dot */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute w-2 h-2 -translate-x-1/2 rounded-full -top-1 left-1/2 bg-stone-900 dark:bg-stone-100" />
          </motion.div>
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h2 className="text-xs uppercase tracking-[0.3em] text-stone-400 dark:text-stone-600 mb-2 font-medium">
            Loading
          </h2>
          
          {/* Animated dots */}
          <div className="flex items-center justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -4, 0],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
                className="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-600"
              />
            ))}
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 w-32 h-0.5 bg-stone-100 dark:bg-stone-900 rounded-full overflow-hidden"
        >
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
            className="w-1/2 h-full rounded-full bg-stone-400 dark:bg-stone-600"
          />
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-8 left-8"
      >
        <span className="font-mono text-xs text-stone-300 dark:text-stone-700">MU</span>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 right-8 text-[10px] uppercase tracking-wider text-stone-300 dark:text-stone-700"
      >
        Portfolio 2025
      </motion.div>
    </div>
  );
}