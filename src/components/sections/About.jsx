'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { label: 'Users Scaled', value: '20K+' },
    { label: 'Production Deploys', value: '15+' },
    { label: 'Open Source', value: 'Active' },
    { label: 'Timezones', value: '4' },
  ];

  return (
    <section id="about" className="py-28 md:py-40 relative" ref={ref}>
      <div className="container-custom">
        <div className="grid-custom">
          {/* Side label */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <span className="text-xs uppercase tracking-wider text-ash">Edge</span>
              <div className="w-12 h-px bg-stone-300 dark:bg-stone-700 mt-3" />
            </motion.div>
          </div>
          
          {/* Content */}
          <div className="md:col-span-8 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
                I build digital <br />
                <span className="text-stone-400 dark:text-stone-600">products that scale.</span>
              </h2>
              <p className="text-lg text-ash leading-relaxed max-w-xl">
                Final-year Computer Science student with production-level experience. 
                I don't just write code — I architect systems that serve real users. 
                From 20,000+ user enrollment platforms to AI-powered IoT systems, 
                I deliver end-to-end solutions with obsessive attention to detail.
              </p>
            </motion.div>
            
            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-8 pt-8 border-t border-stone-200 dark:border-stone-800"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold tracking-tighter">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider text-ash">{stat.label}</div>
                </div>
              ))}
            </motion.div>
            
            {/* Work Ethos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <div className="flex gap-4 flex-wrap">
                {['Remote-first', 'Async workflow', 'Cross-timezone', 'End-to-end ownership'].map((item) => (
                  <span key={item} className="text-sm px-3 py-1.5 border border-stone-200 dark:border-stone-800 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}