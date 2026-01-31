import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiLock, FiSearch } from "react-icons/fi";
import { projects as rawProjects } from "../data";

// ---------- Animation Variants ----------
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: 12, transition: { duration: 0.25, ease: "easeOut" } },
};

// ---------- Helpers ----------
function normalizeText(p) {
  return `${p.title || ""} ${p.oneLiner || ""} ${p.description || ""} ${(p.tags || []).join(
    " "
  )} ${(p.stack || []).join(" ")} ${p.date || ""}`.toLowerCase();
}

function inferCategory(p) {
  const t = normalizeText(p);
  const tags = p.tags || [];

  if (tags.some((x) => /mobile|ios|android/i.test(x)) || t.includes("react native")) return "Mobile";
  if (tags.some((x) => /cv|vision|computer vision/i.test(x)) || t.includes("opencv") || t.includes("mediapipe") || t.includes("pose")) return "Vision";
  if (tags.some((x) => /rl|reinforcement/i.test(x)) || t.includes("gymnasium") || t.includes("acrobot")) return "RL";
  if (tags.some((x) => /ml|machine learning/i.test(x)) || t.includes("pytorch") || t.includes("sklearn") || t.includes("scikit")) return "ML";
  if (tags.some((x) => /game/i.test(x)) || t.includes("pygame") || t.includes("unity")) return "Games";
  if (tags.some((x) => /data|analysis/i.test(x)) || t.includes("pandas") || t.includes("sql") || t.includes("matplotlib")) return "Data";

  // Default bucket, not "Systems" for everything because that’s meaningless
  return "Other";
}

// Better date scoring:
// - "Present"/"Ongoing" => very large
// - "Jan 2024" => parseable
// - "2025 – Present" => uses start year
function dateScore(dateStr) {
  if (!dateStr) return 0;
  const s = String(dateStr).toLowerCase();

  if (s.includes("present") || s.includes("ongoing")) return 9e15;

  const parsed = Date.parse(dateStr);
  if (!Number.isNaN(parsed)) return parsed;

  const m = s.match(/20\d{2}/);
  if (m) return Number(m[0]) * 1e12; // year-based fallback

  return 0;
}

function bestExternalLink(p) {
  return p?.links?.live || p?.links?.github || null;
}

function isLocked(p) {
  // explicit private OR no link at all
  return p?.visibility === "private" || !bestExternalLink(p);
}

// ---------- UI Bits ----------
function Pill({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={[
        "px-5 py-2 rounded-full text-xs font-medium border transition-all duration-300",
        active
          ? "bg-green-500/20 border-green-500/40 text-green-300 shadow-[0_0_15px_rgba(34,197,94,0.10)]"
          : "bg-gray-900/40 border-gray-800 text-gray-500 hover:border-gray-600 hover:text-gray-300",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function ProjectCard({ project }) {
  const locked = project._locked;
  const category = project._category;
  const github = project?.links?.github;
  const live = project?.links?.live;

  return (
    <motion.div
      variants={item}
      layout
      exit="exit"
      className={[
        "group relative flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-500",
        locked
          ? "bg-[#0b0b0b] border-gray-900"
          : "bg-[#0d0d0d] border-gray-800/60 hover:border-green-500/30",
      ].join(" ")}
    >
      {/* Visual Header */}
      <div className="relative h-44 overflow-hidden bg-gray-950">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className={[
              "w-full h-full object-cover transition-all duration-700",
              locked ? "opacity-45" : "opacity-70 group-hover:opacity-100 group-hover:scale-105",
            ].join(" ")}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-800 font-mono text-[10px] tracking-widest">
            NO_PREVIEW_DATA
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-gray-300 uppercase tracking-widest">
            {category}
          </span>
          {locked ? (
            <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-gray-300 uppercase tracking-widest inline-flex items-center gap-2">
              <FiLock className="w-3 h-3" />
              Private
            </span>
          ) : null}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3
            className={[
              "text-xl font-bold transition-colors",
              locked ? "text-gray-200" : "text-white group-hover:text-green-400",
            ].join(" ")}
          >
            {project.title}
          </h3>

          {/* Icons */}
          <div className="flex gap-3 text-gray-500 mt-1 shrink-0">
            {locked ? (
              <FiLock className="w-4 h-4" />
            ) : (
              <>
                {github ? (
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub className="w-4 h-4" />
                  </a>
                ) : null}

                {live ? (
                  <a
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-green-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                ) : null}
              </>
            )}
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
          {project.oneLiner || project.description}
        </p>

        {/* Outcome/Result Highlight */}
        {project.outcome ? (
          <div className="mb-4 px-3 py-2 rounded-lg bg-green-500/5 border border-green-500/10">
            <p className="text-[11px] text-green-400/80 font-medium">
              <span className="text-green-500 mr-1 italic">Result:</span> {project.outcome}
            </p>
          </div>
        ) : null}

        {/* Stack Chips */}
        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {(project.stack || []).slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-800/40 text-gray-500 border border-gray-700/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ---------- Main Page Component ----------
export default function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Newest");

  // Precompute metadata ONCE
  const projects = useMemo(() => {
    return (rawProjects || []).map((p) => {
      const _category = inferCategory(p);
      return {
        ...p,
        _category,
        _text: normalizeText(p),
        _score: dateScore(p.date),
        _locked: isLocked(p),
        _href: bestExternalLink(p),
      };
    });
  }, []);

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p._category));
    const list = Array.from(set).sort((a, b) => a.localeCompare(b));
    return ["All", ...list];
  }, [projects]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = projects;

    if (category !== "All") list = list.filter((p) => p._category === category);
    if (q) list = list.filter((p) => p._text.includes(q));

    const sorted = [...list].sort((a, b) => {
      if (sort === "Newest") return b._score - a._score;
      return (a.title || "").localeCompare(b.title || "");
    });

    return sorted;
  }, [projects, query, category, sort]);

  return (
    <div className="min-h-screen bg-[#050505] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="max-w-3xl mb-16">
          <motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl font-extrabold tracking-tighter mb-4 italic">
              LABS<span className="text-green-500">.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              A collection of technical experiments, prototypes, and shipped side-projects.
              Focused on <span className="text-gray-200">ML infrastructure</span> and{" "}
              <span className="text-gray-200">product engineering</span>.
            </p>
          </motion.div>
        </header>

        {/* Search & Filters */}
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-10">
          <div className="relative w-full lg:max-w-md group">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-green-500 transition-colors" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter by tech or keyword..."
              className="w-full bg-[#0d0d0d] border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <Pill key={c} active={category === c} onClick={() => setCategory(c)}>
                {c}
              </Pill>
            ))}
          </div>

          {/* Sort (you had state but no UI, so here it is) */}
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>Sort</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-[#0d0d0d] border border-gray-800 rounded-xl py-3 px-4 text-sm text-gray-300 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all"
            >
              <option value="Newest">Newest</option>
              <option value="A–Z">A–Z</option>
            </select>
          </div>
        </div>

        {/* Count */}
        <div className="mb-6 text-gray-600 text-sm">
          Showing <span className="text-gray-200 font-semibold">{filtered.length}</span> of{" "}
          <span className="text-gray-200 font-semibold">{projects.length}</span>
        </div>

        {/* Project Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.slug || project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer CTA */}
        <footer className="mt-24 border-t border-gray-900 pt-12 flex flex-col items-center">
          <p className="text-gray-500 text-sm mb-6">Curious about the high-level architecture?</p>
          <Link
            to="/work"
            className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            View Case Studies
            <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </footer>
      </div>
    </div>
  );
}
