'use strict';
const arr = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' }
];

const uniqueArray = new Set(
  arr.map(index => arr.find(object => object.id === index.id))
);

console.log(uniqueArray);
