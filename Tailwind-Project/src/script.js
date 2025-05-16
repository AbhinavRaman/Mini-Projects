//toggle for responsive navbar
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}

//slide for expert chefs part
let currentIndex = 0;

function showSlide(index) {
  const slider = document.getElementById("slider");
  const slides = document.querySelectorAll("#slider > div");
  const totalSlides = slides.length;

  if (index >= totalSlides) currentIndex = 0;
  if (index < 0) currentIndex = totalSlides - 1;

  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}