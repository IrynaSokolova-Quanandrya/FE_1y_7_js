/*
 * Функції
 * - Функціональний вираз (function expression)
 * - Аргументи і параметри
 * - return
 * - Поверненнф значення
 * - Параметри за замовчуванням
 */

const fn = function (num1, num2) {

  
  
  console.log(num1);
  console.log(num2);

return num1 + num2;

  const sum = num1 + num2;
  
  console.log('Код всередині тіла функції: ', sum);

  
}

// fn();
// fn(5, 8);
// fn(15, 50);


console.log('Результат функції: ', fn(10, 20));

// console.log('Результат функції: ', fn());


// Function declaration
// getTotalPrice();
// function getTotalPrice() {
//   console.log('Код всередині тіла функції getTotalPrice');
// }
// getTotalPrice();


/*
 * - Стек викликів
 * - Stack trace і пошук помилок
 */
//console.log
const fnA = function () {
    console.log('Виконується функція A');
    fnB();
  };
  
  const fnB = function () {
    console.log('Виконується функція B');

    fnC();
  };
  
  const fnC = function () {
    console.log('Виконується функція C');
  };

  
  
  
  





  // console.log('Лог перед викликом функції A');
  
  // fnA();
  
  // console.log('Лог після виклику функції A');
  
  // console.log('Лог перед викликом функції B');
  // fnB();
  // console.log('Лог після виклику функції B');
  
  // console.log('Лог перед викликом функції C');
  // fnC();
  // console.log('Лог після виклику функції C');