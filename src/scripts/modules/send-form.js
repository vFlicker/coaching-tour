import formValidate from './form-validate';

const form = document.querySelector('.js-form-validate');

const onLoad = (response) => {
  if (response.ok) {
    window.location.href = 'ok.html';
  } else {
    alert('Не удалось отправить форму');
  }
};

const onError = (error) => {
  console.error(error);
};

const formSubmitHandler = (evt) => {
  evt.preventDefault();

  const isFormValid = formValidate(evt.target);

  if (isFormValid) {
    const formData = new FormData(form);

    fetch('sendform.php', { method: 'POST', body: formData })
      .then(onLoad)
      .catch(onError);
  }
};

form.addEventListener('submit', formSubmitHandler);
