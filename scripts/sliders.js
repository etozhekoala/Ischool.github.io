const sliderReviews = new Swiper('._customer-reviews__slider', {
  wrapperClass: '_customer-reviews__slider-wrapper',
  slideClass: '_customer-reviews__slider-slide',
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: '._customer-reviews__button-next',
    prevEl: '._customer-reviews__button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    680: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    940: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  },

});

const sliderClients = new Swiper('._customer-clients__slider', {
  wrapperClass: '_customer-clients__slider-wrapper',
  slideClass: '_customer-clients__slider-slide',
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: '._customer-clients__button-next',
    prevEl: '._customer-clients__button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    500: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    
    728: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    
    940: {
      slidesPerView: 4,
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 5,
      spaceBetween: 30
    },
  },
});