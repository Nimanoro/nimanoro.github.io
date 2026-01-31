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

// Wrapper: <Link> for internal, <a> for external, <div> for locked
function CardLink({ to, href, locked, className = "", children }) {
  if (locked) {
    return (
      <div
        className={[
          className,
          "cursor-default select-none",
          "opacity-80",
          "border border-gray-900 bg-[#0b0b0b]",
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
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-gray-800 text-gray-200 text-xs">
      {Icon ? <Icon className="opacity-80" /> : null}
      {children}
    </span>
  );
}

// ---------- Sub-Components ----------
function SectionHeader({ title, description }) {
  return (
    <motion.div variants={fadeInUp} className="mb-14">
      <h2 className="text-xs uppercase tracking-[0.3em] text-green-500 font-bold mb-4">
        {title}
      </h2>
      {description ? (
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
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
          className="px-3 py-1 bg-gray-900/60 border border-gray-800 rounded text-[10px] font-mono text-gray-500"
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
          className="mb-28 border-l-2 border-green-500/30 pl-8"
        >
          <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mb-6 italic">
            SELECTED
            <br />
            <span className="text-green-500">WORKS.</span>
          </h1>
          <p className="text-gray-500 text-xl max-w-xl font-medium">
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
              const privateFlag = study?.visibility === "private"; // only for badge

              return (
                <motion.article
                  key={study.slug}
                  variants={fadeInUp}
                  className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  {/* Visual Side */}
                  <div className="lg:col-span-7 relative">
                    <div className="absolute -inset-4 bg-green-500/5 rounded-[2rem] blur-2xl group-hover:bg-green-500/10 transition-all duration-700" />

                    <CardLink
                      to={to}
                      locked={false}
                      className="relative block overflow-hidden rounded-2xl border border-gray-800/60 bg-gray-900 hover:border-gray-700 transition-colors"
                    >
                      <img
                        src={study.image}
                        alt={`${safeText(study.title)} preview`}
                        className="w-full aspect-[1/1] object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                        loading="lazy"
                      />

                      {/* Corner badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                        <Chip icon={FiLayers}>{study.tags?.[0] || "Project"}</Chip>
                        {privateFlag ? <Chip icon={FiLock}>Private</Chip> : null}
                      </div>
                    </CardLink>
                  </div>

                  {/* Content Side */}
                  <div className="lg:col-span-5 flex flex-col">
                    <h3 className="text-4xl font-bold mb-4 group-hover:text-green-400 transition-colors tracking-tight">
                      {study.title}
                    </h3>

                    <div className="space-y-6 text-gray-400 text-sm leading-relaxed mb-8">
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

                    <Link
                      to={to}
                      className="inline-flex items-center gap-2 text-white font-bold hover:text-green-500 transition-colors group/btn"
                    >
                      Explore case study
                      <FiArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                    </Link>

                    <p className="mt-3 text-xs text-gray-600">{study.date || ""}</p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* --- Tier B & C: Experiments --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Shipped Experiments */}
          <div>
            <SectionHeader
              title="02 / Shipped"
              description="Smaller wins that still shipped. Live or GitHub when available."
            />

            <div className="space-y-6">
              {shippedExperiments.map((proj) => {
                const href = bestExternalLink(proj);
                const locked = isPrivateProject(proj);

                return (
                  <CardLink
                    key={proj.slug}
                    href={href}
                    locked={locked}
                    className={[
                      "group flex gap-6 p-4 rounded-2xl transition-colors",
                      locked
                        ? ""
                        : "hover:bg-white/5 border border-transparent hover:border-white/10",
                    ].join(" ")}
                  >
                    <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-gray-900 border border-gray-800 relative">
                      {proj.image ? (
                        <img
                          src={proj.image}
                          className={[
                            "w-full h-full object-cover transition-opacity",
                            locked ? "opacity-50" : "opacity-70 group-hover:opacity-100",
                          ].join(" ")}
                          alt={`${safeText(proj.title)} preview`}
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-gray-600">
                          No preview
                        </div>
                      )}

                      {locked ? (
                        <div className="absolute bottom-2 left-2">
                          <Chip icon={FiLock}>Private</Chip>
                        </div>
                      ) : null}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h4
                          className={[
                            "font-bold truncate",
                            locked
                              ? "text-gray-300"
                              : "text-white group-hover:text-green-400 transition-colors",
                          ].join(" ")}
                        >
                          {proj.title}
                        </h4>

                        <span className="text-xs text-gray-600 whitespace-nowrap">
                          {locked ? "Locked" : "Open →"}
                        </span>
                      </div>

                      <p className="text-xs text-gray-500 mb-2">{proj.date}</p>

                      <p className="text-sm text-gray-400 line-clamp-2">
                        {proj.oneLiner || proj.description || proj.outcome || ""}
                      </p>

                      <div className="mt-3">
                        <TechChips items={proj.stack} limit={4} />
                      </div>
                    </div>
                  </CardLink>
                );
              })}
            </div>
          </div>

          {/* Lab Prototypes */}
          <div>
            <SectionHeader
              title="03 / Lab"
              description="Prototypes, research-ish work, and experiments that don’t need a marketing team."
            />

            <div className="space-y-3">
              {labPrototypes.map((proj) => {
                const href = bestExternalLink(proj);
                const locked = isPrivateProject(proj);

                return (
                  <CardLink
                    key={proj.slug}
                    href={href}
                    locked={locked}
                    className={[
                      "group flex items-center justify-between p-4 rounded-2xl border transition-colors",
                      locked
                        ? "border-gray-900 bg-[#0b0b0b]"
                        : "border-gray-900 hover:border-green-500/40 hover:bg-white/5",
                    ].join(" ")}
                  >
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-1">
                        {proj.tags?.[0] || "Prototype"}
                      </span>

                      <h4
                        className={[
                          "font-bold truncate transition-colors",
                          locked ? "text-gray-300" : "text-gray-200 group-hover:text-white",
                        ].join(" ")}
                      >
                        {proj.title}
                      </h4>

                      <p className="text-xs text-gray-600 mt-1 line-clamp-1">
                        {proj.description || proj.oneLiner || ""}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {locked ? (
                        <span className="inline-flex items-center gap-2 text-gray-600 text-xs">
                          <FiLock /> Private
                        </span>
                      ) : (
                        <FiGithub className="text-gray-600 group-hover:text-green-500 transition-colors w-5 h-5" />
                      )}
                    </div>
                  </CardLink>
                );
              })}
            </div>
          </div>
        </div>

        {/* --- Footer CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-36 text-center py-20 border-t border-gray-900"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-400">
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
