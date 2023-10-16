const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  speed: 1000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 1000,
  },

  loop: true,

   // Responsive breakpoints
   breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
   
    // when window width is >= 850px
    850: {
      slidesPerView: 4,
      spaceBetween: 40
    },

    // when window width is >= 1240px
    1240: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});