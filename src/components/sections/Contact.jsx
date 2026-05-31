'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaCopy,
  FaCheck,
} from 'react-icons/fa6';

const socialLinks = [
  { platform: 'GitHub', handle: 'umair12x', url: 'https://github.com/umair12x', icon: FaGithub },
  { platform: 'LinkedIn', handle: 'umair12x', url: 'https://linkedin.com/in/umair12x', icon: FaLinkedin },
  { platform: 'X', handle: '@umair12x', url: 'https://x.com/umair12x', icon: FaXTwitter },
  { platform: 'Instagram', handle: '@umair12x', url: 'https://instagram.com/umair12x', icon: FaInstagram },
  { platform: 'Facebook', handle: 'umair12x', url: 'https://facebook.com/umair12x', icon: FaFacebook },
  { platform: 'TikTok', handle: '@umair12x', url: 'https://tiktok.com/@umair12x', icon: FaTiktok },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
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

  return (
    <section id="contact" className="relative py-28 md:py-40" ref={ref}>
      <div className="absolute inset-0 mesh-gradient dark:mesh-gradient-dark opacity-50" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col gap-8 mb-16 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="section-label">Get in Touch</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-display text-4xl md:text-5xl lg:text-6xl"
            >
              Let&apos;s build<br />
              <span className="heading-accent">something great.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 px-4 py-2.5 glass-card rounded-full h-fit"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-accent" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
            </span>
            <span className="text-xs font-medium tracking-wider uppercase text-ash">Available for work</span>
          </motion.div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="p-6 md:p-8 rounded-2xl glass-card card-hover group">
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <motion.button
                  onClick={handleCopyEmail}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-stone-200 dark:border-stone-700 text-ash hover:border-accent hover:text-accent transition-all duration-300 interactive"
                >
                  {copiedEmail ? <FaCheck className="w-3 h-3" /> : <FaCopy className="w-3 h-3" />}
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </motion.button>
              </div>
              <h3 className="mb-2 text-[10px] tracking-[0.2em] uppercase text-ash">Email</h3>
              <a
                href="mailto:umairim24@gmail.com"
                className="font-mono text-lg md:text-xl break-all hover:text-accent transition-colors duration-300 interactive"
              >
                umairim24@gmail.com
              </a>
            </div>

            <div className="p-6 md:p-8 rounded-2xl glass-card card-hover group">
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                  <FaPhone className="w-5 h-5" />
                </div>
                <div className="flex gap-2">
                  <motion.button
                    onClick={handleCopyPhone}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-stone-200 dark:border-stone-700 text-ash hover:border-accent hover:text-accent transition-all duration-300 interactive"
                  >
                    {copiedPhone ? <FaCheck className="w-3 h-3" /> : <FaCopy className="w-3 h-3" />}
                    {copiedPhone ? 'Copied!' : 'Copy'}
                  </motion.button>
                  <motion.a
                    href="https://wa.me/923095330695"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-accent text-white hover:bg-accent-dark transition-all duration-300 interactive"
                  >
                    <FaWhatsapp className="w-3 h-3" />
                    WhatsApp
                  </motion.a>
                </div>
              </div>
              <h3 className="mb-2 text-[10px] tracking-[0.2em] uppercase text-ash">Phone</h3>
              <a
                href="tel:+923095330695"
                className="font-mono text-lg md:text-xl hover:text-accent transition-colors duration-300 interactive"
              >
                +92 309 5330695
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="section-label mb-6">Social Profiles</h3>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
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
                    whileTap={{ scale: 0.97 }}
                    className="relative p-5 glass-card card-hover rounded-xl interactive"
                  >
                    <div className="flex flex-col items-center gap-3 text-center">
                      <Icon
                        className={`w-5 h-5 transition-all duration-300 ${
                          hoveredSocial === social.platform ? 'text-accent scale-110' : 'text-ash'
                        }`}
                      />
                      <div>
                        <div className="text-[11px] uppercase tracking-wider font-semibold font-display mb-0.5">
                          {social.platform}
                        </div>
                        <div className="text-[10px] text-ash font-mono">{social.handle}</div>
                      </div>
                    </div>

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: hoveredSocial === social.platform ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                );
              })}
            </div>

            <div className="pt-6 mt-6 border-t border-stone-200 dark:border-stone-800/80">
              <div className="flex items-center justify-between text-[10px] tracking-wider uppercase text-ash">
                <span>Response Time</span>
                <span className="font-medium text-accent">Usually within 24 hours</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center justify-between gap-4 pt-10 mt-20 border-t border-stone-200 dark:border-stone-800/80 md:flex-row"
        >
          <div className="flex items-center gap-2 text-[10px] tracking-wider uppercase text-ash">
            <span className="accent-dot" />
            <span>Based in Faisalabad, Pakistan</span>
          </div>

          <p className="text-[10px] tracking-wider uppercase text-ash">© 2026 Muhammad Umair</p>

          <div className="flex items-center gap-2 text-[10px] tracking-wider uppercase text-ash">
            <span>Built with</span>
            <span className="font-medium text-accent">Next.js</span>
            <span>&</span>
            <span className="font-medium text-accent">Tailwind</span>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
