const inputValue = document.querySelector('#validation-input');
const style = document.querySelector('style')
// const dataValue = document.querySelector('[data-length="6"]')
console.log(style);

const sssss = inputValue.addEventListener('blur', event => {
    if (event.currentTarget.value.length === inputValue.dataset.length) {
    style.classList.replace('#validation-input', '#validation-input.valid');
  } style.classList.replace('#validation-input', '#validation-input.invalid');
    
})




    // if (inputValue.currentTarget.value.length === inputValue.data - length.valueOf) {
    //     input.classList.add('validation-input.valid');
    // }input.classList.add('validation-input.invalid');

// if(inputValue.currentTarget.value.length = inputValue[data-length])