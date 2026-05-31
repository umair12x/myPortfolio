'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    title: 'E-Enrollment System',
    role: 'Lead Architect',
    description:
      'Full-stack enrollment platform serving 20,000+ users. Replaced manual paperwork with digital workflow featuring 5-role RBAC system and automated PDF generation.',
    tech: ['MERN', 'RBAC', 'PDF Generation', 'JWT'],
    metrics: '20K+ users · 5 roles · 99.9% uptime',
    link: 'https://github.com/umair12x/eeForm',
    accent: 'from-teal-500/20 to-emerald-500/10',
  },
  {
    title: 'UAF Result Harvest',
    role: 'Creator',
    description:
      'Playwright-powered scraping engine that auto-pulls LMS grades. Handles complex credit calculations and semester GPA aggregation.',
    tech: ['Playwright', 'Node.js', 'Web Scraping', 'Vercel'],
    metrics: '500+ students · 100% manual data elimination',
    link: 'https://uafcgpaharvester.vercel.app/',
    accent: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    title: 'AgriSense',
    role: 'Full-Stack + IoT',
    description:
      'IoT sensor pipeline for real-time soil data + ML crop disease detection. Features AI fertilizer recommendations and community platform.',
    tech: ['IoT', 'ML', 'Docker', 'REST API', 'MERN'],
    metrics: 'Real-time · AI-powered · Containerized',
    link: 'https://github.com/ZAINAZHAR303/agrisence',
    accent: 'from-green-500/20 to-teal-500/10',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="relative py-28 md:py-40 bg-surface-2/50 dark:bg-surface-dark-2/50" ref={ref}>
      <div className="absolute inset-0 mesh-gradient dark:mesh-gradient-dark opacity-40" />

      <div className="container-custom relative z-10">
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="section-label">Selected Work</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-display text-4xl md:text-5xl lg:text-6xl max-w-2xl"
          >
            Projects that{' '}
            <span className="heading-accent">make an impact.</span>
          </motion.h2>
        </div>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group relative interactive"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 md:p-8 lg:p-10 rounded-3xl glass-card card-hover overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative grid md:grid-cols-12 gap-6 md:gap-8 items-start">
                  <div className="md:col-span-1">
                    <span className="font-mono text-sm text-accent/60 group-hover:text-accent transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="md:col-span-4 space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-medium">
                      {project.role}
                    </span>
                    <h3 className="heading-display text-2xl md:text-3xl lg:text-4xl group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <div className="md:col-span-7 space-y-5">
                    <p className="text-ash leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-stone-100/80 dark:bg-stone-800/60 text-stone-600 dark:text-stone-400 border border-stone-200/50 dark:border-stone-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200/60 dark:border-stone-800/60">
                      <span className="font-mono text-xs text-ash">{project.metrics}</span>
                      <span className="flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-accent group-hover:gap-3 transition-all duration-300">
                        View Project
                        <motion.span animate={hoveredIndex === idx ? { x: 4 } : { x: 0 }}>→</motion.span>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
