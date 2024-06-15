"use strict";


{
    const images = [
        'images/syokanokaze.jpg',
        'images/bikan.jpg',
        'images/megaraba.jpg',
        'images/sitsunen.jpg',
        'images/akusyu.jpg',
        'images/zyama.jpg'
    ];
    const slideImage = document.getElementById('mainImage');
    const nextButton = document.getElementById('nextImage');
    const prevButton = document.getElementById('prevImage');

    let current = 0;

    mainImage.textContent = `1/${images.length}`;

    nextButton.addEventListener('click', function() {
        if (current + 1 < images.length) {
            current++;
            slideImage.src = images[current];
        }
        else if (current + 1 === images.length) {
            current = 0;
            slideImage.src = images[current];
        }
        mainImage.textContent = `${current + 1}/${images.length}`;
    });

    prevButton.addEventListener('click', function() {
        if (current > 0) {
            current--;
            slideImage.src = images[current];
        }
        else if (current === 0) {
            current = images.length - 1;
            slideImage.src = images[current];
        }
        mainImage.textContent = `${current + 1}/${images.length}`;
    });
}