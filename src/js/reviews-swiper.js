import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const reviewsSwiper = () => {
  new Swiper('.swiper-reviews', {
    slidesPerView: 1,
    centeredSlides: true,
    slidesPerGroup: 1,
    loop: false,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      type: 'bullets',
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1440: {
        slidesPerView: 1,
      },
    },
  });
};

export default reviewsSwiper;
