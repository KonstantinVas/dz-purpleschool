'use strict';
const arr = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' }
];

const uniqueArray = [];

arr.map(function (element) {
  // Проверяем, есть ли уже объект с такими же свойствами в новом массиве
  if (!uniqueArray.find(item => item.id === element.id)) {
    return uniqueArray.push(element);
  }
});

const uniqueSet = new Set(uniqueArray);
console.log(uniqueSet);
