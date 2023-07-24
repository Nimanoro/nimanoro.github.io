import React from "react";
import "./button.css" 
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 pt-20  md:flex-row flex-col items-center">
        <div className="px-20 py-1 hero container max-w-screen-lg mx-auto flex">
          <img  src ="https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/Resume.png?raw=true"
            width="400" 
            height="200"
            className="mx-auto"/>
        </div>
        </div>
        <div className= 'container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
        <div className="justify-end lg:flex-grow  lg:px-24 md:px-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
           <div><p className="mb-10 px-0 sm:px-0 sm:leading-relaxed">
           Hey there! I'm Nima Norouzi, a computer science student based in Vancouver, British Columbia. I'm pursuing a Bachelor of Science in Computer Science at the University of British Columbia.
           </p>

           <p className="mb-10 px-0 sm:px-0 sm:leading-relaxed">My academic journey has been both challenging and rewarding. 
            From understanding the core structures of computation to mastering programming 
            languages like Python, Java, and Racket, I've embraced every opportunity to
             expand my knowledge and skills.</p>

            <p className="mb-10 px-0 sm:px-0 sm:leading-relaxed"> Outside of academics, I find joy in creative projects.
                  I've worked on a Java-based soccer manager simulation game,
                  where players can compete against various teams and strategize
                 their way to victory. Additionally, I'm part of a team developing 
                 "Math2Latex," an innovative application that converts handwritten 
                 mathematical expressions into LaTeX scripts.</p>

            <p className="mb-10 px-0 sm:px-0 sm:leading-relaxed">When I'm not coding or studying, you'll find me
                playing volleyball or watching soccer.
                Beside sports, I lob=ve playing chess and creating beats that enables me to explore the 
                world of music production.</p>


            <p className="mb-10 px-0 sm:px-0 sm:leading-relaxed"> In a nutshell, I'm a computer science enthusiast with a flair for 
              creativity and a love for connecting with others. 
              If you share any of these interests or simply want to chat about tech,
               music, or life in general, feel free to reach out—I'm always up for a 
               good conversation! </p>
          </div>
    



        </div>
          
        
      </div>
    </section>
  );
}