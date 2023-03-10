function myTab(x) {
  x.classList.toggle("change");
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

let slideIndexs = 0;
showSlides2();

function showSlides2() {
  let i;
  let slide = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slideIndexs++;
  if (slideIndexs > slide.length) {slideIndexs = 1}
  slide[slideIndexs -1].style.display = "block";
  setTimeout(showSlides2, 3000); // Change image every 2 seconds
}
