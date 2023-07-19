import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-0 py-20 md:flex-row flex-col items-center">
        <div className="px-20 py-10">
          <img  src ="https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/Nima.jpg?raw=true"
            width="400" 
            height="200"/>
        </div>
        <div className="w-1/2 h-1/2 justify-end lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="animate-pulse items-center title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, I'm Nima. </h1>
           <p className="mb-10 px-0 sm:px-0 smleading-relaxed">
           As a Computer Science student at the University of British Columbia 
           and a recipient of the OIS award, I am fueled by my passion 
           for innovation and creativity. I am constantly seeking out new 
           ideas, technologies, and projects to broaden my horizons and push 
           the boundaries of what is possible.
          </p>
          <div className="flex px-20 md:px-10 justify-items-center">
            <a
              href="contact"
              className="inline-flex  text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
               My Past Works
              
            </a>
            
          </div>


        </div>
          
        
      </div>
    </section>
  );
}