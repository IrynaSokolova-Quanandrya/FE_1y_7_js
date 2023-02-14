import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */



/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */



// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//   clearTimeout(timerId);
// }

for (var i = 0; i < 3; i++) {
  setTimeout(()=>console.log(i), 1);
  
}
for (let i = 0; i < 3; i++) {
  setTimeout(()=>console.log(i), 1);
  
}