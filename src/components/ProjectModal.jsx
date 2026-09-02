import React, { useEffect } from "react";
import { X, Github, Check, Sparkles, Layers, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center pt-24 p-4 overflow-y-auto cursor-pointer"
        onClick={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={(event) => event.stopPropagation()}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[#0f172a] border border-slate-800 rounded-3xl shadow-2xl overflow-y-auto text-slate-100 cursor-default"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 cursor-pointer p-2 rounded-full bg-slate-800/80 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Image / Banner */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src =
                  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80";
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/90 text-white uppercase tracking-wider">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Featured Project
                  </span>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Tag Pills & Quick CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-blue-300 border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>

            {/* Metrics Grid */}
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center"
                  >
                    <span className="block text-xl font-bold text-blue-400">
                      {m.value}
                    </span>
                    <span className="text-xs text-slate-400 mt-1 block">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Detailed Description */}
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                <span>Project Overview</span>
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Features & Highlights */}
            {project.highlights && (
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>Key Features & Innovations</span>
                </h4>
                <ul className="grid grid-cols-1 gap-2.5">
                  {project.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-sm text-slate-300"
                    >
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
