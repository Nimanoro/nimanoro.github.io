import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiUser,
  FiChevronRight,
  FiTerminal,
  FiCpu,
  FiCode,
  FiActivity,
  FiArrowRight,
  FiMessageSquare,
} from "react-icons/fi";

const RESUME_URL = "/Resume.png";

const fUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.19, 1, 0.22, 1] },
  },
};

function Chip({ children }) {
  return (
    <span className="px-3.5 py-1.5 rounded bg-[#0b0b0b] border border-gray-900 text-gray-400 font-mono text-[11px] uppercase tracking-widest">
      {children}
    </span>
  );
}

function Card({ label, children, className = "" }) {
  return (
    <div
      className={[
        "bg-[#0d0d0d] rounded-2xl border border-gray-900/80",
        "hover:border-green-500/25 transition-colors",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.02)]",
        className,
      ].join(" ")}
    >
      {label ? (
        <div className="px-8 pt-7 pb-0">
          <div className="text-xs text-green-500 font-mono uppercase tracking-[0.35em] font-black">
            {label}
          </div>
        </div>
      ) : null}
      <div className="p-8">{children}</div>
    </div>
  );
}

export default function About() {
  return (
    <section className="bg-[#050505] text-[#EDEDED] py-28 px-6 lg:px-16 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto relative">
        {/* subtle background accents */}
        <div className="pointer-events-none absolute -top-24 right-0 h-[520px] w-[520px] rounded-full bg-green-500/5 blur-[120px]" />
        <div className="pointer-events-none absolute top-24 left-0 h-[320px] w-[320px] rounded-full bg-white/3 blur-[120px]" />

        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-20 border-l-2 border-green-500/80 pl-10 relative z-10"
        >
          <div className="inline-flex items-center gap-2 mb-6 text-green-500 font-mono text-xs font-black uppercase tracking-[0.35em]">
            <FiUser />
            <span>Profile</span>
          </div>

          <h1 className="text-7xl sm:text-9xl font-black tracking-tighter leading-[0.9]">
            Nima
            <br />
            <span className="text-gray-800">Norouzi.</span>
          </h1>

          <p className="mt-6 text-gray-400 text-2xl max-w-2xl leading-relaxed font-medium">
            Senior Computer Science student at{" "}
            <span className="text-white font-bold tracking-tight">UBC</span>. I
            build backend systems and real-time vision pipelines with a bias for
            performance and shipping.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Chip>Backend</Chip>
            <Chip>Real-time CV</Chip>
            <Chip>Systems</Chip>
            <Chip>Product shipping</Chip>
          </div>
        </motion.div>

        {/* --- Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24 relative z-10">
          {/* Execution */}
          <motion.div
            variants={fUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-8"
          >
            <Card label="01 / Execution">
              <p className="text-gray-100 text-xl leading-relaxed font-semibold">
                I prioritize reliability and low-latency performance over
                aesthetic complexity.
              </p>

              <p className="mt-5 text-gray-400 text-base leading-relaxed max-w-xl">
                I care about the full system lifecycle: backend architecture,
                model + signal pipelines, and production constraints. If it ships
                and survives real users, it counts.
              </p>
            </Card>
          </motion.div>

          {/* Signals */}
          <motion.div
            variants={fUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <div className="relative">
              <div className="pointer-events-none absolute -top-6 -right-6 opacity-[0.08]">
                <FiActivity size={120} className="text-green-500" />
              </div>

              <Card
                label="02 / Signals"
                className="border-green-500/20 hover:border-green-500/35"
              >
                <ul className="space-y-5">
                  {[
                    "UBC Computer Science (Senior)",
                    "300+ first-week users (StretchFlow)",
                    "Full-cycle ownership (build → iterate → ship)",
                    "ML + Vision system focus",
                  ].map((signal) => (
                    <li
                      key={signal}
                      className="flex items-start gap-3 text-xs font-black uppercase tracking-wide text-gray-200"
                    >
                      <FiChevronRight className="text-green-500 mt-[2px] shrink-0" />
                      <span>{signal}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </motion.div>

          {/* Stack Ledger */}
          <motion.div
            variants={fUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-12"
          >
            <Card label="03 / Stack Ledger">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-900 pb-2">
                    <FiTerminal className="text-green-500 w-4 h-4" />
                    <span className="text-xs text-gray-500 uppercase font-black tracking-[0.25em]">
                      Systems & Backend
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm font-mono leading-relaxed uppercase tracking-tighter">
                    Node.js · Python · Firebase · SQLite · API Design · Signal
                    Processing
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-900 pb-2">
                    <FiCpu className="text-green-500 w-4 h-4" />
                    <span className="text-xs text-gray-500 uppercase font-black tracking-[0.25em]">
                      Intelligence & Vision
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm font-mono leading-relaxed uppercase tracking-tighter">
                    PyTorch · MediaPipe · OpenCV · Pose Estimation · Data
                    Pipelines
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-900 pb-2">
                    <FiCode className="text-green-500 w-4 h-4" />
                    <span className="text-xs text-gray-500 uppercase font-black tracking-[0.25em]">
                      Interface & Mobile
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm font-mono leading-relaxed uppercase tracking-tighter">
                    React Native · TypeScript · Expo · Tailwind · Full-stack Web
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* --- Target / CTA --- */}
        <motion.div
          variants={fUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 border-t border-gray-900 pt-14"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="text-xs text-green-500 font-mono uppercase tracking-[0.35em] font-black mb-4">
                Target
              </div>

              <h2 className="text-5xl sm:text-6xl font-black tracking-tighter text-white">
                Summer 2026 SWE Internship
              </h2>

              <p className="mt-4 text-gray-500 text-base leading-relaxed max-w-xl">
                Looking for teams that care about real engineering constraints:
                backend infrastructure, ML systems, and product-first execution.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/work"
                className="px-8 py-4 rounded-xl bg-white text-black font-black text-base hover:bg-green-500 hover:text-black transition-all inline-flex items-center gap-2"
              >
                View work <FiArrowRight />
              </Link>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-xl border border-gray-800 text-gray-200 font-black text-base hover:border-white hover:text-white transition-all"
              >
                Resume
              </a>

              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl border border-green-500/30 text-green-300 font-black text-base hover:bg-green-500 hover:text-black transition-all inline-flex items-center gap-2"
              >
                Start a conversation <FiMessageSquare />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
