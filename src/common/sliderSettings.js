import { Autoplay, Pagination, Navigation } from "swiper";

export const sliderSettings = {
  slidesPerView: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  navigation: true,
  modules: [Autoplay, Pagination, Navigation],
};
