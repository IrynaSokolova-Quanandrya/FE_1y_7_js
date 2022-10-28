/*
 * Напиши скрипт, який об"єднує всі елементи массива в один рядок.
 * Елементів може бути довільна кількість.
 * Нехай елементи массива  в рядку будут розділені комою.
 * - Спочатку через for
 * - Потім через join()
 */

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = '';
console.log(friends.join(','));

// for (const friend of friends) {
//     string += friend + ',' 
// }

// console.log(string.split());
// Повинно вийти 'Mango,Poly,Kiwi,Ajax'