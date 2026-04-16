// app/client-layout.js
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Cursor from '@/components/Cursor';

export default function ClientLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Cursor className="z-50"/>
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.main
          key={typeof window !== 'undefined' ? window.location.pathname : ''}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
}