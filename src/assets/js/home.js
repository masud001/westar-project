

// import Swiper JS
import Swiper from '../../../node_modules/swiper/swiper-bundle.min.js';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {  // Responsive breakpoints
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});