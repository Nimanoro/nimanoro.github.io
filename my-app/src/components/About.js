import React from "react";
import Gallery from "./gallery";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-28 px-6 sm:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-green-400 mb-8">
            Behind the Code
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I’m <span className="text-white font-semibold">Nima Norouzi</span> — a builder, a creative, and a Computer Science student at UBC. But more than that? I’m obsessed with making ideas real.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I don’t just write code. I ship. From a soccer sim in Java to a stretching app that hit 300+ users in one week — I chase ideas hard and fast. I’m not afraid to iterate, pivot, or rebuild until it works and feels good.
            <span className="block mt-2 text-white font-medium italic">
              No fluff. Just momentum.
            </span>
          </p>

          <div className="bg-gray-800/40 rounded-lg p-4 sm:p-6 mb-8 space-y-4 text-sm sm:text-base">
            <p>
              🧠 <span className="text-white font-medium">Tech Stack:</span>{" "}
              Python, Java, Racket, React, Node.js, Tailwind
            </p>
            <p>
              🛠️{" "}
              <span className="text-white font-medium">What I Build:</span>{" "}
              Self-driving car AI, fitness coaches, music tools, productivity SaaS, handwriting-to-LaTeX converters
            </p>
            <p>
              🎯{" "}
              <span className="text-white font-medium">Outside the Code:</span>{" "}
              Volleyball 🏐, Chess ♟, Beatmaking 🎧, Surreal Films 🎥, Late-night writing ✍️
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            If you're into building weird, useful, or beautiful things — or just want to connect — I’m always down to chat. Let’s create something worth remembering.
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="rounded-lg overflow-hidden shadow-2xl hover:scale-[1.03] transition-transform duration-300 ease-in-out">
            <Gallery />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
