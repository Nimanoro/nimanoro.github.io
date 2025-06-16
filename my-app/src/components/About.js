import React from "react";
import Gallery from "./gallery";

export default function About() {
  return (
    <section id="about" className="bg-black text-white py-20 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Gallery */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Gallery />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-6">
            Who I Am
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I’m <span className="text-white font-semibold">Nima Norouzi</span>, a Computer Science student at UBC — but more than that, I’m a builder. I love turning ideas into real, working things that people actually use.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Whether I’m crafting a Java-based soccer sim, translating messy math into LaTeX, or coding up stretch apps and indie tools — my focus stays the same:
            <span className="block mt-2 text-white font-medium italic">Make it clean. Make it useful. Make it hit.</span>
          </p>

          <div className="text-gray-300 space-y-4 mb-6">
            <p>🧠 What I know: Python, Java, Racket, React, Node, Tailwind</p>
            <p>🎮 What I’ve built: Self-driving cars, AI fitness coaches, music tools, productivity apps</p>
            <p>🧩 What I love: Volleyball, soccer, chess, beatmaking, surreal films, and writing things that matter</p>
          </div>

          <p className="text-gray-300 leading-relaxed">
            I’m always down to talk code, startups, creative work, or just life in general. If anything here resonated with you — reach out. Let’s build something cool.
          </p>
        </div>
      </div>
    </section>
  );
}
