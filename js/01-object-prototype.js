/*
* Прототип об'єкту
* Object.create()
* [[Prototype]]
* Ланцюг прототипів
*/
// Що таке прототипне наслідування, малюю приклад
// Як створити прототип для нового об'єкту


// console.log([1, 2, 3, 4]);
// console.log(['a', 's', 'd']);
// const objA = {
//     a: 5,
//     b: 10,
// }

const objC = {
    q: 58,
    t: 68,
}
const objB = Object.create(objC)
objB.c = 1;
// console.log(objB);


const obj = {};
// console.log(obj);

const objA = Object.create(objB)

objA.a = 5;
objA.b = 10;
objA.q = 23;
// console.log(objA);

// console.log(objA.jbgfgfv);
// console.log(objA.hasOwnProperty('c'));
/**
 * Правило пошуку властивостей в ланцюжку прототипів 
 * Властивість hasOwnProperty
 */
