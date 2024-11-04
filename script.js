const images = document.querySelectorAll('.slider-image');
const slider = document.querySelectorAll('.slider');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
        slider[i].classList.toggle('active', i === index);
    });
}

document.querySelector('.prev-button').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
});

document.querySelector('.next-button').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});

slider.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.dataset.index);
        showImage(currentIndex);
    });
});

window.onload = () => showImage(currentIndex);