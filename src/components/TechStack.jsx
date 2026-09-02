import React, { useState } from "react";
import {
  Atom,
  Globe,
  Code2,
  Palette,
  Layers,
  Server,
  Terminal,
  Cpu,
  Zap,
  Database,
  HardDrive,
  Cloud,
  Box,
  GitBranch,
  ShieldCheck,
  FileCode,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { techCategories, techStackData } from "../data/portfolioData";

const iconMap = {
  Atom: Atom,
  Globe: Globe,
  Code2: Code2,
  Palette: Palette,
  Layers: Layers,
  Server: Server,
  Terminal: Terminal,
  Cpu: Cpu,
  Zap: Zap,
  Database: Database,
  HardDrive: HardDrive,
  Cloud: Cloud,
  Box: Box,
  GitBranch: GitBranch,
  ShieldCheck: ShieldCheck,
  FileCode: FileCode,
};

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTech =
    selectedCategory === "all"
      ? techStackData
      : techStackData.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="tech-stack"
      className="py-20 relative bg-slate-950/50 border-t border-slate-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tech Stack & Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools & Frameworks I Work With Daily
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Modern, battle-tested technologies engineered for performance,
            maintainability, and seamless scalability.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {techCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid of Tech Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {filteredTech.map((tech, index) => {
              const IconComponent = iconMap[tech.icon] || Code2;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                  className="p-5 rounded-2xl glass-card flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300 min-h-[112px]"
                >
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${tech.color} text-white shadow-md shrink-0`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-blue-400 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {tech.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Feature Box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-950 border border-blue-900/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm sm:text-base">
                Need a custom technical stack?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                I adapt quickly to specialized frameworks, cloud providers, and
                proprietary legacy codebases.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors whitespace-nowrap shadow-lg shadow-blue-600/20"
          >
            Discuss Requirements
          </a>
        </div>
      </motion.div>
    </section>
  );
}
