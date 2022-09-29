
// let num = '10';
// let str = "Hello world";
// const a = Number(str);
// console.log(Number.isNaN(a));

// let age = prompt("Скільки тобі років?")
// console.log(age);
// age = Number(age);
// console.log(age);
/*
 * Парс числа з Number.parseInt() і Number.parseFloat()
 */

let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
// console.log(elementWidth);
// console.log('elementWidth: ', elementWidth);

let elementHeight = "200.74px";
elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight: ', elementHeight);

/*
 * - Метод число.toFixed(digits)
 * - Матрьошка на прикладі  console.log(Number(число.toFixed(digits)))
 */
const salary = 1300.16472;
const digit = 2;
// const salaryFix = salary.toFixed(digit)
// console.log(Number(salary.toFixed(digit)))

/*
 * - Приведення до числа з Number(value)
 * - Значення NaN (Not a Number) і метод Number.isNaN(value)
 */
let quantity = '30';
let value = 'Цей рядок неможливо привести до числа';



/*
 * Обьект Math
 * - Підведення до ступеня
 * - Exponent operator
 */

const base = 2;
// const power = 5;

// console.log(Math.pow(base, power));

/*
 * Напиши скрипт який просить у користувача ввести число і степінь,
 * підводить число в цю степінь і виводить результат в консоль.
 */
// Алгоритм рішення:
// 1. попросити в користувача число і записати його в змінну
// const num = prompt("Дай число");
// 2. попросити в користувача степінь і записати її в змінну
// const power = prompt("Дай ще число");
// 3. вивести результат підведення числа в тепінь в консоль
// console.log(Math.pow(num, power));

const res1 = 2 ** 3;
// console.log(res1);
// const res2 = ;
// console.log(res2);
// const result = res1 + res2;
// console.log(res1 + res2);
/*
 * Генерим псевдовипадкові числа
 * - Math.random()
 * - Math.round()
 */
// console.log(Math.round(1.6));

// console.log(Math.random() * (60 - 20) + 20);

// Math.random() * (max - min) + min