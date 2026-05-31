'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Work', href: '#projects' },
  { label: 'Stack', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

          const sections = ['hero', ...navItems.map((item) => item.href.substring(1))];
          const scrollPosition = scrollY + 120;

          for (let i = sections.length - 1; i >= 0; i--) {
            const element = document.getElementById(sections[i]);
            if (element && scrollPosition >= element.offsetTop) {
              setActiveSection(sections[i]);
              break;
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

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', href);
      setActiveSection(targetId);
    }
  }, []);

  if (!isMobile) {
    return (
      <>
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
        >
          <motion.div
            layout
            className={`relative flex items-center gap-0.5 px-2 py-1.5 rounded-full transition-all duration-500 ${
              isScrolled ? 'glass-nav shadow-xl shadow-black/5 dark:shadow-black/30' : 'glass-nav'
            }`}
          >
            <Link
              href="/"
              className="relative group px-4 py-1.5 interactive"
              onClick={(e) => handleNavClick(e, '#hero')}
            >
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="font-display text-sm font-bold tracking-tight gradient-text"
              >
                MU
              </motion.span>
            </Link>

            <div className="w-px h-5 bg-stone-200 dark:bg-stone-800 mx-1" />

            <div className="flex items-center">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="relative px-3.5 py-2 rounded-full interactive"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          layoutId="activeNavBg"
                          className="absolute inset-0 bg-accent/10 dark:bg-accent/15 rounded-full border border-accent/20"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </AnimatePresence>
                    <span
                      className={`relative text-[11px] uppercase tracking-[0.15em] font-medium transition-colors duration-200 ${
                        isActive
                          ? 'text-accent dark:text-accent-light'
                          : 'text-stone-500 dark:text-stone-500 hover:text-charcoal dark:hover:text-offwhite'
                      }`}
                    >
                      {item.label}
                    </span>
                  </motion.a>
                );
              })}
            </div>

            <div className="w-px h-5 bg-stone-200 dark:bg-stone-800 mx-1" />

            <div className="px-1.5">
              <ThemeToggle />
            </div>
          </motion.div>
        </motion.nav>

        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-accent to-transparent z-50 origin-left"
          style={{ scaleX: scrollProgress }}
        />
      </>
    );
  }

  return (
    <>
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-40 px-4 py-3"
      >
        <div
          className={`flex justify-between items-center max-w-md mx-auto transition-all duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="font-display text-xs font-bold gradient-text glass-nav px-3.5 py-2 rounded-full interactive"
          >
            MU
          </Link>
          <div className="glass-nav px-2 py-1.5 rounded-full">
            <ThemeToggle />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed bottom-4 left-4 right-4 z-50"
      >
        <div className="max-w-md mx-auto">
          <div className="glass-nav rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/40 overflow-hidden">
            <div className="h-0.5 bg-stone-100 dark:bg-stone-900 w-full">
              <motion.div
                className="h-full bg-linear-to-r from-accent to-accent-light"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>

            <div className="flex items-center justify-around py-2 px-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="relative flex flex-col items-center justify-center min-w-12 py-2 px-1 rounded-xl interactive"
                    whileTap={{ scale: 0.88 }}
                  >
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          layoutId="mobileActiveBg"
                          className="absolute inset-0 bg-accent/10 rounded-xl border border-accent/20"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </AnimatePresence>
                    <span
                      className={`relative text-[9px] uppercase tracking-wider transition-all duration-200 ${
                        isActive
                          ? 'text-accent dark:text-accent-light font-semibold'
                          : 'text-stone-400 dark:text-stone-600'
                      }`}
                    >
                      {item.label.slice(0, 5)}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="mobileActiveDot"
                        className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-accent"
                        transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </div>
          <div className="h-[env(safe-area-inset-bottom)]" />
        </div>
      </motion.div>
    </>
  );
}
