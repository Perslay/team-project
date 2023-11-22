const swiper = new Swiper('.products-js-slider', {
    slidesPerView: 4,
    spaceBetween: 18,
    pagination: {
        el: '.products-js-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 18,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 18,
        }

    }
})