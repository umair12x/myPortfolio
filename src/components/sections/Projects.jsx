'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'E-Enrollment System',
    role: 'Lead Architect',
    description: 'Full-stack enrollment platform serving 20,000+ users. Replaced manual paperwork with digital workflow featuring 5-role RBAC system and automated PDF generation.',
    tech: ['MERN', 'RBAC', 'PDF Generation', 'JWT'],
    metrics: '20K+ users · 5 roles · 99.9% uptime',
    link: 'https://github.com/umair12x/eeForm',
  },
  {
    title: 'UAF Result Harvest',
    role: 'Creator',
    description: 'Playwright-powered scraping engine that auto-pulls LMS grades. Handles complex credit calculations and semester GPA aggregation.',
    tech: ['Playwright', 'Node.js', 'Web Scraping', 'Vercel'],
    metrics: 'Used by 500+ students · 100% manual data elimination',
    link: 'https://uafcgpaharvester.vercel.app/',
  },
  {
    title: 'AgriSense',
    role: 'Full-Stack + IoT',
    description: 'IoT sensor pipeline for real-time soil data + ML crop disease detection. Features AI fertilizer recommendations and community platform.',
    tech: ['IoT', 'ML', 'Docker', 'REST API', 'MERN'],
    metrics: 'Real-time · AI-powered · Containerized',
    link: 'https://github.com/ZAINAZHAR303/agrisence',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="relative py-28 md:py-40" ref={ref}>
      <div className="container-custom">
        <div className="mb-16 grid-custom">
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs tracking-wider uppercase text-ash">Work</span>
              <div className="w-12 h-px mt-3 bg-stone-300 dark:bg-stone-700" />
            </motion.div>
          </div>
          <div className="md:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold tracking-tighter md:text-5xl"
            >
              Selected projects.
            </motion.h2>
          </div>
        </div>
        
        <div className="space-y-20">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="items-start grid-custom">
                <div className="md:col-span-4">
                  <div className="space-y-2">
                    <span className="text-xs tracking-wider uppercase text-ash">{project.role}</span>
                    <h3 className="text-2xl font-bold tracking-tight transition-all duration-300 md:text-3xl group-hover:pl-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-6 md:col-span-7">
                  <p className="leading-relaxed text-ash">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded bg-stone-100 dark:bg-stone-900"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-100 dark:border-stone-900">
                    <span className="font-mono text-sm text-ash">{project.metrics}</span>
                    <motion.a
                      href={project.link}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-1 text-sm tracking-wider uppercase transition-all group-hover:gap-2"
                    >
                      Case Study <span>→</span>
                    </motion.a>
                  </div>
                </div>
              </div>
              
              {/* Decorative line that expands on hover */}
              <div className="absolute left-0 right-0 h-px overflow-hidden -bottom-4 bg-stone-200 dark:bg-stone-800">
                <motion.div
                  className="h-full bg-black dark:bg-white"
                  initial={{ width: '0%' }}
                  animate={{ width: hoveredIndex === idx ? '100%' : '0%' }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}