/*
 * Класи
 * 🐷 - об'явлення
 * 🐷 - конструктор
 * 🐷 - методи
 * 🐷 - static
 * 🐷 - приватні властивості
 * 🐷 - синтаксис публічних властивостей та методи класів
 * 🐷 - Геттери та сеттери
 */

class Car {
    static description = 'Клас який описує автомобіль';

    static logInfo(carObj) {
        console.log('Car.logInfo -> carObj', carObj);
    }

    constructor({ brand, model, price } = {}) {
        this.brand = brand;
        this._model = model;
        this._price = price;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    get model() {
        return this._model;
    }

    set model(newModel) {
        this._model = newModel;
    }
}

const carInstance = new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
});

console.log(carInstance.model);
carInstance.model = 'Q4';
console.log(carInstance.model);

console.log(carInstance.price);
carInstance.price = 50000;
console.log(carInstance.price);

console.log(carInstance);