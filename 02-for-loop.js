/*
 * Цикл for
 */

// for (let i = 15; i <= 20; i++) {
//     console.log(i);
// }

// console.log('Hello!');

/*
 * Pre-increment и Post-increment
 */

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let a = 10;
// const b = ++a;

// console.log(a);
// console.log(b);

/*
 * Напиши скрипт який підраховує загальну суму зп працівників.
 * Кількість робітників зберігається в змінній employees.
 * ЗП кожного працівника це випадкове число від 500 до 5000
 * Записати суму в змінну totalSalary і вивести в консоль
 */
// 1. сворюємо змінні
const employees = 5;
const minSalary = 10;
const maxSalary = 100;
const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
console.log(salary);
let totalSalary = 0;
// 2. робимо цикл, проходимося по всім робітникам
for (let i = 1; i <= employees; i += 1) {
   
    totalSalary += salary

    console.log(totalSalary);
    
}
// console.log(totalSalary);

/*
 * Напиши скрипт який порахує суму всіх парних чисел,
 * які входять в діапазон чисел в змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому 2 парних числа - 2 та 4, їх сума 6.
 */

// Інструкції break та continue
