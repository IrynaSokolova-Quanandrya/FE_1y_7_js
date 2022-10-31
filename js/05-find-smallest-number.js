/*
 * Напиши функцию findSmallesNumber(numbers) пошуку самого маленького числа в масиві,
 * при умові, що числа унікальні (не повторюються).
 */

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];

for (const number of numbers) {
    if (number < smallestNumber) {
        smallestNumber = number;
    }
}
console.log(smallestNumber);

  console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
  console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
  console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4