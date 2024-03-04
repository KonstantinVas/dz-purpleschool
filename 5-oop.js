'use strict';

const Persone = function (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

// Метод говорить
Persone.prototype.talk = function () {
    console.log(`Мое имя ${this.name}, Я говорю на языке: ${this.language}`);
}

Persone.prototype.ork = function () {
    return;
}

Persone.prototype.elf = function () {
    return;
}

Persone.prototype.strike = function () {
    this.weapon = 'Топор';
    console.log(`${this.name} наносит удар с помощью ${this.weapon}`);
}

Persone.prototype.createSpell = function () {
    this.weapon = 'Молния';
    console.log(`${this.name} создает заклинание типа: ${this.weapon}`);
}

const userPersoneOrk = new Persone('Орк', 'Вася', 'Орочий');
const userPersoneElf = new Persone('Эльф', 'Петя', 'Эльфийсский');

userPersoneOrk.ork()
console.log(userPersoneOrk);
userPersoneOrk.talk();
userPersoneOrk.strike();

userPersoneElf.elf()
console.log(userPersoneElf);
userPersoneElf.talk();
userPersoneElf.createSpell();

