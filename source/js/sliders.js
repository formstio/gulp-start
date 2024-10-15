import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

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

});
// console.log(swiperBar);