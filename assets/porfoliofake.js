const slidesWrapper = document.getElementById("slidesWrapper");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function updateSlider() {
  slidesWrapper.style.transition = "transform 0.5s ease-in-out";
  slidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
});

// Typing effect
const typingTarget = document.getElementById("typing-text");
const textToType = "Hi, I'm Omkar Patil";
let index = 0;

function typeText() {
  if (index < textToType.length) {
    typingTarget.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeText, 120);
  } else {
    setTimeout(() => {
      typingTarget.textContent = "";
      index = 0;
      typeText();
    }, 2000);
  }
}
typeText();

// Fade Text Effect
const fadeTextElement = document.getElementById("fade-text");
const titles = ["Web Developer", "Full Stack Developer"];
let currentTitleIndex = 0;

function fadeText() {
  fadeTextElement.style.transition = "opacity 0.5s ease-in-out";
  fadeTextElement.style.opacity = 0;
  setTimeout(() => {
    fadeTextElement.textContent = titles[currentTitleIndex];
    fadeTextElement.style.opacity = 1;
    currentTitleIndex = (currentTitleIndex + 1) % titles.length;
  }, 500);
}

fadeText();
setInterval(fadeText, 2000);
