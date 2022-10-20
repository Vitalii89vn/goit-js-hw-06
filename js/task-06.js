const inputValue = document.querySelector('#validation-input');
// const dataValue = document.querySelector('[data-length="6"]')
console.log(inputValue);

const sssss = inputValue.addEventListener('blur', event => {
    if (event.currentTarget.value.length === inputValue.dataset.length) {
    event.classList.replace('#validation-input', '#validation-input.valid');
  } event.classList.replace('#validation-input', '#validation-input.invalid');
    
})




    // if (inputValue.currentTarget.value.length === inputValue.data - length.valueOf) {
    //     input.classList.add('validation-input.valid');
    // }input.classList.add('validation-input.invalid');

// if(inputValue.currentTarget.value.length = inputValue[data-length])