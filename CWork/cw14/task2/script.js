const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  prevBtn.style.display = index === 0 ? 'none' : 'block';
  nextBtn.style.display = index === slides.length - 1 ? 'none' : 'block';
}

nextBtn.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
});

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
});

showSlide(currentSlide);
