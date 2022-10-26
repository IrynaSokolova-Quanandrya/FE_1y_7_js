/*
 * Нипиши скрипт який порахує суму всіх парних чисел в масиві.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

let total = 0;

for (const number of numbers) {
    if (number % 2 === 0) {
        console.log('ти парне число: ', number);
        total += number
    }    
}
console.log(total);