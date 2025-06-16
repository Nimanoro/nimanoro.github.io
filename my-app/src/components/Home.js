import React from "react";
import Typed from "react-typed";
import { motion } from "framer-motion";
import "./button.css";
import "./typed.css";

export default function Home() {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-black flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-48 h-48 md:w-60 md:h-60 overflow-hidden rounded-full border-4 border-green-400 shadow-lg hover:shadow-green-500 transition-shadow duration-300"
        >
          <img
            src="https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/Nima.jpg?raw=true"
            alt="Nima Norouzi"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col text-center md:text-left"
        >
          <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">
            Hi, I’m Nima Norouzi.
          </h1>

          <Typed
            strings={[
              "Computer Science @ UBC",
              "Builder of digital experiences",
              "Indie Hacker & Problem Solver",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
            className="text-green-400 text-xl sm:text-2xl font-mono mb-6"
          />

          <p className="text-gray-300 text-lg sm:text-md leading-relaxed max-w-xl mb-8">
            I build things that people want. Whether it's an indie app, a clean UI, or a product that solves real problems — I bring it to life with code, creativity, and caffeine. Currently building, shipping, and growing.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#/contact"
              className="btn-5 bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg text-lg transition duration-200"
            >
              Work With Me
            </a>
            <a
              href="#/projects"
              className="btn-5 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white py-2 px-6 rounded-lg text-lg transition duration-200"
            >
              See My Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
