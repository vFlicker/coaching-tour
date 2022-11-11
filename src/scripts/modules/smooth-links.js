const body = document.querySelector('body');
const smoothLinks = body.querySelectorAll('.header__list-item, .footer__item-list');
const menu = body.querySelector('.header__menu');
const toggleButton = body.querySelector('.header__burger');

const onLickClick = (evt) => {
  evt.preventDefault();
  const id = evt.target.getAttribute('href');

  menu.classList.remove('active');
  toggleButton.classList.remove('active');
  body.classList.remove('lock');

  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

smoothLinks.forEach((smoothLink) => smoothLink.addEventListener('click', onLickClick));
