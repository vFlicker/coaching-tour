let swiper = window.Swiper;
let init = false;

const swiperMode = () => {
  const desktop = window.matchMedia('(min-width: 992px)');
  const noDesktop = window.matchMedia('(min-width: 280px) and (max-width: 991px)');

  if (desktop.matches) {
    if (!init) {
      init = true;

      swiper = new window.Swiper('.swiper', {
        loop: true,
        slidesPerView: 1,
        speed: 1500,
        autoplay: {
          delay: 9000,
          disableOnInteraction: false,
        },
        allowTouchMove: false,
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
      });
    }
  } else if (noDesktop.matches) {
    const hasSwiperProperty = 'destroy' in swiper;

    if (hasSwiperProperty) {
      swiper.destroy();
      init = false;
    }
  }
};

const onLoad = () => {
  swiperMode();
};

const onResize = () => {
  swiperMode();
};

window.addEventListener('load', onLoad);
window.addEventListener('resize', onResize);
