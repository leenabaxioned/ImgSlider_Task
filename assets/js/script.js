/* Author: */
let slideIndex = 0;
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slides = document.getElementsByClassName("slides");

showSlides(slideIndex);

/*
 * function: Function to change the slide
 * @param {number} n
 * @return {void}
 *
 */
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  console.log(n);
  showSlides((slideIndex = n));
}

prev.addEventListener("click", () => {
  plusSlides(-1);
  //plusSlides(-1).style.transition = "ease-in-out 3s"
});

next.addEventListener("click", () => {
  plusSlides(1);
});


function showSlides(n) {
  let i;

  if (n >= slides.length) {
    slideIndex = 0;
  }

  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.transition = "none"
  }

  slides[slideIndex].style.display = "block";
  slides[slideIndex].style.transition = "all 3s ease-in-out 3s"
}