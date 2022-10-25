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


function createBoxes(amount) {
  amount = inputNumber.addEventListener('input', event => {
    Number(event.currentTarget.value);
    console.log(Number(event.currentTarget.value));
  
      let count = 20;
      let currentSize =  count += 10;
  
    boxesField.style.backgroundColor = `${getRandomHexColor()}`;
    boxesField.style.border = "2px solid #000000";
    boxesField.style.width = currentSize + `px`;
    boxesField.style.minHeigth = currentSize + `px`;
    
      const boxes = '<div id="boxes" style="background-color: `${getRandomHexColor()}`;border: 2px solid rgb(0, 0, 0);width: currentSize + `px`;height: currentSize + `px`;"></div>';
      boxesField.insertAdjacentHTML('afterend', boxes)
 
    

  })
}
// console.log(createBoxes())