'use strict';

function randomDice(dice) {
    const min = 1;
    const diceObj = [
        { name: 'd4', count: 4 },
        { name: 'd6', count: 6 },
        { name: 'd8', count: 8 },
        { name: 'd10', count: 10 },
        { name: 'd12', count: 12 },
        { name: 'd16', count: 16 },
        { name: 'd20', count: 20 },
    ];
    const item = diceObj.find(elem => elem.name === dice);
    if (!item) {
        return 'Необходимо бросить dice 4, 6, 8, 10, 12, 16 или 20';
    }
    return Math.floor(Math.random() * (item.count - min + 1)) + min;
}

console.log(randomDice('d20'));
