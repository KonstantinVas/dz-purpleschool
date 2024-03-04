'use strict';

class Car {
    #brand;
    #model;
    #_mileage;

    constructor(brand, model, mileage) {
        this.#brand = brand;
        this.#model = model;
        this.#mileage = mileage;
    }

    set #mileage(mileage) {
        this.#_mileage = mileage;
    }

    get #mileage() {
        return this.#_mileage;
    }

    changedMileage(newMille) {
        if (Number(this.#mileage) > Number(newMille)) {
            return false;
        }
        this.#mileage = newMille;
        return true;
    }

    get info() {
        return `Марка автомобиля ${this.#brand}, Модель автомобиля ${this.#model}, Пробег автомобиля ${this.#mileage}`;
    }
}

const car = new Car('BMW', 'X3', '23000');
console.log(car);
console.log(car.changedMileage('44000'));
console.log(car.info);
console.log(car);


