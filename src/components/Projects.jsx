import React, { useState } from "react";
import {
  Github,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
  Layers,
  FolderGit2,
  Maximize2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projectCategories, projectsData } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((item) => item.category === selectedCategory);
  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  const handleToggleShow = () => {
    if (showAll) {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setShowAll(!showAll);
  };

  return (
    <section id="projects" className="py-24 relative bg-[#0b0f19]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Crafted Solutions & Real Applications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore recent web applications, complex dashboards, and backend
            architectures built with modern engineering practices.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setShowAll(false);
              }}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
              showAll && selectedCategory === "all"
                ? "lg:[&>*:last-child]:col-start-2"
                : ""
            }`}
          >
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                transition={{
                  duration: 0.35,
                  delay: index > 2 ? (index - 2) * 0.06 : 0,
                }}
                className="group rounded-3xl glass-card overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
              >
                <div>
                  {/* Image Header with Overlay */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src =
                          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80";
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-black/30" />

                    {/* Featured Tag */}
                    {project.featured && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-amber-500/20 border border-amber-500/40 text-amber-300 backdrop-blur-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Featured</span>
                      </div>
                    )}

                    {/* View Details Quick Button */}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-slate-900/80 text-white border border-slate-700 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-blue-600 hover:border-blue-500"
                      title="Quick View Details"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900/90 text-blue-300 border border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-900/50 text-slate-400">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => setActiveModalProject(project)}
                      className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer line-clamp-1"
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group/btn"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={handleToggleShow}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-cyan-500/50 px-6 py-3 rounded-xl transition duration-300 font-medium"
            >
              <span>
                {showAll
                  ? "Show Less"
                  : `View All Projects (${filteredProjects.length})`}
              </span>
              {showAll ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </div>
        )}

        {/* Modal render */}
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}
      </motion.div>
    </section>
  );
}
