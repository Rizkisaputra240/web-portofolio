import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
  Terminal,
  Code2,
  Check,
  Copy,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { aboutData, personalInfo } from "../data/portfolioData";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("developer.js");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeSnippets = {
    "developer.js": `const developer = {
  name: "DWI ANANDA RIZKI SAPUTRA",
  role: "Full-Stack Web Developer",
  education: "B.C.S. Informatics, UDB (GPA 3.54)",
  certification: "Junior Web Programmer (BNSP)",
  experience: "IT Intern at BPS Surakarta",
  coreSkills: [
    "PHP",
    "MySQL",
    "React",
    "JavaScript",
    "Python"
  ],
  location: "Sukoharjo, Indonesia",
  availableForHire: true,
  getGreeting: function() {
    return "Ready for full-time & remote software" +
      " engineering roles!";
  }
};`,
    "skills.json": `{
  "frontend": [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "HTML5/CSS3"
  ],
  "backend": [
    "PHP",
    "MySQL",
    "Node.js (REST API)"
  ],
  "dataAndAI": [
    "Python",
    "Machine Learning (Naive Bayes)",
    "CNN"
  ],
  "tools": ["Git", "GitHub", "Postman", "VS Code"],
  "certification": "Junior Web Programmer (BNSP)"
}`,
    "terminal.sh": `$ whoami
dwi-ananda-rizki-saputra
$ cat status.txt
Role: Full-Stack Web Developer
Status: Open for Opportunities (WIB / GMT+7)
$ npm run build
✔ Production build ready. Zero errors! 🚀`,
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] radial-glow pointer-events-none opacity-80" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
              <span>{personalInfo.role}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Turning Ideas Into <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                High-Performance Web
              </span>{" "}
              Solutions.
            </h1>

            {/* Subtitle */}
            <div className="max-w-2xl mx-auto space-y-3 text-left text-sm leading-relaxed text-slate-300 sm:text-base lg:mx-0">
              {aboutData.introduction.map((paragraph) => {
                const name = "DWI ANANDA RIZKI SAPUTRA";
                const nameIndex = paragraph.indexOf(name);

                if (nameIndex === -1) {
                  return <p key={paragraph}>{paragraph}</p>;
                }

                return (
                  <p key={paragraph}>
                    {paragraph.slice(0, nameIndex)}
                    <strong className="text-white font-semibold">{name}</strong>
                    {paragraph.slice(nameIndex + name.length)}
                  </p>
                );
              })}
              <div className="space-y-2 border-l-2 border-cyan-500/30 pl-4">
                <p className="font-bold text-white">Core Competencies:</p>
                <ul className="list-disc space-y-1.5 pl-5 marker:text-cyan-400">
                  {aboutData.competencies.map((competency) => (
                    <li key={competency.label}>
                      <strong className="font-bold text-cyan-300">
                        {competency.label}:
                      </strong>{" "}
                      {competency.text}
                    </li>
                  ))}
                </ul>
              </div>
              <p>{aboutData.closing}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl || "/CV_DWI_ANANDA_RIZKI_SAPUTRA_2026.pdf"}
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download CV</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-medium text-slate-300 bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 text-xs sm:text-sm transition-all"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">
                      Copied!
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Icons & Email Quick Link */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 border-t border-slate-800/60 mt-6">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Interactive Code Terminal Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-[#0f172a]/90 border border-slate-800 shadow-2xl shadow-blue-950/40 backdrop-blur-xl overflow-hidden group">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-lg border border-slate-800">
                  {Object.keys(codeSnippets).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-2.5 py-1 text-xs font-mono rounded-md border-b-2 transition-all ${
                        activeTab === tab
                          ? "bg-slate-800/90 text-cyan-400 border-cyan-400 font-semibold"
                          : "border-transparent text-slate-400 hover:text-slate-200"
                      }`}
                      aria-selected={activeTab === tab}
                      role="tab"
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="flex items-center text-slate-500">
                  <Terminal className="w-4 h-4" />
                </div>
              </div>

              {/* Code Snippet Content */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 overflow-x-hidden min-h-[260px] bg-[#0b0f19]/70">
                <motion.pre
                  key={activeTab}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-slate-300"
                >
                  <code>
                    {codeSnippets[activeTab].split("\n").map((line, index) => (
                      <div key={index} className="flex min-w-0 gap-4">
                        <span className="inline-block w-6 text-right pr-4 text-slate-600 select-none font-mono shrink-0">
                          {index + 1}
                        </span>
                        <span className="whitespace-pre text-slate-300">
                          {line}
                        </span>
                        {activeTab === "terminal.sh" &&
                          index ===
                            codeSnippets[activeTab].split("\n").length - 1 && (
                            <span className="inline-block w-2 h-4 ml-1 bg-cyan-400 animate-pulse align-middle" />
                          )}
                      </div>
                    ))}
                  </code>
                </motion.pre>
              </div>

              {/* Bottom Terminal Footer Status Bar */}
              <div className="px-4 py-2.5 bg-slate-900/80 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Node v20.11.0</span>
                </div>
                <span className="text-slate-500">
                  {activeTab === "developer.js"
                    ? "UTF-8 • JavaScript"
                    : activeTab === "skills.json"
                      ? "UTF-8 • JSON"
                      : "UTF-8 • Shell / Bash"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
