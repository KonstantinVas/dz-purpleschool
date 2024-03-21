'use strict';

const buttons = document.querySelectorAll('.button');
const main = document.querySelector('.main');
const count = document.querySelector('.count');

let clickCount = 0;


function updateCount() {
    count.textContent = clickCount;
}

function handleClick(event) {
    const button = event.target;
    const activeButton = document.querySelector('.button.active');

    if (activeButton) {
        activeButton.classList.remove('active');
        activeButton.textContent = 'Нажми меня';
    }

    button.classList.add('active');
    button.textContent = 'Нажата';
    clickCount++;
    updateCount();
}

buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
});
console.log(buttons);
updateCount();
