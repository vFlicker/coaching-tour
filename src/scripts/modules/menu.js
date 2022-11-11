const body = document.querySelector('body');
const menu = body.querySelector('.header__menu');
const toggleButton = body.querySelector('.header__burger');

const toggleButtonClickHandler = (evt) => {
  evt.preventDefault();
  menu.classList.toggle('active');
  toggleButton.classList.toggle('active');
  body.classList.toggle('lock');
};

toggleButton.addEventListener('click', toggleButtonClickHandler);
