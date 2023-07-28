import React from "react";
import "./button.css" 
import "./typed.css"

export default function Home() {
  return (
    <section id="about" className="h-100% w-100%  m-0 p-0 overflow-x-hidden overflow-y-hidden">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="px-10 sm:px-20 py-10">
          <img  src ="https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/Nima.jpg?raw=true"
            width="400" 
            height="200"/>
        </div>
        <div className="w-90% h-90% sm:w-50% sm:h-50% justify-end lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className= "wrapper">
            <div 
            className="text-center typing title-font sm:text-4xl text-3xl mb-4 font-medium text-white pb:2vh">
            Hello! I'm Nima Norouzi.
            </div>
           <p className="mb-10 mx-10 text-center text-lg sm:text-md px-10 sm:px-0">
           As a Computer Science student at the University of British Columbia 
           and a recipient of the OIS award, I am fueled by my passion 
           for innovation and creativity. <br/> <br/> I am constantly seeking out new 
           ideas, technologies, and projects to broaden my horizons and push 
           the boundaries of what is possible.<br/>
           
          </p>
          </div>
          
          <div className="flex px-20 md:px-20 justify-items-center align-center">
            <a
              href="#/contact"
              className="mr-4 inline-flex  text-center btn-5 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              <span>Work With Me</span>
            </a>
            <a
              href="#/projects"
              className="ml-4 text-center btn-5 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
               <span>My Past Works</span>
              
            </a>
            </div>
        </div>
      </div>
    </section>
  );
}