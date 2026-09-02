import React from "react";
import {
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  CalendarDays,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { educationData, experienceData } from "../data/portfolioData";

function TimelineItem({ item, type }) {
  const isEducation = type === "education";
  return (
    <div className="relative pl-10 pb-8 last:pb-0">
      <span className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full border border-blue-400/40 bg-slate-900 text-blue-400">
        {isEducation ? (
          <GraduationCap className="h-3.5 w-3.5" />
        ) : (
          <BriefcaseBusiness className="h-3.5 w-3.5" />
        )}
      </span>
      <div className="absolute left-3.5 top-7 bottom-0 w-px bg-slate-800 last:hidden" />
      <motion.article
        whileHover={{ y: -6, transition: { duration: 0.2 } }}
        className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-colors hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10"
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-3">
            {item.logo && (
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 p-1">
                <img
                  src={item.logo}
                  alt={`${isEducation ? item.institution : item.company} logo`}
                  className="h-full w-full object-contain"
                />
              </div>
            )}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                {item.period}
              </p>
              <h3 className="mt-2 text-base font-bold text-white">
                {isEducation ? item.program : item.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-300">
                {isEducation ? item.institution : item.company}
              </p>
              {isEducation && item.gpa && (
                <span className="mt-2 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
                  GPA: {item.gpa}
                </span>
              )}
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-950/60 px-2.5 py-1 text-[11px] text-slate-400">
            <CalendarDays className="h-3.5 w-3.5" />
            {isEducation ? item.year : "Experience"}
          </span>
        </div>
        {item.bullets ? (
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300 marker:text-cyan-400">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            {item.description}
          </p>
        )}
        {item.skills && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-300"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </motion.article>
    </div>
  );
}

export default function ExperienceEducation() {
  return (
    <section
      id="experience"
      className="relative border-t border-slate-900 bg-slate-950/50 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <Sparkles className="h-3.5 w-3.5" />
            Experience & Education
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            My Learning & Career Path
          </h2>
          <p className="text-sm text-slate-400 sm:text-base">
            A concise overview of my academic foundation and practical
            development experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-2.5 text-cyan-400">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Academic Background
                </p>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
            </div>
            {educationData.map((item) => (
              <TimelineItem
                key={`${item.institution}-${item.program}`}
                item={item}
                type="education"
              />
            ))}
          </div>
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl border border-blue-400/30 bg-blue-400/10 p-2.5 text-blue-400">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Practical Experience
                </p>
                <h3 className="text-xl font-bold text-white">Experience</h3>
              </div>
            </div>
            {experienceData.map((item) => (
              <TimelineItem
                key={`${item.company}-${item.role}`}
                item={item}
                type="experience"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
