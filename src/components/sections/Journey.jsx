"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const educationData = [
  {
    degree: "BS Computer Science",
    institution: "University of Agriculture, Faisalabad",
    period: "2022 - 2026",
    score: "CGPA: 3.0+ / 4.0",
    status: "Final Year",
    details: "Specializing in full-stack development, system architecture, and agentic AI systems",
  },
  {
    degree: "FSc Pre-Engineering",
    institution: "Punjab Group of College, Jaranwala",
    period: "2020 - 2022",
    score: "80%",
    board: "BISE Faisalabad",
    details: "Major in Physics, Chemistry, Mathematics",
  },
  {
    degree: "Matriculation (Science)",
    institution: "The Center of Excellence, Govt. Higher Secondary School, Jaranwala",
    period: "2018 - 2020",
    score: "94%",
    board: "BISE Faisalabad",
    details: "Distinction in Science with outstanding academic performance",
    highlight: true,
  },
];

const certificationsData = [
  {
    name: "Node.js & MongoDB: Developing Back-end Database Applications",
    issuer: "Coursera",
    year: "2025",
    credential: "Verified Certification",
  },
  {
    name: "Full-Stack Development with MERN",
    issuer: "Meta Backend Professional Certificate",
    year: "2024",
    credential: "Specialization",
  },
  {
    name: "Advanced React & Modern JavaScript",
    issuer: "Frontend Masters",
    year: "2024",
    credential: "Professional Track",
  },
];

const internshipsData = [
  {
    role: "Full Stack Intern",
    company: "DevelopersHub Corporation",
    period: "2024 - Present",
    location: "Remote",
    type: "Full-time",
    highlights: [
      "Engineered full-stack features using Next.js and Node.js/Express",
      "Designed REST APIs with clean MVC architecture",
      "Built reusable React component libraries reducing UI development time",
    ],
  },
  {
    role: "Frontend Intern",
    company: "Code Alpha",
    period: "2024",
    location: "Remote",
    type: "Internship",
    highlights: [
      "Delivered pixel-accurate responsive UI components from Figma specs",
      "Applied mobile-first CSS strategies",
      "Ensured cross-device UX consistency",
    ],
  },
];

const sectionIcons = {
  education: "◈",
  experience: "◆",
  certifications: "◎",
};

export default function Journey() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("education");
  const [hoveredItem, setHoveredItem] = useState(null);

  const tabs = [
    { id: "education", label: "Education", count: educationData.length },
    { id: "experience", label: "Experience", count: internshipsData.length },
    { id: "certifications", label: "Certifications", count: certificationsData.length },
  ];

  return (
    <section id="journey" className="py-28 md:py-40 relative bg-stone-50 dark:bg-stone-950" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px)`,
          backgroundSize: '100px 100%'
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
              <span className="text-xs uppercase tracking-[0.2em] text-stone-500 font-medium">
                Background
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-stone-900 dark:text-stone-100"
            >
              Academic &<br />
              <span className="text-stone-400 dark:text-stone-600">Professional Journey.</span>
            </motion.h2>
          </div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex p-1 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-stone-900 dark:text-stone-100"
                    : "text-stone-500 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-stone-100 dark:bg-stone-800 rounded-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
                <span className="relative z-10 ml-1.5 text-[10px] opacity-60">({tab.count})</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Content Area */}
        <div className="min-h-125">
          <AnimatePresence mode="wait">
            {/* Education Tab */}
            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid gap-6">
                  {educationData.map((edu, idx) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      onMouseEnter={() => setHoveredItem(`edu-${idx}`)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`group relative p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                        edu.highlight
                          ? "border-stone-400 dark:border-stone-600 bg-white dark:bg-stone-900"
                          : "border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 hover:border-stone-300 dark:hover:border-stone-700"
                      }`}
                    >
                      {edu.highlight && (
                        <div className="absolute -top-3 left-6 px-3 py-1 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-[10px] uppercase tracking-wider font-medium rounded-full">
                          Distinction
                        </div>
                      )}
                      
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xl text-stone-400 dark:text-stone-600 font-mono">
                              {sectionIcons.education}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                              {edu.degree}
                            </h3>
                          </div>
                          <p className="text-stone-600 dark:text-stone-400 font-medium mb-3">
                            {edu.institution}
                          </p>
                          <p className="text-sm text-stone-500 dark:text-stone-500 leading-relaxed max-w-2xl">
                            {edu.details}
                          </p>
                        </div>
                        
                        <div className="flex flex-col items-start md:items-end gap-2 min-w-35">
                          <span className="text-xs uppercase tracking-wider text-stone-500">
                            {edu.period}
                          </span>
                          <div className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${
                            edu.score.includes("94") 
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                              : "bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300"
                          }`}>
                            {edu.score}
                          </div>
                          {edu.board && (
                            <span className="text-[10px] uppercase tracking-wider text-stone-400">
                              {edu.board}
                            </span>
                          )}
                          {edu.status && (
                            <span className="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 rounded-full uppercase tracking-wider font-medium">
                              {edu.status}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Progress line animation */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-stone-900 dark:bg-stone-100"
                        initial={{ width: 0 }}
                        animate={{ width: hoveredItem === `edu-${idx}` ? "100%" : "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Achievement Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-center pt-8"
                >
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-stone-900 rounded-full border border-stone-200 dark:border-stone-800 shadow-sm">
                    <span className="text-lg">🏆</span>
                    <span className="text-xs uppercase tracking-wider text-stone-600 dark:text-stone-400 font-medium">
                      Top 5% Academic Performance in Matriculation
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Experience Tab */}
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {internshipsData.map((internship, idx) => (
                  <motion.div
                    key={internship.role}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group p-6 md:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-xl">
                          {sectionIcons.experience}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                              {internship.role}
                            </h3>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-medium ${
                              internship.type === "Full-time" 
                                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                                : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            }`}>
                              {internship.type}
                            </span>
                          </div>
                          <p className="text-stone-600 dark:text-stone-400 font-medium">
                            {internship.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-1">
                        <span className="text-xs uppercase tracking-wider text-stone-500 font-mono">
                          {internship.period}
                        </span>
                        <span className="text-xs text-stone-400">{internship.location}</span>
                      </div>
                    </div>

                    <div className="space-y-3 pl-16">
                      {internship.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-600 mt-2 shrink-0" />
                          <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Certifications Tab */}
            {activeTab === "certifications" && (
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
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="group p-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 hover:border-stone-300 dark:hover:border-stone-700 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-lg">
                        {sectionIcons.certifications}
                      </div>
                      <span className="text-xs font-mono text-stone-500">{cert.year}</span>
                    </div>
                    
                    <h3 className="font-bold tracking-tight text-stone-900 dark:text-stone-100 mb-2 line-clamp-2 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-stone-500 mb-3">{cert.issuer}</p>
                    
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">
                        {cert.credential}
                      </span>
                    </div>
                  </motion.div>
                ))}

                {/* View All Link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="md:col-span-2 flex justify-center pt-4"
                >
                  <button className="group flex items-center gap-2 text-xs uppercase tracking-wider text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                    View All Credentials
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Timeline Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 pt-8 border-t border-stone-200 dark:border-stone-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { value: "2026", label: "Graduation", desc: "Expected" },
              { value: "2+", label: "Years Exp", desc: "Professional" },
              { value: "3+", label: "Certifications", desc: "Verified" },
            
            ].map((stat, idx) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold tracking-tighter text-stone-900 dark:text-stone-100 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-stone-900 dark:text-stone-100 font-medium">
                  {stat.label}
                </div>
                <div className="text-[10px] text-stone-500 mt-0.5">{stat.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}