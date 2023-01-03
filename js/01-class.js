/*
 * Класи
 * 🐷 - об'явлення (Car)
 * 🐷 - конструктор
 * 🐷 - методи 
 * 🐷 - static(description, logInfo)
 * 🐷 - приватні властивості
 * 🐷 - синтаксис публічних властивостей та методи класів
 * 🐷 - Геттери та сеттери
 */


// function Car (model, price, year, color){
//     this.model = model;
//     this.price = price;
//     this.year = year;
//     this.color = color;     
// }

// Car.prototype.changePrice = function(newPrice){
//     this.price = newPrice;
// }

// Car.description = 'Це функція конструктор!'

// // console.log(Car.model);
// const carInstance = new Car();
// const audi = new Car('A5', 40000, 2020, 'black');
// console.log(audi);


// const mazda = new Car('mazda-3', 35000, 2022, 'red');
// console.log(mazda);


class Car {
    static description = 'Це функція конструктор!'

    constructor(model, price, year, color){
        this.model = model;
        this._price = price;
        this.year = year;
        this.color = color;
    }

    get price(){
        this._price;
    }

    set price(newPrice){
        this._price = newPrice;
    }
}
// const audi = new Car('A5', 40000, 2020, 'black');
// console.log(audi);
// console.log(audi.price);
// console.log(audi.price(38000));


const mazda = new Car('mazda-3', 35000, 2022, 'red');
console.log(mazda);

