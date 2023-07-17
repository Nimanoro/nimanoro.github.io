import React from 'react';
import './Homepage.css';
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
  
function Homepage() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href='#Contact'>Contact</a></li>
                </ul>
  
                
            </nav>
  
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class= "fade-in">
                          Nima Norouzi
                        </h1>
                        <p class="text-small">
                        As a Computer Science student at the University of 
                        British Columbia and a recipient of the OIS award,
                        I am fueled by my passion for innovation and creativity.
                        I am constantly seeking out new ideas, technologies,
                        and projects to broaden my horizons and push the 
                        boundaries of what is possible.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Projects
                        </h1>
                        <p class="project-title">
                            <b> Soccer Manager Simulation: 
                            July 2023 – present</b> </p>
                            <p class = "text-small">  <ul>A single player soccer manager simulation game developed in Java using object-oriented approach.</ul>
                            	  <ul>Enable user to compete against ten teams in the league and gain coin and update their players to make progress through the game.</ul>
                                <ul> Graphical interface of the game designed to make the best experience for the user.</ul>
                                <img src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fc9%2F-Insert_image_here-.svg%2F2560px--Insert_image_here-.svg.png&tbnid=Po5wQNsUmpgOQM&vet=12ahUKEwjh2dvB8JSAAxVoAzQIHePfB6cQMygAegUIARDDAQ..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3A-Insert_image_here-.svg&docid=NS7gCiObjS56kM&w=2560&h=1920&q=place%20to%20insert%20image%20image&ved=2ahUKEwjh2dvB8JSAAxVoAzQIHePfB6cQMygAegUIARDDAQ" alt ="NO SHIT"/>

                        </p>


                        <p class="project-title">
                        <b> TransLink API project: (Python, API)
                        January 2023 – January 2023 </b>
                        </p>
                        <p class = "text-small">
                      	<ul>Developed a real-time bus stop tracker using the official Vancouver public transportation API and python.</ul>
                        <ul>Implemented route number and time filters to make it easier for users to find the right bus.</ul>
                        </p>
                        



                        <p class="project-title">
                        <b>Math2Latex: (Python, PyTorch, ScikitLearn, Matplotlib)
                        May 2023 - Present</b>
                        </p>
                        <p class= "text-small">
                        <ul>Developing an application converting handwritten mathematic expression to latex script with a team of two.</ul>
                        <ul>The project is developing by pytorch by designing a CNN model.</ul>
                        <ul>The first phase of project was finished recognizing 83 symbols successfully by 90% accuracy.</ul>
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}
  
export default Homepage