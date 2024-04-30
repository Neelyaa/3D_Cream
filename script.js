let slideIndex = 0;
const slides = document.querySelectorAll('.slider_info');
const dots = document.querySelectorAll('.slider_nav_btn');
let intervalTime = setInterval(nextSlide, 5000);

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function moveSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
    clearInterval(intervalTime);
    intervalTime = setInterval(nextSlide, 5000);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        moveSlide(index);
    });
});