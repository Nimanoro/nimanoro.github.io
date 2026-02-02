import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiGithub,
  FiExternalLink,
  FiLayers,
  FiLock,
} from "react-icons/fi";
import { flagshipCaseStudies, shippedExperiments, labPrototypes } from "../data";

// ---------- Animation Variants ----------
const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ---------- Helpers ----------
function bestExternalLink(p) {
  return p?.links?.live || p?.links?.github || null;
}

function isPrivateProject(p) {
  return p?.visibility === "private" || !bestExternalLink(p);
}

function safeText(s) {
  return typeof s === "string" ? s : "";
}

// Wrapper
function CardLink({ to, href, locked, className = "", children }) {
  if (locked) {
    return (
      <div
        className={[
          className,
          "cursor-default select-none",
          "opacity-85",
          "border border-gray-800 bg-[#0b0b0b]",
        ].join(" ")}
      >
        {children}
      </div>
    );
  }

  if (to) {
    return (
      <Link
        to={to}
        className={[
          className,
          "focus:outline-none focus:ring-2 focus:ring-green-500/40",
        ].join(" ")}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={[
        className,
        "focus:outline-none focus:ring-2 focus:ring-green-500/40",
      ].join(" ")}
    >
      {children}
    </a>
  );
}

function Chip({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-gray-700 text-gray-200 text-xs">
      {Icon ? <Icon className="opacity-90" /> : null}
      {children}
    </span>
  );
}

// ---------- Sub-Components ----------
function SectionHeader({ title, description }) {
  return (
    <motion.div variants={fadeInUp} className="mb-14">
      <h2 className="text-xs uppercase tracking-[0.3em] text-green-400 font-bold mb-4">
        {title}
      </h2>
      {description ? (
        <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

function TechChips({ items = [], limit = 4 }) {
  const list = (items || []).slice(0, limit);
  return (
    <div className="flex flex-wrap gap-2">
      {list.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-gray-900/70 border border-gray-700 rounded text-[10px] font-mono text-gray-300"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section className="bg-[#050505] text-white py-32 px-6 sm:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- Hero Header --- */}
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-28 border-l-2 border-green-500/40 pl-8"
        >
          <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mb-6 italic">
            SELECTED
            <br />
            <span className="text-green-400">WORKS.</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-xl font-medium">
            A deep dive into system architecture, real-time feedback, and shipping products that survive contact with users.
          </p>
        </motion.header>

        {/* --- Tier A: Flagship --- */}
        <div className="mb-36">
          <SectionHeader
            title="01 / Flagship"
            description="End-to-end systems focused on real-time feedback and shipping velocity."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-24"
          >
            {flagshipCaseStudies.map((study) => {
              const to = `/work/${study.slug}`;
              const privateFlag = study?.visibility === "private";

              return (
                <motion.article
  key={study.slug}
  variants={fadeInUp}
  className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
>
  {/* FULL CARD CLICK OVERLAY */}
  <Link
    to={to}
    aria-label={`Open case study: ${safeText(study.title)}`}
    className="absolute inset-0 z-10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/40"
  />

  {/* Visual Side */}
  <div className="lg:col-span-7 relative z-0">
    <div className="absolute -inset-4 bg-green-500/5 rounded-[2rem] blur-2xl group-hover:bg-green-500/10 transition-all duration-700" />

    <div className="relative block overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 group-hover:border-gray-600 transition-colors">
      <img
        src={study.image}
        alt={`${safeText(study.title)} preview`}
        className="w-full aspect-[1/1] object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90"
        loading="lazy"
      />

      <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-20">
        <Chip icon={FiLayers}>{study.tags?.[0] || "Project"}</Chip>
        {privateFlag ? <Chip icon={FiLock}>Private</Chip> : null}
      </div>
    </div>
  </div>

  {/* Content Side */}
  <div className="lg:col-span-5 flex flex-col relative z-0">
    <h3 className="text-4xl font-bold mb-4 group-hover:text-green-400 transition-colors tracking-tight">
      {study.title}
    </h3>

    <div className="space-y-6 text-gray-300 text-sm leading-relaxed mb-8">
      <p>
        <span className="text-white font-semibold">Outcome:</span>{" "}
        {study.outcome}
      </p>
      <p>
        <span className="text-white font-semibold">Hard part:</span>{" "}
        {study.hardPart}
      </p>
    </div>

    <div className="mb-8">
      <TechChips items={study.stack} limit={4} />
    </div>

    {/* Keep the CTA visually, but don't make it a competing link */}
    <div className="inline-flex items-center gap-2 text-white font-bold group-hover:text-green-400 transition-colors">
      Explore case study
      <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
    </div>

    <p className="mt-3 text-xs text-gray-500">{study.date || ""}</p>
  </div>
</motion.article>

              );
            })}
          </motion.div>
        </div>

        {/* --- Footer CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-36 text-center py-20 border-t border-gray-800"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-300">
            Want more projects and experiments?
          </h3>
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-green-500 text-black font-black hover:bg-green-400 hover:scale-[1.03] transition-all"
          >
            Browse full lab <FiExternalLink />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
