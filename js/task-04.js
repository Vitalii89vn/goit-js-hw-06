let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueBtn = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    valueBtn.textContent = counterValue;
    console.log(counterValue);
});

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    valueBtn.textContent = counterValue;
    console.log(counterValue);
});

