const swiper = new Swiper('.review-swiper', {
  loop: true,
  slidesPerView: 3,
  speed: 400,
  centeredSlides: true,
  slideToClickedSlide: true,
  toggle: true,
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    776: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 70
    }
  }

});
