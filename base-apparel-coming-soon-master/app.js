const form = document.querySelector('form');
const inputEmail = document.querySelector('#email');
const errorMessage = document.querySelector('#error-message');
const successMessage = document.querySelector('#success-message');
const iconError = document.querySelector('#icon-error');

// validate email function from stackoverflow, return true/false
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(inputEmail.value);
  if (!validateEmail(inputEmail.value)) {
    errorMessage.classList.remove('hide');
    iconError.classList.remove('hide');
    inputEmail.classList.add('input-error');
    successMessage.classList.add('hide');
  } else if (validateEmail(inputEmail.value)) {
    errorMessage.classList.add('hide');
    iconError.classList.add('hide');
    inputEmail.classList.remove('input-error');
    successMessage.classList.remove('hide');
    inputEmail.value = '';
  }
});
