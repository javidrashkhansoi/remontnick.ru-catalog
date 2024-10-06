import Swiper from "swiper";
import { Pagination, } from "swiper/modules";

/** @type {NodeListOf<HTMLDivElement>} */
const productImagesSliders = document.querySelectorAll(".product-images");

productImagesSliders.forEach(slider => {
  const pagination = slider.querySelector(".product-images__pagination");

  const swiper = new Swiper(slider, {
    modules: [Pagination,],
    pagination: {
      clickable: true,
      el: pagination,
      enabled: true,
    },
    rewind: true,
  });
});
