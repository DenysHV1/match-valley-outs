import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const gallerySwiper = () => {
  new Swiper('.swiper-gallery', {
    slidesPerView: 1,
    slidesPerGroup: 2,
    spaceBetween: 16,
    loop: false,
    grabCursor: true,
    centeredSlides: false,
    navigation: {
      nextEl: '.swiper-button-next-gallery',
      prevEl: '.swiper-button-prev-gallery',
    },
    pagination: {
      el: '.swiper-pagination-gallery',
      clickable: true,
    },
    breakpoints: {
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });
};
export default gallerySwiper;
