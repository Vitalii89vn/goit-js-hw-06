function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputNumber = document.querySelector('[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesField = document.querySelector('#boxes');



// console.log(Number(inputNumber.currentTarget.textContent));

createBtn.addEventListener('submit', event => {
  event.preventDefault();
  inputNumber.addEventListener('input', event => {
let currentRange = Number(event.currentTarget.value);
  console.log(currentRange);
  })
 
})

// createBtn.addEventListener('submit', event => {
//   event.preventDefault();
//   createBoxes();
// })



// function createBoxes(amount) {
//   amount = Number(inputNumber.currentTarget.value);
  
//   console.log(amount);
//   const boxes = 
//   boxesField.insertAdjacentElement('afterend', boxes)
//   let count = 30;
//   boxesField.style.backgroundColor = `${getRandomHexColor}`;
//   boxesField.style.border = "2px solid #000000";
//   boxesField.style.width = `(${count}+=10)px`;
//   boxesField.style.heigth = `(${count}+=10)px`;

// }