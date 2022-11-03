/*
 * Псевдомасив arguments і Array.from і ...rest
 */

// const fn = function () {
//   // console.log(arguments);

//   const arg = Array.from(arguments)
//   // console.log(arg);
//   return arg;
// };



// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);
// console.log(arg);

// const fn = function (param1, param2, param3) {
//   console.log("param1: ", param1);
//   console.log("param2: ", param2);
//   console.log("param3: ", param3);
//   // console.log(rest);
// };

// fn('Hello', 1);
// fn("Hi", 1, 2, 3, 4, 5);
// fn("Привіт",1, 2, 3, 4, 5, 6, 7);

/*
 * Напиши функцію add для додавання довільної кількості аргументів (чисел)
 * - Операція ... (rest)
 */

const add = function (...args) {
  
  let sum = 0;
    for (const arg of args) {
      sum += arg
    }

    return sum;
  };
  
  console.log(add(1, 2, 3));
  console.log(add(1, 2, 4, 5, 6));
  
  /*
   * Напиши функцію filterNumbers(array [, number1, ...]) яка:
   * - першим аргументом приймає масив чисел
   * - після першого аргумента може бути довільна кількість інших аргументів які будуть числами,
   * - Функція повина повернути новий масив, в якому будуть тільки ті аргументи, починаючи з другого,
   *   для яких є аналог в оригінальному масив.
   */
  
  // const filterNumbers = function () {};
  
  // console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
  // console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
  // console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]