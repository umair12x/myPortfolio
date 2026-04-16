// components/sections/Skills.js
'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const skillCategories = [
  {
    name: 'Frontend',
    icon: '◈',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Next.js', level: 88 },
      { name: 'TypeScript', level: 60 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 80 },
    ]
  },
  {
    name: 'Backend',
    icon: '◆',
    skills: [
      { name: 'Node.js', level: 87 },
      { name: 'Express.js', level: 80 },
      { name: 'REST API Design', level: 90 },
      { name: 'GraphQL', level: 70 },
      { name: 'WebSockets', level: 60 },
    ]
  },
  {
    name: 'Database',
    icon: '◉',
    skills: [
      { name: 'MongoDB', level: 88 },
      { name: 'PostgreSQL', level: 65 },
      { name: 'Redis', level: 70 },
      { name: 'Database Design', level: 85 },
    ]
  },
  {
    name: 'AI & Data',
    icon: '⌘',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'OpenAI API', level: 75 },
      { name: 'LangChain', level: 60 },
      { name: 'Pandas', level: 80 },
      { name: 'Scikit-learn', level: 70 },
    ]
  },
  {
    name: 'DevOps',
    icon: '◇',
    skills: [
      { name: 'Docker', level: 50 },
      { name: 'AWS', level: 50 },
      { name: 'CI/CD', level: 80 },
      { name: 'Vercel', level: 90 },
    ]
  },
  {
    name: 'Testing',
    icon: '◎',
    skills: [
      { name: 'Playwright', level: 65 },
      { name: 'Jest', level: 50 },
    ]
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const avgLevel = Math.round(
    skillCategories[activeCategory].skills.reduce((a, b) => a + b.level, 0) / 
    skillCategories[activeCategory].skills.length
  );

  return (
    <section id="skills" className="py-28 md:py-40 relative overflow-hidden bg-stone-50 dark:bg-stone-950" ref={ref}>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-12 h-px bg-stone-400 dark:bg-stone-600" />
              <span className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-500 font-medium">
                Technical Expertise
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-stone-900 dark:text-stone-100"
            >
              Skills &<br />
              <span className="text-stone-400 dark:text-stone-600">Technologies.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-6 text-right"
          >
            <div>
              <div className="text-3xl font-bold tracking-tighter text-stone-900 dark:text-stone-100">
                {skillCategories.length}
              </div>
              <div className="text-xs uppercase tracking-wider text-stone-500">Categories</div>
            </div>
            <div className="w-px h-12 bg-stone-300 dark:bg-stone-700" />
            <div>
              <div className="text-3xl font-bold tracking-tighter text-stone-900 dark:text-stone-100">
                {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}+
              </div>
              <div className="text-xs uppercase tracking-wider text-stone-500">Technologies</div>
            </div>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Side - Category Navigation */}
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
                  className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 text-left group ${
                    activeCategory === idx
                      ? 'border-stone-900 dark:border-stone-100 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900'
                      : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-stone-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-lg ${activeCategory === idx ? 'opacity-100' : 'opacity-60'}`}>
                      {category.icon}
                    </span>
                    <span className="font-medium tracking-tight">{category.name}</span>
                  </div>
                  <span className={`text-xs font-mono ${activeCategory === idx ? 'opacity-70' : 'opacity-40'}`}>
                    {category.skills.length}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Skills Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8"
          >
            <div className="bg-white dark:bg-stone-900/30 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 md:p-8">
              {/* Category Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-stone-100 dark:border-stone-800">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skillCategories[activeCategory].icon}</span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                      {skillCategories[activeCategory].name}
                    </h3>
                    <p className="text-xs text-stone-500 uppercase tracking-wider mt-0.5">
                      Proficiency Overview
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold tracking-tighter text-stone-900 dark:text-stone-100">
                    {avgLevel}%
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-500">Average</div>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                <AnimatePresence mode="wait">
                  {skillCategories[activeCategory].skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: idx * 0.05 }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-stone-700 dark:text-stone-300 text-sm">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <motion.span
                            initial={false}
                            animate={{ 
                              opacity: hoveredSkill === skill.name ? 1 : 0,
                              x: hoveredSkill === skill.name ? 0 : 10
                            }}
                            className="text-xs font-mono text-stone-400"
                          >
                            {skill.level}%
                          </motion.span>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            skill.level >= 90 ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                            skill.level >= 80 ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                            skill.level >= 70 ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                            'bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400'
                          }`}>
                            {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Proficient' : 'Intermediate'}
                          </span>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-2 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                          className={`h-full rounded-full transition-all duration-300 ${
                            skill.level >= 90 ? 'bg-emerald-500' :
                            skill.level >= 80 ? 'bg-blue-500' :
                            skill.level >= 70 ? 'bg-amber-500' :
                            'bg-stone-400'
                          }`}
                        >
                          {/* Shimmer Effect */}
                          <motion.div
                            className="h-full w-full bg-linear-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Category Footer */}
              <div className="mt-8 pt-6 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                <span className="text-xs text-stone-500 uppercase tracking-wider">
                  {skillCategories[activeCategory].skills.length} skills mastered
                </span>
                <div className="flex gap-1">
                  {skillCategories.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveCategory(idx)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        activeCategory === idx ? 'bg-stone-900 dark:bg-stone-100 w-4' : 'bg-stone-300 dark:bg-stone-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom - Tech Stack Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-12 border-t border-stone-200 dark:border-stone-800"
        >
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.2em] text-stone-500 font-medium">
              Core Stack
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Python', 'AI/ML'].map((tech, idx) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + idx * 0.05 }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="px-4 py-2 text-xs font-medium border border-stone-200 dark:border-stone-800 rounded-full text-stone-600 dark:text-stone-400 bg-white dark:bg-stone-900/50 hover:border-stone-400 dark:hover:border-stone-600 hover:text-stone-900 dark:hover:text-stone-200 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '2+', label: 'Years Experience', desc: 'Full-stack development' },
            { value: '15+', label: 'Projects Completed', desc: 'Production applications' },
            { value: '10K+', label: 'Users Served', desc: 'Scalable systems' },
            { value: '100%', label: 'Commitment', desc: 'To excellence' }
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className="text-center p-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/30"
            >
              <div className="text-3xl font-bold tracking-tighter text-stone-900 dark:text-stone-100 mb-1">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-stone-900 dark:text-stone-100 font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-[10px] text-stone-500">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}