import React from "react";
import "./gallery.css";
import { useState, useEffect } from "react";


export default function Gallery() {

    const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");

    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("show");
    }
    slides[slideIndex - 1].classList.add("show");

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }

  function plusSlides(n) {
    setSlideIndex((prevIndex) => prevIndex + n);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  return (
    <section>
    <div class="container relative m-auto">
        <div class="mySlides w-50%  ">
            <div class="numbertext">1 / 6</div>
            <img className= "max-width-50% max-height-50%"
            src="https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/Screen%20Shot%202023-07-24%20at%201.20.11%20PM.png?raw=true" />
        </div>

        <div className="mySlides">
            <div className="numbertext">2 / 6</div>
            <img className= "max-width-50% max-height-50%"
            src="https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/Screen%20Shot%202023-07-24%20at%201.20.11%20PM.png?raw=true" />
        </div>

        <div className="mySlides">
            <div className="numbertext">3 / 6</div>
            <img src="https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/Nima.jpg?raw=true" />
        </div>

        <div className="mySlides">
            <div className="numbertext">4 / 6</div>
            <img src="https://media.istockphoto.com/id/1414621212/vector/pi-spiral-first-100-digits-of-the-circle-number-pi-forming-a-spiral.jpg?s=612x612&w=0&k=20&c=4MajYvLzKsLsCQC7v8dOOjDPNqqp1kJlYII5zLM6BOs=" />
        </div>


        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)} >&#10095;</a>

        <div className="caption-container">
            <p id="caption"></p>
        </div>

        <div className="row">
            <div className="column">
            <img className="demo cursor w-100%" src="https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/Screen%20Shot%202023-07-24%20at%201.20.11%20PM.png?raw=true" onClick={() => currentSlide(1)} />
            </div>
            <div className="column">
            <img className="demo cursor w-100%" src="https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/Screen%20Shot%202023-07-24%20at%201.20.11%20PM.png?raw=true"  onClick={() => currentSlide(2)} />
            </div>
            <div className="column">
            <img className="demo cursor w-100%" src="https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/Nima.jpg?raw=true" onClick={() => currentSlide(3)} />
            </div>
            <div className="column">
            <img className="demo cursor w-100%" src="img_lights.jpg" onclick="currentSlide(4)" alt=""/>
            </div>
            
        </div>
    </div>
    </section>
    );
}