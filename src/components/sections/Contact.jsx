'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const socialLinks = [
  { 
    platform: 'GitHub', 
    handle: 'umair12x', 
    url: 'https://github.com/umair12x',
    icon: '◈'
  },
  { 
    platform: 'LinkedIn', 
    handle: 'umair12x', 
    url: 'https://linkedin.com/in/umair12x',
    icon: '◆'
  },
  { 
    platform: 'X', 
    handle: '@umair12x', 
    url: 'https://x.com/umair12x',
    icon: '◉'
  },
  { 
    platform: 'Instagram', 
    handle: '@umair12x', 
    url: 'https://instagram.com/umair12x',
    icon: '◇'
  },
  { 
    platform: 'Facebook', 
    handle: 'umair12x', 
    url: 'https://facebook.com/umair12x',
    icon: '⌘'
  },
  { 
    platform: 'TikTok', 
    handle: '@umair12x', 
    url: 'https://tiktok.com/@umair12x',
    icon: '◎'
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('umairim24@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+923095330695');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/923095330695', '_blank');
  };

  return (
    <section id="contact" className="relative bg-white py-28 md:py-40 dark:bg-black" ref={ref}>
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-stone-50/50 dark:via-stone-950/50 to-transparent" />

      <div className="container relative z-10 px-6 mx-auto lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-12 mb-16 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-12 h-px bg-stone-400 dark:bg-stone-600" />
              <span className="text-xs uppercase tracking-[0.2em] text-stone-500 font-medium">
                Get in Touch
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-stone-900 dark:text-stone-100 leading-[0.9]"
            >
              Let's build<br />
              <span className="text-stone-400 dark:text-stone-600">something great.</span>
            </motion.h2>
          </div>

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 px-4 py-2 border rounded-full border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50 h-fit"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-500" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium tracking-wider uppercase text-stone-600 dark:text-stone-400">
              Available for work
            </span>
          </motion.div>
        </div>

        {/* Main Contact Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Direct Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Email Card */}
            <div className="p-6 transition-all duration-300 border group md:p-8 rounded-2xl border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/30 hover:border-stone-300 dark:hover:border-stone-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 text-lg rounded-xl bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
                  ✉
                </div>
                <motion.button
                  onClick={handleCopyEmail}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border border-stone-300 dark:border-stone-700 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:border-stone-900 dark:hover:border-stone-100 transition-all duration-300"
                >
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </motion.button>
              </div>
              <h3 className="mb-2 text-xs tracking-wider uppercase text-stone-500">Email</h3>
              <a 
                href="mailto:umairim24@gmail.com"
                className="font-mono text-xl break-all transition-colors md:text-2xl text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-400"
              >
                umairim24@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-6 transition-all duration-300 border group md:p-8 rounded-2xl border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/30 hover:border-stone-300 dark:hover:border-stone-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 text-lg rounded-xl bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
                  ☎
                </div>
                <div className="flex gap-2">
                  <motion.button
                    onClick={handleCopyPhone}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border border-stone-300 dark:border-stone-700 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:border-stone-900 dark:hover:border-stone-100 transition-all duration-300"
                  >
                    {copiedPhone ? 'Copied!' : 'Copy'}
                  </motion.button>
                  <motion.button
                    onClick={handleWhatsApp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-black text-white hover:bg-emerald-600 transition-all duration-300"
                  >
                    WhatsApp
                  </motion.button>
                </div>
              </div>
              <h3 className="mb-2 text-xs tracking-wider uppercase text-stone-500">Phone</h3>
              <a 
                href="tel:+923095330695"
                className="font-mono text-xl transition-colors md:text-2xl text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-400"
              >
                +92 309 5330695
              </a>
            </div>
          </motion.div>

          {/* Right Column - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xs uppercase tracking-[0.2em] text-stone-500 font-medium mb-6">
              Social Profiles
            </h3>
            
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                  onMouseEnter={() => setHoveredSocial(social.platform)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative p-4 transition-all duration-300 bg-white border group rounded-xl border-stone-200 dark:border-stone-800 dark:bg-stone-900/50 hover:border-stone-400 dark:hover:border-stone-600"
                >
                  <div className="flex flex-col items-center gap-3 text-center">
                    <span className={`text-2xl transition-all duration-300 ${
                      hoveredSocial === social.platform 
                        ? 'text-stone-900 dark:text-stone-100 scale-110' 
                        : 'text-stone-400 dark:text-stone-600'
                    }`}>
                      {social.icon}
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-stone-900 dark:text-stone-100 font-medium mb-0.5">
                        {social.platform}
                      </div>
                      <div className="text-[10px] text-stone-500 font-mono">
                        {social.handle}
                      </div>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900 dark:bg-stone-100"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredSocial === social.platform ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="pt-8 mt-8 border-t border-stone-200 dark:border-stone-800">
              <div className="flex items-center justify-between text-xs tracking-wider uppercase text-stone-500">
                <span>Response Time</span>
                <span className="font-medium text-stone-900 dark:text-stone-100">Usually within 24 hours</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center justify-between gap-4 pt-8 mt-20 border-t border-stone-200 dark:border-stone-800 md:flex-row"
        >
          <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-stone-500">
            <span className="w-2 h-2 rounded-full bg-stone-300 dark:bg-stone-700" />
            <span>Based in Faisalabad, Pakistan</span>
          </div>
          
          <p className="text-xs tracking-wider uppercase text-stone-400">
            © 2025 Muhammad Umair
          </p>

          <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-stone-500">
            <span>Built with</span>
            <span className="font-medium text-stone-900 dark:text-stone-100">Next.js</span>
            <span>&</span>
            <span className="font-medium text-stone-900 dark:text-stone-100">Tailwind</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}