function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputNumber = document.querySelector('[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesField = document.querySelector('#boxes');

// const currentValue = inputNumber.addEventListener('input', event => {
//    Number(event.currentTarget.value);
//     console.log(Number(event.currentTarget.value));
//   })


// console.log(currentValue)
createBtn.addEventListener('submit', createBoxes())

// let count = 30;
// let currentSize =  count += 10;
// boxesField.style.backgroundColor = `${getRandomHexColor()}`;
// boxesField.style.border = "2px solid #000000";
// boxesField.style.width = currentSize + `px`;
// boxesField.style.heigth = currentSize + `px`;


function createBoxes(amount) {

  inputNumber.addEventListener('input', event => {
   Number(event.currentTarget.value);
    // console.log(Number(event.currentTarget.value));
  });
  console.log(amount);
  
  let count = 30;
  let currentSize =  count += 10;
  

  const boxes = '<div id="boxes"></div>';
  boxesField.insertAdjacentHTML('beforeend', boxes)
 
boxesField.style.backgroundColor = `${getRandomHexColor()}`;
boxesField.style.border = "2px solid #000000";
boxesField.style.width = currentSize + `px`;
boxesField.style.heigth = currentSize + `px`;

}
// console.log(createBoxes())