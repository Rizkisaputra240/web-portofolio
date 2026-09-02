import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import ExperienceEducation from "./components/ExperienceEducation";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      <div
        className="fixed top-0 left-0 z-[999] h-[3px] bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -top-20 left-1/4 z-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-[1150px] z-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-120px] top-[2350px] z-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px]" />
      <Navbar />
      <main className="relative z-10 flex-grow">
        <Hero />
        <TechStack />
        <Projects />
        <ExperienceEducation />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
