const inputField = document.querySelector('#name-input');
const outputField = document.querySelector('#name-output');

console.log(inputField.textContent)
inputField.addEventListener('input', event => {
    if (inputField.textContent === null) {
        return outputField.textContent;
    }         outputField.textContent = event.currentTarget.value;

        

})