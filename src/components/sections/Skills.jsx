'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Next.js', level: 88 },
      { name: 'TypeScript', level: 60 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 80 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 87 },
      { name: 'Express.js', level: 80 },
      { name: 'REST API Design', level: 90 },
      { name: 'GraphQL', level: 70 },
      { name: 'WebSockets', level: 60 },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'MongoDB', level: 88 },
      { name: 'PostgreSQL', level: 65 },
      { name: 'Redis', level: 70 },
      { name: 'Database Design', level: 85 },
    ],
  },
  {
    name: 'AI & Data',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'OpenAI API', level: 75 },
      { name: 'LangChain', level: 60 },
      { name: 'Pandas', level: 80 },
      { name: 'Scikit-learn', level: 70 },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      { name: 'Docker', level: 50 },
      { name: 'AWS', level: 50 },
      { name: 'CI/CD', level: 80 },
      { name: 'Vercel', level: 90 },
    ],
  },
  {
    name: 'Testing',
    skills: [
      { name: 'Playwright', level: 65 },
      { name: 'Jest', level: 50 },
    ],
  },
];

function getLevelLabel(level) {
  if (level >= 90) return 'Expert';
  if (level >= 80) return 'Advanced';
  if (level >= 70) return 'Proficient';
  return 'Intermediate';
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const avgLevel = Math.round(
    skillCategories[activeCategory].skills.reduce((a, b) => a + b.level, 0) /
      skillCategories[activeCategory].skills.length
  );

  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-28 md:py-40 relative overflow-hidden bg-surface-2/50 dark:bg-surface-dark-2/50" ref={ref}>
      <div className="absolute inset-0 mesh-gradient dark:mesh-gradient-dark opacity-30" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="section-label">Technical Expertise</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-display text-4xl md:text-5xl lg:text-6xl"
            >
              Skills &<br />
              <span className="heading-accent">Technologies.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-6"
          >
            <div className="text-right">
              <div className="heading-display text-3xl gradient-text">{skillCategories.length}</div>
              <div className="text-[10px] uppercase tracking-wider text-ash">Categories</div>
            </div>
            <div className="w-px h-12 bg-stone-200 dark:bg-stone-800" />
            <div className="text-right">
              <div className="heading-display text-3xl gradient-text">{totalSkills}+</div>
              <div className="text-[10px] uppercase tracking-wider text-ash">Technologies</div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-32 space-y-2">
              {skillCategories.map((category, idx) => (
                <motion.button
                  key={category.name}
                  onClick={() => setActiveCategory(idx)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 text-left interactive ${
                    activeCategory === idx
                      ? 'border-accent/40 bg-accent/5 dark:bg-accent/10'
                      : 'border-stone-200/60 dark:border-stone-800/60 glass-card hover:border-accent/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs ${activeCategory === idx ? 'text-accent' : 'text-ash'}`}
                    >
                      0{idx + 1}
                    </span>
                    <span
                      className={`font-display font-semibold tracking-tight ${
                        activeCategory === idx ? 'text-accent dark:text-accent-light' : ''
                      }`}
                    >
                      {category.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-ash">{category.skills.length}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8"
          >
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-stone-200/60 dark:border-stone-800/60">
                <div>
                  <h3 className="heading-display text-xl">{skillCategories[activeCategory].name}</h3>
                  <p className="text-[10px] text-ash uppercase tracking-wider mt-1">Proficiency Overview</p>
                </div>
                <div className="text-right">
                  <div className="heading-display text-2xl gradient-text">{avgLevel}%</div>
                  <div className="text-[10px] uppercase tracking-wider text-ash">Average</div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  {skillCategories[activeCategory].skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <motion.span
                            initial={false}
                            animate={{
                              opacity: hoveredSkill === skill.name ? 1 : 0,
                              x: hoveredSkill === skill.name ? 0 : 8,
                            }}
                            className="text-xs font-mono text-accent"
                          >
                            {skill.level}%
                          </motion.span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                              skill.level >= 90
                                ? 'bg-accent/10 text-accent'
                                : skill.level >= 80
                                  ? 'bg-teal-500/10 text-teal-600 dark:text-teal-400'
                                  : skill.level >= 70
                                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                                    : 'bg-stone-100 dark:bg-stone-800 text-ash'
                            }`}
                          >
                            {getLevelLabel(skill.level)}
                          </span>
                        </div>
                      </div>

                      <div className="h-1.5 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-linear-to-r from-accent to-accent-light relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent animate-shimmer" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 pt-6 border-t border-stone-200/60 dark:border-stone-800/60 flex items-center justify-between">
                <span className="text-[10px] text-ash uppercase tracking-wider">
                  {skillCategories[activeCategory].skills.length} skills in this category
                </span>
                <div className="flex gap-1.5">
                  {skillCategories.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveCategory(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 interactive ${
                        activeCategory === idx ? 'w-5 bg-accent' : 'w-1.5 bg-stone-300 dark:bg-stone-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-12 border-t border-stone-200 dark:border-stone-800/80"
        >
          <div className="text-center mb-8">
            <span className="section-label justify-center">Core Stack</span>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Python', 'AI/ML'].map(
              (tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + idx * 0.04 }}
                  whileHover={{ y: -2 }}
                  className="px-4 py-2 text-xs font-medium glass-card rounded-full text-ash hover:text-accent hover:border-accent/30 transition-all duration-300 interactive"
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
