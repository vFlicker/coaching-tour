"use strict";

(function () {
  'use strict';

  var body = document.querySelector('body');
  var menu = body.querySelector('.header__menu');
  var toggleButton = body.querySelector('.header__burger');

  var toggleButtonClickHandler = function toggleButtonClickHandler(evt) {
    evt.preventDefault();
    menu.classList.toggle('active');
    toggleButton.classList.toggle('active');
    body.classList.toggle('lock');
  };

  toggleButton.addEventListener('click', toggleButtonClickHandler);
  var body$1 = document.querySelector('body');
  var smoothLinks = body$1.querySelectorAll('.header__list-item, .footer__item-list');
  var menu$1 = body$1.querySelector('.header__menu');
  var toggleButton$1 = body$1.querySelector('.header__burger');

  var onLickClick = function onLickClick(evt) {
    evt.preventDefault();
    var id = evt.target.getAttribute('href');
    menu$1.classList.remove('active');
    toggleButton$1.classList.remove('active');
    body$1.classList.remove('lock');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  smoothLinks.forEach(function (smoothLink) {
    return smoothLink.addEventListener('click', onLickClick);
  });
  var swiper = window.Swiper;
  var init = false;

  var swiperMode = function swiperMode() {
    var desktop = window.matchMedia('(min-width: 992px)');
    var noDesktop = window.matchMedia('(min-width: 280px) and (max-width: 991px)');

    if (desktop.matches) {
      if (!init) {
        init = true;
        swiper = new window.Swiper('.swiper', {
          loop: true,
          slidesPerView: 1,
          speed: 1500,
          autoplay: {
            delay: 9000,
            disableOnInteraction: false
          },
          allowTouchMove: false,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          }
        });
      }
    } else if (noDesktop.matches) {
      var hasSwiperProperty = ('destroy' in swiper);

      if (hasSwiperProperty) {
        swiper.destroy();
        init = false;
      }
    }
  };

  var onLoad = function onLoad() {
    swiperMode();
  };

  var onResize = function onResize() {
    swiperMode();
  };

  window.addEventListener('load', onLoad);
  window.addEventListener('resize', onResize);

  var slideUp = function slideUp(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var element = target;
    element.style.transitionProperty = 'height, margin, padding';
    element.style.transitionDuration = "".concat(duration, "ms");
    element.style.height = "".concat(element.offsetHeight, "px"); // eslint-disable-next-line no-unused-expressions

    element.offsetHeight;
    element.style.overflow = 'hidden';
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    window.setTimeout(function () {
      element.style.display = 'none';
      element.style.removeProperty('height');
      element.style.removeProperty('padding-top');
      element.style.removeProperty('padding-bottom');
      element.style.removeProperty('margin-top');
      element.style.removeProperty('margin-bottom');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
      element.classList.remove('_slide');
    }, duration);
  };

  var slideDown = function slideDown(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var element = target;
    element.style.removeProperty('display');

    var _window$getComputedSt = window.getComputedStyle(element),
        display = _window$getComputedSt.display;

    if (display === 'none') {
      display = 'block';
    }

    element.style.display = display;
    var height = element.offsetHeight;
    element.style.overflow = 'hidden';
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0; // eslint-disable-next-line no-unused-expressions

    element.offsetHeight;
    element.style.transitionProperty = 'height, margin, padding';
    element.style.transitionDuration = "".concat(duration, "ms");
    element.style.height = "".concat(height, "px");
    element.style.removeProperty('padding-top');
    element.style.removeProperty('padding-bottom');
    element.style.removeProperty('margin-top');
    element.style.removeProperty('margin-bottom');
    window.setTimeout(function () {
      element.style.removeProperty('height');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
      element.classList.remove('_slide');
    }, duration);
  };

  var slideToggle = function slideToggle(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

    if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');

      if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
      }

      return slideUp(target, duration);
    }

    return null;
  };

  var buttons = document.querySelectorAll('.head-button');
  var lockButton = false;

  var onButtonClick = function onButtonClick(evt) {
    evt.preventDefault();
    var currentButton = evt.target;
    var listItem = currentButton.closest('.question__list-item');
    var text = listItem.querySelector('.text');

    if (!lockButton) {
      currentButton.classList.toggle('is-activated');
      lockButton = true;
      window.setTimeout(function () {
        lockButton = false;
      }, 500);
    }

    slideToggle(text);
  };

  buttons.forEach(function (button) {
    return button.addEventListener('click', onButtonClick);
  });
  var body$2 = document.querySelector('body');
  var buttonsOpenModel = body$2.querySelectorAll('[data-modal]');

  var hideModal = function hideModal(modal) {
    body$2.classList.remove('hidden');
    modal.classList.remove('is-activated');
  };

  var onButtonOpenModelClick = function onButtonOpenModelClick(evt) {
    evt.preventDefault();
    var name = evt.target.dataset.modal;
    var modal = body$2.querySelector("._modal[data-name='".concat(name, "']"));
    body$2.classList.add('hidden');
    modal.classList.add('is-activated');
    var closeButton = modal.querySelector('.close');
    var black = modal.querySelector('.black');
    closeButton.addEventListener('click', function () {
      return hideModal(modal);
    });
    black.addEventListener('click', function () {
      return hideModal(modal);
    });
  };

  buttonsOpenModel.forEach(function (buttonOpenModel) {
    return buttonOpenModel.addEventListener('click', onButtonOpenModelClick);
  });
  var tabs = document.querySelectorAll('.route__list-item');
  var mediaQuery = window.matchMedia('(max-width: 767px)');

  var onTabClick = function onTabClick(evt) {
    var currentTab = evt.target.closest('.route__list-item');
    tabs.forEach(function (tab) {
      return tab.classList.remove('is-activated');
    });
    currentTab.classList.add('is-activated');

    if (mediaQuery.matches) {
      currentTab.scrollIntoView(true);
    }
  };

  tabs.forEach(function (tab) {
    return tab.addEventListener('click', onTabClick);
  });

  var formValidate = function formValidate(form) {
    var inputs = form.querySelectorAll('[data-validate]');
    var field = [];
    inputs.forEach(function (input) {
      var line = input.closest('.form-group');

      if (!input.value) {
        field.push(input);
        line.classList.add('some-form__line-required');
        setTimeout(function () {
          return line.classList.remove('some-form__line-required');
        }, 4000);
      }
    });

    if (field.length) {
      return false;
    }

    return true;
  };

  var form = document.querySelector('.js-form-validate');

  var onLoad$1 = function onLoad$1(response) {
    if (response.ok) {
      window.location.href = 'ok.html';
    } else {
      alert('Не удалось отправить форму');
    }
  };

  var onError = function onError(error) {
    console.error(error);
  };

  var formSubmitHandler = function formSubmitHandler(evt) {
    evt.preventDefault();
    var isFormValid = formValidate(evt.target);

    if (isFormValid) {
      var formData = new FormData(form);
      fetch('sendform.php', {
        method: 'POST',
        body: formData
      }).then(onLoad$1)["catch"](onError);
    }
  };

  form.addEventListener('submit', formSubmitHandler);
})();