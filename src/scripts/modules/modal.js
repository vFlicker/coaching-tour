const body = document.querySelector('body');
const buttonsOpenModel = body.querySelectorAll('[data-modal]');

const hideModal = (modal) => {
  body.classList.remove('hidden');
  modal.classList.remove('is-activated');
};

const onButtonOpenModelClick = (evt) => {
  evt.preventDefault();

  const name = evt.target.dataset.modal;
  const modal = body.querySelector(`._modal[data-name='${name}']`);

  body.classList.add('hidden');
  modal.classList.add('is-activated');

  const closeButton = modal.querySelector('.close');
  const black = modal.querySelector('.black');

  closeButton.addEventListener('click', () => hideModal(modal));
  black.addEventListener('click', () => hideModal(modal));
};

buttonsOpenModel.forEach((buttonOpenModel) => buttonOpenModel.addEventListener('click', onButtonOpenModelClick));
