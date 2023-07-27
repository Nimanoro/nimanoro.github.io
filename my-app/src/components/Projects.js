import React from "react";
import { projects } from "../data";




export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 h-100% w-100% m-0 p-0 overflow-x-hidden  body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="text-center  font-serif sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2  p-4">
              <div className="flex relative w-48 h-48 sm:h-96 sm:w-96  p-4">
                <img
                  alt="Project Picture"
                  className="absolute inset-0 h-48 w-48 sm:h-96 sm:w-96 object-center px-4"
                  src={project.image}
                />
                <div className=" absolute leading-9	inset-0 w-48 h-48 sm:h-96 sm:w-96 px-0 sm:px-8 py:0 sm:py-10 z-10  border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <p className="tracking-widest text-center sm:text-lg text-sm text-ellipsis title-font  text-green-400 mb-2">
                    {project.subtitle}
                  </p>
                  <h1 className="tracking-widest title-font sm:text-lg text-sm font-medium text-white sm:mb-0 mb-2">
                    {project.title}
                  </h1>
                  <h1 className="tracking-widest title-font sm:text-lg text-sm font-medium text-white mb-3">
                    {project.date}
                  </h1>
                  <p className="hidden md:block leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}