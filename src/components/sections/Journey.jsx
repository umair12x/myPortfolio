'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const educationData = [
  {
    degree: 'BS Computer Science',
    institution: 'University of Agriculture, Faisalabad',
    period: '2022 - 2026',
    score: 'CGPA: 3.0+ / 4.0',
    status: 'Final Year',
    details: 'Specializing in full-stack development, system architecture, and agentic AI systems',
  },
  {
    degree: 'FSc Pre-Engineering',
    institution: 'Punjab Group of College, Jaranwala',
    period: '2020 - 2022',
    score: '80%',
    board: 'BISE Faisalabad',
    details: 'Major in Physics, Chemistry, Mathematics',
  },
  {
    degree: 'Matriculation (Science)',
    institution: 'The Center of Excellence, Govt. Higher Secondary School, Jaranwala',
    period: '2018 - 2020',
    score: '94%',
    board: 'BISE Faisalabad',
    details: 'Distinction in Science with outstanding academic performance',
    highlight: true,
  },
];

const certificationsData = [
  {
    name: 'Node.js & MongoDB: Developing Back-end Database Applications',
    issuer: 'Coursera',
    year: '2025',
    credential: 'Verified Certification',
  },
  {
    name: 'Full-Stack Development with MERN',
    issuer: 'Meta Backend Professional Certificate',
    year: '2024',
    credential: 'Specialization',
  },
  {
    name: 'Advanced React & Modern JavaScript',
    issuer: 'Frontend Masters',
    year: '2024',
    credential: 'Professional Track',
  },
];

const internshipsData = [
  {
    role: 'Full Stack Intern',
    company: 'DevelopersHub Corporation',
    period: '2024 - Present',
    location: 'Remote',
    type: 'Full-time',
    highlights: [
      'Engineered full-stack features using Next.js and Node.js/Express',
      'Designed REST APIs with clean MVC architecture',
      'Built reusable React component libraries reducing UI development time',
    ],
  },
  {
    role: 'Frontend Intern',
    company: 'Code Alpha',
    period: '2024',
    location: 'Remote',
    type: 'Internship',
    highlights: [
      'Delivered pixel-accurate responsive UI components from Figma specs',
      'Applied mobile-first CSS strategies',
      'Ensured cross-device UX consistency',
    ],
  },
];

export default function Journey() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeTab, setActiveTab] = useState('education');
  const [hoveredItem, setHoveredItem] = useState(null);

  const tabs = [
    { id: 'education', label: 'Education', count: educationData.length },
    { id: 'experience', label: 'Experience', count: internshipsData.length },
    { id: 'certifications', label: 'Certs', count: certificationsData.length },
  ];

  return (
    <section id="journey" className="py-28 md:py-40 relative" ref={ref}>
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="section-label">Background</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-display text-4xl md:text-5xl lg:text-6xl"
            >
              Academic &<br />
              <span className="heading-accent">Professional Journey.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex p-1 glass-card rounded-xl"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2.5 text-[11px] uppercase tracking-wider font-medium rounded-lg transition-all duration-300 interactive ${
                  activeTab === tab.id
                    ? 'text-charcoal dark:text-offwhite'
                    : 'text-ash hover:text-charcoal dark:hover:text-offwhite'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-accent/10 border border-accent/20 rounded-lg"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
                <span className="relative z-10 ml-1 text-[10px] opacity-50">({tab.count})</span>
              </button>
            ))}
          </motion.div>
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {educationData.map((edu, idx) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    onMouseEnter={() => setHoveredItem(`edu-${idx}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`group relative p-6 md:p-8 rounded-2xl glass-card card-hover overflow-hidden ${
                      edu.highlight ? 'border-accent/30' : ''
                    }`}
                  >
                    {edu.highlight && (
                      <div className="absolute -top-px left-6 px-3 py-1 bg-accent text-white text-[10px] uppercase tracking-wider font-semibold rounded-b-lg">
                        Distinction
                      </div>
                    )}

                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono text-accent text-sm">0{idx + 1}</span>
                          <h3 className="heading-display text-xl md:text-2xl">{edu.degree}</h3>
                        </div>
                        <p className="text-stone-600 dark:text-stone-400 font-medium mb-2">{edu.institution}</p>
                        <p className="text-sm text-ash leading-relaxed max-w-2xl">{edu.details}</p>
                      </div>

                      <div className="flex flex-col items-start md:items-end gap-2 min-w-[140px]">
                        <span className="text-xs uppercase tracking-wider text-ash font-mono">{edu.period}</span>
                        <div
                          className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${
                            edu.score.includes('94')
                              ? 'bg-accent/10 text-accent dark:text-accent-light'
                              : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                          }`}
                        >
                          {edu.score}
                        </div>
                        {edu.board && (
                          <span className="text-[10px] uppercase tracking-wider text-ash">{edu.board}</span>
                        )}
                        {edu.status && (
                          <span className="text-[10px] px-2 py-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full uppercase tracking-wider font-medium">
                            {edu.status}
                          </span>
                        )}
                      </div>
                    </div>

                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-accent"
                      initial={{ width: 0 }}
                      animate={{ width: hoveredItem === `edu-${idx}` ? '100%' : '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-center pt-6"
                >
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 glass-card rounded-full">
                    <span className="text-accent">★</span>
                    <span className="text-xs uppercase tracking-wider text-ash font-medium">
                      Top 5% Academic Performance in Matriculation
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {internshipsData.map((internship, idx) => (
                  <motion.div
                    key={internship.role}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group p-6 md:p-8 rounded-2xl glass-card card-hover"
                  >
                    <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-mono text-sm">
                          0{idx + 1}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h3 className="heading-display text-xl">{internship.role}</h3>
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-medium ${
                                internship.type === 'Full-time'
                                  ? 'bg-accent/10 text-accent dark:text-accent-light'
                                  : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                              }`}
                            >
                              {internship.type}
                            </span>
                          </div>
                          <p className="text-stone-600 dark:text-stone-400 font-medium">{internship.company}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-1">
                        <span className="text-xs uppercase tracking-wider text-ash font-mono">{internship.period}</span>
                        <span className="text-xs text-ash">{internship.location}</span>
                      </div>
                    </div>

                    <div className="space-y-2.5 pl-0 md:pl-14">
                      {internship.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="accent-dot mt-2 shrink-0" />
                          <p className="text-sm text-ash leading-relaxed">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'certifications' && (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-4"
              >
                {certificationsData.map((cert, idx) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="group p-6 rounded-2xl glass-card card-hover"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-sm">
                        ✓
                      </div>
                      <span className="text-xs font-mono text-ash">{cert.year}</span>
                    </div>

                    <h3 className="font-display font-bold tracking-tight mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-ash mb-3">{cert.issuer}</p>

                    <div className="flex items-center gap-2">
                      <span className="accent-dot" />
                      <span className="text-[10px] uppercase tracking-wider text-ash font-medium">
                        {cert.credential}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-stone-200 dark:border-stone-800/80"
        >
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: '2026', label: 'Graduation', desc: 'Expected' },
              { value: '2+', label: 'Years Exp', desc: 'Professional' },
              { value: '3+', label: 'Certifications', desc: 'Verified' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="heading-display text-2xl md:text-3xl mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider font-medium">{stat.label}</div>
                <div className="text-[10px] text-ash mt-0.5">{stat.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
