'use strict';

function timer() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);

    setInterval(() => {
        const currentTime = new Date();
        const timeDifference = newYear - currentTime;

        const seconds = Math.floor(timeDifference / 1000) % 60;
        const minutes = Math.floor(timeDifference / 1000 / 60) % 60;
        const hours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
        const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24) % 30;
        const months = Math.floor(timeDifference / 1000 / 60 / 60 / 24 / 30) % 12;

        const countDownElement = document.querySelector('.container');
        countDownElement.innerHTML = `
        ${months} месяцев
        ${days} дней
        ${hours} часов
        ${minutes} минут
        ${seconds} секунд
        `;
    }, 1000);
}
timer();
