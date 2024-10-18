import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.banners__swiper', {

    direction: 'horizontal',
    loop: true,
    spaceBetween: 15,

    pagination: {
        el: '.slide-banner__pagination',
        bulletActiveClass: 'slide-banner__button-active',
        bulletClass: 'slide-banner__button',
    },

    navigation: {
        nextEl: '.slide-btn-right',
        prevEl: '.slide-btn-left',
    },
});


const swiperBar = new Swiper('.popular-block__slider', {

    slidesPerView: 1,
    slidesPerGroup: 1,
    direction: 'horizontal',
    loop: true,

    spaceBetween: 70,

    pagination: {
        el: '.popular-block__pagination',
    },

    navigation: {
        nextEl: '.popular-block__slide-right',
        prevEl: '.popular-block__slide-left',
    },

    breakpoints: {
        1728: {
            slidesPerView: 3,
            centeredSlides: true,
        }
    }

});
// console.log(swiperBar);