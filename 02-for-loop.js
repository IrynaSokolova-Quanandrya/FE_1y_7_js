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
const minSalary = 500;
const maxSalary = 5000;
let totalSalary = 0;

// 2. робимо цикл, проходимося по всім робітникам
// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`ЗП робітника ${i} - ${salary}`);

//     totalSalary += salary;    
// }
 
// console.log("totalSalary: ", totalSalary);
/*
 * Напиши скрипт який порахує суму всіх парних чисел,
 * які входять в діапазон чисел в змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в 
 * ньому 2 парних числа - 2 та 4, їх сума 6.
 */

// 1. створюємо змінні
const min = 0;
const max = 10;
let result = 0;


for(let i = min; i <= max; i += 1){
    if(i % 2 !== 0){
        // console.log('Число яке ми пропускаємо: ',i);
        continue;
    }
    result += i;

    // if(i % 2 === 0){
    //    console.log(i);
    //    result += i;
    // }
    
}
// console.log('result: ', result);


// Інструкції break та continue
