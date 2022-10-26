/*
 * Напиши скрипт який рахує суму елементів двух масивів.
 */

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

const array3 = array1.concat(array2);

console.log(array3);

let total = 0;
for (const num of array3) {
    total += num;
}
console.log(total);