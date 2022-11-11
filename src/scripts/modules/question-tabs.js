import slideToggle from './slide-effects';

const buttons = document.querySelectorAll('.head-button');
let lockButton = false;

const onButtonClick = (evt) => {
  evt.preventDefault();

  const currentButton = evt.target;
  const listItem = currentButton.closest('.question__list-item');
  const text = listItem.querySelector('.text');

  if (!lockButton) {
    currentButton.classList.toggle('is-activated');
    lockButton = true;

    window.setTimeout(() => {
      lockButton = false;
    }, 500);
  }

  slideToggle(text);
};

buttons.forEach((button) => button.addEventListener('click', onButtonClick));
