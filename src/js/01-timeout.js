// import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */

const logger = (time, param) => console.log(`Ця функція викличеться через ${time} секунд`);

console.log('До setTimeout');

const timeoutId = setTimeout(logger, 2000, 2)

console.log(timeoutId);
// for (let i = 0; i < 100000; i+=1) {
//   console.log(i);  
// }

console.log('Після setTimeout');

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */


// clearTimeout(timeoutId)






// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//   clearTimeout(timerId);
// }

// for (var i = 0; i < 3; i++) {
//   setTimeout(()=>console.log(i), 1);
  
// }
// for (let i = 0; i < 3; i++) {
//   setTimeout(()=>console.log(i), 1);
  
// }