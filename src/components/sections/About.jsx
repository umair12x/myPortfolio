'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { label: 'Users Scaled', value: '20K+', icon: '↗' },
  { label: 'Production Deploys', value: '15+', icon: '◆' },
  { label: 'Open Source', value: 'Active', icon: '◎' },
  { label: 'Timezones', value: '4', icon: '◉' },
];

const ethos = [
  { title: 'Remote-first', desc: 'Distributed collaboration' },
  { title: 'Async workflow', desc: 'Deep focus, clear docs' },
  { title: 'Cross-timezone', desc: 'Global team experience' },
  { title: 'End-to-end', desc: 'Full ownership mindset' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-28 md:py-40 relative" ref={ref}>
      <div className="container-custom">
        <div className="grid-custom items-start">
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="sticky top-32 space-y-6"
            >
              <span className="section-label">About</span>
              <p className="text-sm text-ash leading-relaxed max-w-xs">
                Final-year CS student building production-grade systems with real-world impact.
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-8 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl">
                I build digital{' '}
                <span className="heading-accent">products that scale.</span>
              </h2>
              <p className="text-lg text-ash leading-relaxed max-w-2xl text-balance">
                Final-year Computer Science student with production-level experience. I don&apos;t
                just write code — I architect systems that serve real users. From 20,000+ user
                enrollment platforms to AI-powered IoT systems, I deliver end-to-end solutions
                with obsessive attention to detail.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="p-5 md:p-6 rounded-2xl glass-card card-hover group"
                >
                  <span className="text-accent text-sm mb-3 block group-hover:scale-110 transition-transform ">
                    {stat.icon}
                  </span>
                  <div className="heading-display text-3xl md:text-4xl mb-1">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-ash">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid sm:grid-cols-2 gap-3"
            >
              {ethos.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.55 + i * 0.06 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-stone-200/60 dark:border-stone-800/60 hover:border-accent/30 transition-colors duration-300"
                >
                  <span className="accent-dot mt-1.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold font-display">{item.title}</div>
                    <div className="text-xs text-ash mt-0.5">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
