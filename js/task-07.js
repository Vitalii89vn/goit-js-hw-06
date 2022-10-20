const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputRange.addEventListener('input', event => {
    let currentRange = Number(event.currentTarget.value);
    text.style.fontSize = `${ currentRange }px`;

    console.log(event.currentTarget.value)

})
