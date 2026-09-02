import React from "react";
import { Code2, Heart, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f19] border-t border-slate-900 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-900">
          {/* Brand */}
          <div className="space-y-2 text-center md:text-left">
            <a href="#hero" className="inline-flex items-center gap-2">
              <div className="p-2 rounded-xl bg-blue-600 text-white">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-base sm:text-xl text-white">
                DWIE
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
            <a href="#hero" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a
              href="#tech-stack"
              className="hover:text-blue-400 transition-colors"
            >
              Tech Stack
            </a>
            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-blue-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#credentials"
              className="hover:text-blue-400 transition-colors"
            >
              Credentials
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center gap-4 pr-16 text-sm text-slate-400 md:pr-20">
          <p className="text-center md:flex-1 md:text-left">
            &copy; 2026 DWIE. All rights reserved.
          </p>

          <p className="flex flex-wrap items-center justify-center gap-1 text-center md:flex-1 translate-x-4 md:translate-x-8">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>using React, Tailwind CSS & Framer Motion</span>
          </p>

          <div
            className="hidden h-4 w-16 shrink-0 md:block"
            aria-hidden="true"
          />
        </div>
      </div>
    </footer>
  );
}
