import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-44 h-44 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-green-400 shadow-lg hover:shadow-green-500 transition-shadow duration-300"
        >
          <img
            src="https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/Nima.jpg?raw=true"
            alt="Portrait of Nima Norouzi"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center md:text-left flex flex-col justify-center"
        >
          <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Hi, I’m Nima Norouzi.
          </h1>

          <ReactTyped
            strings={[
              "CS @ UBC | Builder, Not Just a Student",
              "Indie Hacker → 300+ Users in a Week",
              "Design + Code + Execution = My Game",
            ]}
            typeSpeed={40}
            backSpeed={20}
            loop
            className="text-green-400 text-xl sm:text-2xl font-mono mb-6"
          />

          <p className="text-gray-300 text-lg max-w-xl mb-8 leading-relaxed">
            I bring ideas to life — clean, useful, and fast. From indie tools to full-stack platforms, I build for real humans with real needs. Currently shipping, scaling, and learning out loud.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#/contact"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg text-lg transition duration-200 focus:ring-2 focus:ring-green-400"
              aria-label="Contact me"
            >
              Work With Me
            </a>
            <a
              href="#/projects"
              className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white font-semibold py-2 px-6 rounded-lg text-lg transition duration-200 focus:ring-2 focus:ring-gray-600"
              aria-label="See my projects"
            >
              See My Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
