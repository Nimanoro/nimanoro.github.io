import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { flagshipCaseStudies } from "../data";

export default function CaseStudyTemplate() {
  const { slug } = useParams();
  const study = flagshipCaseStudies.find((s) => s.slug === slug);

  if (!study) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Case study not found</h1>
          <Link to="/work" className="text-green-400 hover:underline">
            ← Back to Case Studies
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 px-6 sm:px-10 min-h-screen">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm font-medium"
          >
            ← Case Studies
          </Link>
        </motion.div>

        {/* Hero: screenshot + title */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-2xl mb-8">
            <img
              src={study.image}
              alt={`${study.title} screenshot`}
              className="w-full h-auto object-cover"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
            {study.title}
          </h1>
          <p className="text-gray-500 text-sm">{study.date}</p>
        </motion.header>

        {/* Outcome (1-line) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 p-4 rounded-xl bg-green-500/10 border border-green-500/20"
        >
          <h2 className="text-green-400 text-sm font-semibold uppercase tracking-wider mb-2">
            Outcome
          </h2>
          <p className="text-gray-200 text-lg">{study.outcome}</p>
        </motion.div>

        {/* Problem / Solution / Challenges / Results / Tech */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-10"
        >
          <div>
            <h2 className="text-green-400 text-sm font-semibold uppercase tracking-wider mb-3">
              What I built
            </h2>
            <p className="text-gray-300 leading-relaxed">{study.built}</p>
          </div>

          <div>
            <h2 className="text-green-400 text-sm font-semibold uppercase tracking-wider mb-3">
              What made it hard
            </h2>
            <p className="text-gray-300 leading-relaxed">{study.hardPart}</p>
          </div>

          <div>
            <h2 className="text-green-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Result
            </h2>
            <p className="text-gray-300 leading-relaxed">{study.result}</p>
          </div>

          <div>
            <h2 className="text-green-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Tech
            </h2>
            <p className="text-gray-400 font-mono text-sm">{study.stack}</p>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap gap-4"
        >
          {study.links.live && (
            <a
              href={study.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-5 rounded-lg text-sm transition duration-200"
            >
              Live →
            </a>
          )}
          {study.links.github && study.links.github !== "#" && (
            <a
              href={study.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-2 px-5 rounded-lg text-sm border border-gray-700 transition duration-200"
            >
              GitHub
            </a>
          )}
          {study.links.writeup && (
            <a
              href={study.links.writeup}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-green-400 font-medium text-sm transition duration-200"
            >
              Write-up →
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
