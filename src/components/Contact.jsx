import React, { useState } from "react";
import {
  Mail,
  MessageSquare,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { contactInfo } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const iconMap = {
    Mail: Mail,
    MessageSquare: MessageSquare,
    MapPin: MapPin,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/71130b2f16b0a563eed5faf04433fcc2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _captcha: "false",
            _subject: `Portfolio Message from ${formData.name}`,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Unable to send the message.");
      }

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError(
        "Unable to send your message right now. Please try again or email me directly.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative bg-slate-950/80 border-t border-slate-900"
    >
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 radial-glow-bottom pointer-events-none opacity-60" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Contact & Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Have a project in mind, need technical advice, or looking for a
            reliable developer to join your team? Reach out below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Contact Info Cards & Availability */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const IconComponent = iconMap[info.icon] || Mail;
                return (
                  <div
                    key={info.title}
                    className="p-5 rounded-2xl glass-card flex items-start gap-4 group hover:-translate-y-0.5 transition-all"
                  >
                    <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        {info.title}
                      </h3>
                      <p className="font-bold text-white text-base">
                        {info.value}
                      </p>
                      <p className="text-xs text-slate-400">
                        {info.description}
                      </p>
                      {info.href && (
                        <a
                          href={info.href}
                          target={
                            info.href.startsWith("http") ? "_blank" : "_self"
                          }
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 pt-1"
                        >
                          <span>{info.actionText}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Availability Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                <Clock className="w-4 h-4" />
                <span>Working Hours & Timezone</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Based in Sukoharjo / Surakarta, Indonesia (GMT+7 / WIB). Open to
                full-time remote roles and on-site opportunities, with flexible
                hours for cross-timezone collaboration.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl glass-panel relative border border-slate-800">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Message sent successfully!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out. I have received your message and
                    will reply within 24 business hours.
                  </p>
                  {submitError && (
                    <p
                      role="alert"
                      className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300"
                    >
                      {submitError}
                    </p>
                  )}

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSubmitError("");
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Send a Direct Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300">
                        Your Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300">
                        Email Address <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300">
                      Subject <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Let's work together"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white focus:outline-none focus:border-blue-500 text-sm transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300">
                      Message / Project Brief{" "}
                      <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your project goals, timeline, and requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-600/25 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    🔒 Your email is strictly confidential and will never be
                    shared.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
