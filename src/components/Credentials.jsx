import React, { useEffect, useState } from "react";
import { Award, BookOpenText, ExternalLink, Sparkles, X } from "lucide-react";
import { motion } from "framer-motion";
import { certificatesData, publicationsData } from "../data/portfolioData";

export default function Credentials() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    if (!selectedCertificate) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedCertificate(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate]);

  return (
    <section
      id="credentials"
      className="relative border-t border-slate-900 bg-[#0b0f19] py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            Credentials & Publications
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Credentials That Keep Me Learning
          </h2>
          <p className="text-sm text-slate-400 sm:text-base">
            Selected courses, certifications, and written work. Each entry is
            easy to replace with your own credential details.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-2.5 text-cyan-400">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Courses & Certifications
                </p>
                <h3 className="text-xl font-bold text-white">Certificates</h3>
              </div>
            </div>
            <div className="space-y-4">
              {certificatesData.map((certificate, index) => (
                <motion.article
                  key={`${certificate.name}-${certificate.year}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="flex items-start justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="flex min-w-0 gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedCertificate(certificate)}
                      className="group shrink-0 overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                      aria-label={`View ${certificate.name} certificate`}
                    >
                      <img
                        src={certificate.image}
                        alt={`${certificate.name} certificate`}
                        className="h-24 w-28 rounded-lg border border-slate-700 object-cover transition duration-300 group-hover:scale-105 sm:w-36"
                      />
                    </button>
                    <div>
                      <h4 className="font-bold text-white">
                        {certificate.name}
                      </h4>
                      <p className="mt-1 text-sm text-slate-400">
                        {certificate.issuer}
                      </p>
                      {certificate.credentialId && (
                        <p className="mt-2 text-xs text-slate-500">
                          Credential ID:{" "}
                          <span className="font-mono text-slate-300">
                            {certificate.credentialId}
                          </span>
                        </p>
                      )}
                      {certificate.description && (
                        <p className="mt-3 text-sm leading-relaxed text-slate-400">
                          {certificate.description}
                        </p>
                      )}
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Issued {certificate.year}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl border border-blue-400/30 bg-blue-400/10 p-2.5 text-blue-400">
                <BookOpenText className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Research & Technical Writing
                </p>
                <h3 className="text-xl font-bold text-white">Publications</h3>
              </div>
            </div>
            <div className="space-y-4">
              {publicationsData.map((publication) => (
                <motion.article
                  key={`${publication.title}-${publication.year}`}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-md bg-blue-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-400">
                      {publication.type}
                    </span>
                    <span className="text-xs text-slate-500">
                      {publication.year}
                    </span>
                  </div>
                  <h4 className="mt-4 font-bold text-white">
                    {publication.title}
                  </h4>
                  <p className="mt-1 text-sm text-slate-400">
                    {publication.publisher}
                  </p>
                  {publication.authors && (
                    <p className="mt-3 text-xs leading-relaxed text-slate-300">
                      <span className="font-semibold text-slate-200">
                        Authors:
                      </span>{" "}
                      {publication.authors}
                    </p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {publication.description}
                  </p>
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                  >
                    Read publication <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        {selectedCertificate && (
          <div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={(event) => {
              if (event.target === event.currentTarget)
                setSelectedCertificate(null);
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-4 top-4 z-20 cursor-pointer rounded-full bg-slate-800/90 p-2 text-slate-400 hover:bg-slate-700 hover:text-white"
              aria-label="Close certificate preview"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={selectedCertificate.image}
              alt={`${selectedCertificate.name} certificate preview`}
              className="max-h-[90vh] max-w-full rounded-xl border border-slate-700 object-contain shadow-2xl"
            />
          </div>
        )}
      </motion.div>
    </section>
  );
}
