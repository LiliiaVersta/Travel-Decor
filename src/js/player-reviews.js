import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

window.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 16,
    centeredSlides: false,
    loop: true,
    clickable: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: {
        spaceBetween: 16,
      },

      1200: {
        spaceBetween: 16,
      },
    },
  });
});
