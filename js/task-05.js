const inputField = document.querySelector('#name-input');
const outputField = document.querySelector('#name-output');
const textContent = outputField.textContent;

inputField.addEventListener('input', event => {
 event.currentTarget.value === `` ?
    outputField.textContent = textContent :
    outputField.textContent = event.currentTarget.value;
  

 })


  