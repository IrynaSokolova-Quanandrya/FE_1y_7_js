// import '../css/common.css';

/*
 * Метод setInterval(callback, delay, args)
 */

const logger = time => console.log(`Лог кожні ${time}s - ${Date.now()}`);

const intervalId = setInterval(logger, 2000, 2)

/*
 * Очистка інтервалу з clearInterval(intervalId)
 */

const loggerClearId = () => {
    console.log('Виклик clearInterval');
    clearInterval(intervalId);
}

setTimeout(loggerClearId, 3000)
// clearInterval(intervalId)

// const shouldCancelInterval = Math.random() > 0.3;
// console.log(shouldCancelInterval);

// if (shouldCancelInterval) {
//   clearInterval(intervalId);
// }
