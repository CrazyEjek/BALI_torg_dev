const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;
const totalSlides = slide.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0; // Переход на первый слайд
    } else if (index < 0) {
        currentIndex = totalSlides - 1; // Переход на последний слайд
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});