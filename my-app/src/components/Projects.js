import React from "react";
import { projects } from "../data";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-28 px-6 sm:px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-serif text-green-400">
            My Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A curated mix of indie builds, creative tools, and ambitious experiments — shipped with love, logic, and lots of coffee.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              key={project.title}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full max-w-xs transform hover:scale-[1.03] transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-64 object-cover rounded-lg shadow-xl transition-opacity duration-300 group-hover:opacity-30"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-80 rounded-lg">
                <p className="text-green-400 text-sm sm:text-base mb-1">
                  {project.subtitle}
                </p>
                <h2 className="text-white font-semibold text-lg sm:text-xl mb-1">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-400 mb-3">{project.date}</p>
                <p className="text-sm text-gray-300 hidden sm:block">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
