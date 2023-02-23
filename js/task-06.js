
const inputEl = document.querySelector('#validation-input');
const validLength = inputEl.dataset.length;

// console.log(validLength)


const makeBorderColor  = () => {
  if (inputEl.value.length === Number(validLength)) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');

  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');

  }
}

inputEl.addEventListener('blur', makeBorderColor );
