import Swiper from "swiper/bundle";
 import { Mousewheel, Autoplay, EffectFade, Thumbs } from "swiper/modules";
import { cynDestroySwiper } from "../utils/functions";

export const projectsSwiper = new Swiper(".projects-wrapper", {
  modules: [Autoplay],
  slidesPerView: 3,
  centeredSlides: true,

  spaceBetween: 16,
  speed: 800,
  autoplay: {
    delay: 1800,
  },

  breakpoints: {
    1390: {
      slidesPerView: 4.2,
      centeredSlides: false,
    },
    1200: {
      slidesPerView: 3.2,
      centeredSlides: false,
    },
    370: {
      slidesPerView: 2,
      centeredSlides: false,
    },
  },
});

export const customerSwiperThumbs = new Swiper(".customer-thumbs", {
  modules: [Autoplay],
  slidesPerView: 4.2,
  spaceBetween: 16,
  watchSlidesProgress: true,
  speed: 800,
});

export const customerSwiper = new Swiper(".customer-wrapper", {
  modules: [EffectFade, Autoplay, Thumbs],
  slidesPerView: 1,
  effect: "fade",
  speed: 800,
  thumbs: { swiper: customerSwiperThumbs },
});

export const uiDesignSwiper = new Swiper("#uiDesignSwiper", {
  modules: [EffectFade, Mousewheel],
  slidesPerView: 1,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 800,
  mousewheel: true,
  allowTouchMove: false,
  width: window.innerWidth,
});

export const seoSwiper = new Swiper("#seoMainSwiper", {
  modules: [EffectFade, Mousewheel],
  slidesPerView: 1,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 800,
  mousewheel: true,
  allowTouchMove: false,
  width: window.innerWidth,
});

export const marketingSwiper = new Swiper("#marketingMainSwiper", {
  modules: [EffectFade, Mousewheel],
  slidesPerView: 1,
  scrollbar: {
    // el: ".swiper-scrollbar",
    // draggable: true,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 600,
  mousewheel: true,
  allowTouchMove: false,
  width: window.innerWidth,
  
});


export const portfolioServicePage = new Swiper("#portfolioServicePage", {
  modules: [Autoplay],
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 16,
  autoplay: {
    disableOnInteraction: false,
  },

  breakpoints: {
    1240: {
      slidesPerView: 4.2,
    },
  },
});

export const brandsSwiper = new Swiper("#brandsSwiper", {
  modules: [Autoplay],
  slidesPerView: 3,
  autoplay: true,
  spaceBetween: 24,

  breakpoints: {
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 7,
    },
    1440: {
      slidesPerView: 9,
    },
  },
});

if (window.innerWidth <= 1240) {
  cynDestroySwiper(uiDesignSwiper, "#uiDesignSwiper");
  cynDestroySwiper(seoSwiper, "#seoMainSwiper");
  cynDestroySwiper(marketingSwiper, "#marketingMainSwiper");
}
export const mobile_about = new Swiper(".about-sections", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//   export const about = new Swiper(".about", {
//   direction: "marketingMainSwiper",
//   slidesPerView: 1,
//   spaceBetween: 30,
//   mousewheel: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

//     const about = new Swiper(".about", {
//     direction: "vertical",
//     slidesPerView: 1,
//     spaceBetween: 0,
//     mousewheel: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });

export const abouts = new Swiper(".abouts", {
  // direction: "marketingMainSwiper",
  slidesPerView: 1,
  // effect: "fade",
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      //   shadow: true,
      translate: ["-120%", 0, -500],
    },
    next: {
      //   shadow: true,
      translate: ["120%", 0, -500],
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
