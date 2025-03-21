const slidesWrapper = document.getElementById("slidesWrapper");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
function updateSlider() {
  slidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}
nextBtn.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  updateSlider();
});
prevBtn.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateSlider();
});

const typingTarget = document.getElementById('typing-text');
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
const fadeTextElement = document.getElementById('fade-text');
const titles = ["Web Developer", "Full Stack Developer"];
let currentTitleIndex = 0;
function fadeText() {
  fadeTextElement.style.opacity = 1;
  fadeTextElement.textContent = titles[currentTitleIndex];
  setTimeout(() => {
    fadeTextElement.style.opacity = 0;
  }, 1000);
  setTimeout(() => {
    currentTitleIndex = (currentTitleIndex + 1) % titles.length;
  }, 1500);
}
fadeText();
setInterval(fadeText, 2000);
