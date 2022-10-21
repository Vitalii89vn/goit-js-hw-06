function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
const spanText = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color')

changeColorBtn.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor(event) {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  spanText.textContent = `${getRandomHexColor()}`;
  
}