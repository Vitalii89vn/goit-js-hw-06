function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputNumber = document.querySelector('[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesField = document.querySelector('#boxes');
const createdBoxes = document.querySelectorAll('.box');

createBtn.addEventListener('click', createBoxes());
destroyBtn.addEventListener('click', destroyBoxes());


function createBoxes(amount) {
  inputNumber.addEventListener('input', event => {
    amount = Number(event.currentTarget.value);

    let counter = [];
    for (let i = 1; i <= amount; i += 1) {
      counter.push(i);
    }
    const code = counter.map(element => {
      let startCount = 20;
      let currentSize = startCount += 10 * element;
      return `<div class="box" style = " background-color: ${getRandomHexColor()} ; border: 2px solid rgb(0, 0, 0); width: ${currentSize}px; height: ${currentSize}px; " ></div >`
    }).join('');
      
    boxesField.insertAdjacentHTML('beforeend', code)
  })
}
  
function destroyBoxes() {
 createdBoxes.innerHTML = '';
  }
  


// function getCurrentRange(range) {
//   inputNumber.addEventListener('input', event => {
//     range = Number(event.currentTarget.value);
//   })
// }
