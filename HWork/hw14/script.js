const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dots');

let currentSlide = 0;

slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  prevBtn.style.display = index === 0 ? 'none' : 'block';
  nextBtn.style.display = index === slides.length - 1 ? 'none' : 'block';
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
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
