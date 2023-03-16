/* 
1. Напишіть функцію, яка приймає масив чисел та повертає середнє значення.
2. Напишіть функцію, яка приймає об'єкт користувача з ім'ям, прізвищем та електронною поштою та повертає форматовану рядок "Ім'я Прізвище, Електронна пошта".
3. Напишіть функцію, яка приймає масив об'єктів автомобілів з полями "марка", "модель" та "рік випуску" та повертає масив об'єктів автомобілів, відсортованих за роком випуску в порядку зростання.
4. Напишіть функцію, яка приймає рядок та повертає його першу літеру у верхньому регістр
5. Напишіть функцію, яка приймає масив чисел та функцію-обробник та застосовує функцію-обробник до кожного елемента масиву, повертаючи новий масив.
*/











function applyFunctionToArray(arr, callback) {
    // Створюємо порожній масив, в який будемо додавати оброблені елементи
    let result = [];
  
    // Проходимося по кожному елементу масиву та застосовуємо до нього функцію-обробник
    for (let i = 0; i < arr.length; i++) {
      // Додаємо оброблений елемент до нового масиву
      result.push(callback(arr[i]));
    }
//   arr.map(item=>result.push(callback(item)))
    // Повертаємо новий масив з обробленими елементами
    return result;
  }

  let arr = [1, 4, 9, 16];

let result = applyFunctionToArray(arr, Math.sqrt);

// console.log(result); // [1, 2, 3, 4]

  