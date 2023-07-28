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
      n = 1;
    } else if (n < 1) {
      n = slides.length;
    }
  
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("show");
    }
    slides[n - 1].classList.add("show");
  
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n - 1].className += " active";
    captionText.innerHTML = dots[n - 1].alt;
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
        <div class="mySlides h-400 pb-10 ">
            <div class="numbertext">1 / 4</div>
            <img className= "max-width-30% max-height-50% imge"
            src="https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/Screen%20Shot%202023-07-24%20at%201.20.11%20PM.png?raw=true" />
        </div>

        <div className="mySlides pb-10">
            <div className="numbertext">2 / 4</div>
            <img className= "max-width-50% max-height-50% imge"
            src="https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/Nima.jpg?raw=true" />
        </div>

        <div className="mySlides pb-10">
            <div className="numbertext">3 / 4</div>
            <img className="imge"
            src="https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/IMG_5890.jpg?raw=true"/>
        </div>

        <div className="mySlides pb-10">
            <div className="numbertext pl-4">4 / 4</div>
            <img className="imge"
            src="https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/IMG_9494%20copy.jpg?raw=true" />
        </div>


        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)} >&#10095;</a>

        <div className="caption-container">
            <p id="caption"></p>
        </div>

        <div className="row">
            <div className="column">
            <img className="demo imge cursor w-100 h-400" src="https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/Screen%20Shot%202023-07-24%20at%201.20.11%20PM.png?raw=true" onClick={() => currentSlide(1)} />
            </div>
            <div className="column">
            <img className="demo cursor imge w-100 h-400" src="https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/Nima.jpg?raw=true"  onClick={() => currentSlide(2)} />
            </div>
            <div className="column">
            <img className="demo cursor imge w-100 h-400" src="https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/IMG_5890.jpg?raw=true" onClick={() => currentSlide(3)} />
            </div>
            <div className="column">
            <img className="demo cursor imge w-100 h-400" src="https://github.com/Nimanoro/nimanoro.github.io/blob/main/my-app/src/components/Pictures/IMG_9494%20copy.jpg?raw=true" onClick={() => currentSlide(4)} alt=""/>
            </div>
            
        </div>
    </div>
    </section>
    );
}