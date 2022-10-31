/*
 * Функції
 * - Функціональний вираз (function expression)
 * - Аргументи і параметри
 * - return
 * - Поверненнф значення
 * - Параметри за замовчуванням
 */

// const add = function () {
 
//   console.log('Виконується функція add');


// };

// const fn = function () {
//  
// };

// console.log('Результат функції: ', fn());

// console.log('Результат функції: ', fn());

/*
 * - Стек викликів
 * - Stack trace і пошук помилок
 */
// const fnA = function () {
//     console.log('Виконується функція A');
//   };
  
//   const fnB = function () {
//     console.log('Виконується функція B');
//   };
  
//   const fnC = function () {
//     console.log('Виконується функція C');
//   };
  
  // console.log('Лог перед викликом функції A');
  
  fnA();
  
  // console.log('Лог після виклику функції A');
  
  // console.log('Лог перед викликом функції B');
  fnB();
  // console.log('Лог після виклику функції B');
  
  // console.log('Лог перед викликом функції C');
  fnC();
  // console.log('Лог після виклику функції C');