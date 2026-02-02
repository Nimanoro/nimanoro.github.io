import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  proofStrip,
  now,
  testimonials,
  flagshipCaseStudies,
} from "../data";

const RESUME_URL = "/resume.pdf";
const GITHUB_URL = "https://github.com/Nimanoro";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function ProofChip({ children, tone = "muted" }) {
  const base =
    "inline-flex items-center rounded-full px-4 py-2 text-sm border backdrop-blur";
  const tones = {
    bright: "bg-green-500/10 border-green-500/20 text-green-300",
    muted: "bg-gray-800/40 border-gray-700/60 text-gray-300",
  };
  return <span className={`${base} ${tones[tone]}`}>{children}</span>;
}

function FeaturedCard({ p }) {
  const isPrivate = p.visibility === "private";
  return (
    <motion.article
      variants={item}
      className="group bg-gray-800/30 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <img
          src={p.image}
          alt={`${p.title} preview`}
          className="h-52 w-full object-cover group-hover:scale-[1.02] transition duration-300"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          {isPrivate ? (
            <span className="text-xs px-3 py-1 rounded-full bg-gray-900/70 border border-gray-700 text-gray-200">
              Private
            </span>
          ) : (
            <span className="text-xs px-3 py-1 rounded-full bg-green-500/15 border border-green-500/20 text-green-200">
              Public
            </span>
          )}

          {p.tags?.slice(0, 2)?.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-gray-900/70 border border-gray-700 text-gray-300 max-w-[160px] truncate"
              title={t}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-white text-xl font-semibold mb-1">
              {p.title}
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              {p.oneLiner || p.outcome}
            </p>
          </div>
          <span className="text-gray-400 text-xs whitespace-nowrap">
            {p.date}
          </span>
        </div>

        <p className="text-gray-200 mt-4 text-sm leading-relaxed">
          <span className="text-gray-400">Outcome:</span>{" "}
          {p.outcome}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            to={`/work/${p.slug}`}
            className="text-sm font-semibold text-green-300 hover:text-green-200 transition"
          >
            Read case study →
          </Link>

          {!isPrivate && p.links?.github && (
            <a
              href={p.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-gray-200 transition"
            >
              GitHub
            </a>
          )}

          {!isPrivate && p.links?.live && (
            <a
              href={p.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-gray-200 transition"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const featured = (flagshipCaseStudies || []).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-6 pb-20 relative overflow-hidden">
        {/* background glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-green-500/10 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/40 pointer-events-none" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl w-full relative z-10"
        >
          <motion.h1
            variants={item}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            I build and ship products that people actually use.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-gray-300 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed"
          >
            Full-stack engineer with strong backend + real-time systems.{" "}
            <span className="text-green-400 font-medium">
              LiftIQ (fitness feedback)
            </span>{" "}
            is my current focus, and I also ship mobile products like StretchFlow.
          </motion.p>

          {/* Proof chips */}
          <motion.div variants={item} className="flex flex-wrap gap-3 mb-4">
            <ProofChip tone="bright">{proofStrip.users} users</ProofChip>
            <ProofChip>{proofStrip.projectsShipped} shipped</ProofChip>
            <ProofChip>{proofStrip.domains}</ProofChip>
          </motion.div>


          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <Link
              to="/work"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl text-lg transition duration-200 focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              View Case Studies
            </Link>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-3 px-6 rounded-xl text-lg transition duration-200 border border-gray-700"
            >
              Resume (PDF)
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-3 px-6 rounded-xl text-lg transition duration-200 border border-gray-700"
            >
              GitHub
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center text-gray-300 hover:text-white font-medium transition duration-200"
            >
              Contact →
            </Link>
          </motion.div>

        </motion.div>
      </section>

      {/* Featured work preview */}
      <section className="border-t border-gray-800 bg-gradient-to-b from-gray-900/50 to-black py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex items-end justify-between gap-6 mb-10"
          >
            <div>
              <h2 className="text-white text-2xl sm:text-3xl font-bold">
                Featured work
              </h2>
              <p className="text-gray-400 mt-2 max-w-2xl leading-relaxed">
                Projects with real users, measurable outcomes, and clear engineering
                tradeoffs.
              </p>
            </div>
            <Link
              to="/work"
              className="text-green-300 hover:text-green-200 font-semibold transition"
            >
              View all →
            </Link>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featured.map((p) => (
              <FeaturedCard key={p.slug} p={p} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Now */}
      <section className="border-t border-gray-800 bg-gray-900/50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-6"
          >
            Now
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-200 text-sm sm:text-base"
          >
            <p>
              <span className="text-gray-400">Building:</span> {now.building}
            </p>
            <p>
              <span className="text-gray-400">Seeking:</span> {now.seeking}
            </p>
            <p>
              <span className="text-gray-400">Learning:</span> {now.learning}
            </p>
            <p>
              <span className="text-gray-400">Latest ship:</span> {now.latestShip}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-gray-800 py-16 px-6 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-8"
          >
            What people say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="bg-gray-800/40 rounded-2xl p-6 border border-gray-800"
              >
                <p className="text-gray-200 leading-relaxed mb-4">
                  “{t.quote}”
                </p>
                <footer className="text-gray-400 text-sm">
                  - {t.source}
                  {t.role ? ` · ${t.role}` : ""}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
