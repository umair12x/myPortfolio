
'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const navItems = [

  { label: 'Edge', href: '#about', icon: '◆' },
  { label: 'Journey', href: '#journey', icon: '⌘' },
  { label: 'Work', href: '#projects', icon: '◉' },
  { label: 'Stack', href: '#skills', icon: '◇' },
  { label: 'Connect', href: '#contact', icon: '◐' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll with progress tracking
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? scrollY / docHeight : 0;
          
          setScrollProgress(progress);
          setIsScrolled(scrollY > 10);
          
          // Update active section
          const sections = navItems.map(item => item.href.substring(1));
          const scrollPosition = scrollY + 100;
          
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      window.history.pushState(null, '', href);
      setActiveSection(targetId);
    }
  }, []);

  // Desktop Navigation - Compact Premium Pill Design
  if (!isMobile) {
    return (
      <>
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
        >
          <motion.div
            layout
            className={`relative flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-500 ${
              isScrolled
                ? 'bg-white/90 dark:bg-stone-950/90 backdrop-blur-xl border-stone-200/60 dark:border-stone-800/60 shadow-lg shadow-stone-500/5'
                : 'bg-white/40 dark:bg-black/40 backdrop-blur-md border-stone-200/30 dark:border-stone-800/30'
            }`}
          >
            {/* Logo */}
            <Link 
              href="/" 
              className="relative group px-3 py-1"
              onClick={(e) => handleNavClick(e, '#hero')}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <span className="text-sm font-mono tracking-tighter font-bold bg-linear-to-br from-stone-900 to-stone-600 dark:from-stone-100 dark:to-stone-400 bg-clip-text text-transparent">
                  Umair.
                </span>
              </motion.div>
            </Link>

            {/* Divider */}
            <div className="w-px h-4 bg-stone-300/50 dark:bg-stone-700/50" />

            {/* Navigation Links */}
            <div className="flex items-center">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative px-3 py-1.5 rounded-full transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Active Background */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          layoutId="activeNavBg"
                          className="absolute inset-0 bg-stone-100 dark:bg-stone-800 rounded-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </AnimatePresence>

                    <div className="relative flex items-center gap-1.5">
                      <motion.span 
                        className="text-[10px] transition-all duration-300"
                        animate={{ 
                          opacity: isActive || hoveredIndex === idx ? 1 : 0,
                          scale: isActive || hoveredIndex === idx ? 1 : 0.8
                        }}
                      >
                        {item.icon}
                      </motion.span>
                      <span className={`text-[11px] uppercase tracking-widest font-medium transition-colors duration-200 ${
                        isActive
                          ? 'text-stone-900 dark:text-stone-100'
                          : 'text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-300'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Divider */}
            <div className="w-px h-4 bg-stone-300/50 dark:bg-stone-700/50" />

            {/* Theme Toggle */}
            <div className="px-1">
              <ThemeToggle />
            </div>
          </motion.div>
        </motion.nav>

        {/* Scroll Progress - Thin line at top */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-0.5 bg-linear-to-r from-stone-400 via-stone-600 to-stone-400 dark:from-stone-600 dark:via-stone-400 dark:to-stone-600 z-50 origin-left"
          style={{ scaleX: scrollProgress }}
        />
      </>
    );
  }

  // Mobile Bottom Navigation - Compact Dock Style
  return (
    <>
      {/* Minimal Top Bar */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-40 px-4 py-3"
      >
        <div className={`flex justify-between items-center max-w-md mx-auto transition-all duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <Link 
            href="/" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-xs font-mono font-bold bg-white/80 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-200/50 dark:border-stone-800/50"
          >
            Umair.
          </Link>
          <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md px-2 py-1.5 rounded-full border border-stone-200/50 dark:border-stone-800/50">
            <ThemeToggle />
          </div>
        </div>
      </motion.div>

      {/* Bottom Navigation Dock */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed bottom-4 left-4 right-4 z-50"
      >
        <div className="max-w-md mx-auto">
          <div className="bg-white/95 dark:bg-stone-950/95 backdrop-blur-xl rounded-2xl border border-stone-200/60 dark:border-stone-800/60 shadow-2xl shadow-stone-500/10 overflow-hidden">
            {/* Progress bar integrated into nav */}
            <div className="h- bg-stone-100 dark:bg-stone-900 w-full">
              <motion.div 
                className="h-full bg-stone-800 dark:bg-stone-200"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
            
            <div className="flex items-center justify-around py-2 px-1">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="relative flex flex-col items-center justify-center min-w-12 py-2 px-1 rounded-xl transition-all duration-200"
                    whileTap={{ scale: 0.88 }}
                  >
                    {/* Active background */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          layoutId="mobileActiveBg"
                          className="absolute inset-0 bg-stone-100 dark:bg-stone-800 rounded-xl"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </AnimatePresence>

                    <div className="relative flex flex-col items-center gap-0.5">
                      <motion.span 
                        className="text-sm"
                        animate={{ y: isActive ? -2 : 0, scale: isActive ? 1.1 : 1 }}
                      >
                        {item.icon}
                      </motion.span>
                      <span className={`text-[9px] uppercase tracking-wider transition-all duration-200 ${
                        isActive 
                          ? 'text-stone-900 dark:text-stone-100 font-semibold opacity-100' 
                          : 'text-stone-400 dark:text-stone-600 opacity-70'
                      }`}>
                        {item.label.slice(0, 4)}
                      </span>
                    </div>

                    {/* Active dot */}
                    {isActive && (
                      <motion.div
                        layoutId="mobileActiveDot"
                        className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-stone-800 dark:bg-stone-200"
                        transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </div>
          
          {/* Safe area spacer */}
          <div className="h-[env(safe-area-inset-bottom)]" />
        </div>
      </motion.div>
    </>
  );
}