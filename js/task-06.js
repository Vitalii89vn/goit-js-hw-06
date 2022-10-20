const inputValue = document.querySelector('#validation-input');
const styleInput = document.querySelector('style')
styleInput.remove();

const checkValueLength = inputValue.addEventListener('blur', event => {
  inputValue.classList.add(`#validation-input`);
  
  if (event.currentTarget.value.length === Number(inputValue.dataset.length)) {
    inputValue.classList.add(`valid`);
    inputValue.classList.remove(`invalid`);
  } else {
    inputValue.classList.add(`invalid`);
      }
    console.log(event.currentTarget.value.length === Number(inputValue.dataset.length))

  })
  