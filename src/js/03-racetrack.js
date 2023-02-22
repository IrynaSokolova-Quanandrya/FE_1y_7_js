import '../css/common.css';

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table > tbody'),
};
function run(horse) {
  const time = getRandomTime(2000, 3000);

  return new Promise((resolve, rejected)=>{
  setTimeout(()=>{
    resolve({horse, time})
  },
  time);
  
})  
}

run(horses[1]).then(({horse, time}) =>{
  refs.winnerField.textContent = `🎉 Переможець ${horse}, финишував за ${time}
  часу`
}).catch(console.error)








// let raceCounter = 0;
// const refs = {
//   startBtn: document.querySelector('.js-start-race'),
//   winnerField: document.querySelector('.js-winner'),
//   progressField: document.querySelector('.js-progress'),
//   tableBody: document.querySelector('.js-results-table > tbody'),
// };

// refs.startBtn.addEventListener('click', onStart);



// function onStart() {
//   raceCounter += 1;
//   const promises = horses.map(run);

//   updateWinnerField('');
//   updateProgressField('🤖 Заїзд розпочався, ставки не приймаються!');
//   determineWinner(promises);
//   waitForAll(promises);
// }

// function determineWinner(horsesP) {
//   Promise.race(horsesP).then(({ horse, time }) => {
//     updateWinnerField(`🎉 Переможець ${horse}, финишував за ${time}
//     времени`);
//     updateResultsTable({ horse, time, raceCounter });
//   });
// }

// function waitForAll(horsesP) {
//   Promise.all(horsesP).then(() => {
//     updateProgressField('📝 Заїзд закінчився, приймаються ставки.');
//   });
// }

// function updateWinnerField(message) {
//   refs.winnerField.textContent = message;
// }

// function updateProgressField(message) {
//   refs.progressField.textContent = message;
// }

// function updateResultsTable({ horse, time, raceCounter }) {
//   const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
//   refs.tableBody.insertAdjacentHTML('beforeend', tr);
// }

// // /*
// //  * Promise.race([]) для ожидания первого выполнившегося промиса
// //  */

// // /*
// //  * Promise.all([]) для ожидания всех промисов
// //  */

// function run(horse) {
//   return new Promise(resolve => {
//     const time = getRandomTime(2000, 3500);

//     setTimeout(() => {
//       resolve({ horse, time });
//     }, time);
//   });
// }

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}






//  Math.floor(num) - повертає найбільше ціле число, менше, або дорівнює вказаному
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - повертає найменше ціле число,
// більше, або дорівнює зазначеному числу.
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - повертає значення числа, округлене до найближчого цілого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - повертає найбільше число з набору
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - повертає найменше число з набору
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - зведення в ступінь
console.log(Math.pow(2, 4)); // 16

// Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
console.log(Math.random()); // випадкове число між 0 и 1
console.log(Math.random() * (10 - 1) + 1); // випадкове число від 1 до 10




