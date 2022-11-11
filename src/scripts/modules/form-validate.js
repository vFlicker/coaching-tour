const formValidate = (form) => {
  const inputs = form.querySelectorAll('[data-validate]');
  const field = [];

  inputs.forEach((input) => {
    const line = input.closest('.form-group');

    if (!input.value) {
      field.push(input);
      line.classList.add('some-form__line-required');
      setTimeout(() => line.classList.remove('some-form__line-required'), 4000);
    }
  });

  if (field.length) {
    return false;
  }

  return true;
};

export default formValidate;