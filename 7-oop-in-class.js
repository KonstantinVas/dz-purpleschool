'use strict';

class Persone {
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }

    talk() {
        console.log(`Мое имя ${this.name}, Я говорю на языке: ${this.language}`);
    }
}

class Ork extends Persone {

    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.weapon = weapon;
    }

    talk() {
        console.log(`А что говорить то? Ну, мое имя ${this.name}, Я говорю на языке: ${this.language}`);
    }

    strike() {
        console.log(`${this.name} наносит удар с помощью ${this.weapon}`);
    }
}

class Elf extends Persone {

    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.weapon = weapon;
    }

    talk() {
        console.log(`Пшел ты в жопу ${ork.name}! Мое имя ${this.name}, Я говорю на языке: ${this.language} и я тебя размотаю`);
    }

    createSpell() {
        console.log(`${this.name} создает заклинание типа: ${this.weapon}`);
    }
}


const ork = new Ork('Орк', 'Вася', 'Орочий', 'Топор');
const elf = new Elf('Эльф', 'Петя', 'Эльфийсский', 'Молния');

console.log(ork);
ork.talk();
ork.strike();

console.log(elf);
elf.talk();
elf.createSpell();
