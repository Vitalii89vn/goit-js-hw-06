const inputField = document.querySelector('#name-input');
const outputField = document.querySelector('#name-output');

console.log(inputField.textContent)
inputField.addEventListener('input', event => {
    // outputField.textContent = event.currentTarget.value;
  
  if (!event.currentTarget.value) {
        outputField.textContent;
    }    outputField.textContent = event.currentTarget.value;
})




  // if (textInput.value = "") {
  //       outputField.textContent;
  //   }   outputField.textContent = event.currentTarget.value;