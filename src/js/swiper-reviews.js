const swiper = new Swiper('.reviews-js-slider', {
  slidesPerView: 3,
  spaceBetween: 28,
  pagination: {
    el: '.reviews-js-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});
