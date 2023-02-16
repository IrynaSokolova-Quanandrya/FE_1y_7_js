
const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

// const timer = {
//   intervalId: null,
//   isActive: false,
//   start(){   

//     if (this.isActive) {
//       return;
//     }

//     const startTime = Date.now()
//     console.log(startTime);

//     this.isActive = true;
//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       console.log(deltaTime);
//       const time = getTimeComponents(deltaTime)
//       console.log(time);
//     }, 1000);
//   },

//   stop(){
//     clearInterval(this.intervalId);
//     getTimeComponents(0);
//     this.isActive = false;
//   }
// }
// timer.start();
// timer.stop();

//   /*
//    * - Приймає час в мілісекундах
//    * - Вираховує скільки в них вміщується годин/хвилин/секунд
//    * - Повертає об'єкт з властивостями hours, mins, secs
//    */
  // function getTimeComponents(time) {
  //   const hours = this.pad(
  //     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  //   );
  //   const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  //   const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

  //   return refs.clockface.textContent = `${hours}:${mins}:${secs}`;
  // }

//   /*
//    * Приймає число, приводить його в рядокі додає на початок 0 якщо число менше 2-х знаків
//    */
//   function pad(value) {
//     return String(value).padStart(2, '0');
//   }



// refs.startBtn.addEventListener('click', timer.start.bind(timer));
// refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

// /*
//  * - Приймає час в мілісекундах
//  * - Вираховує скільки в них вміщується годин/хвилин/секунд
//  * - Малює інтерфейс
//  */
// function updateClockface({ hours, mins, secs }) {
//   refs.clockface.textContent = `${hours}:${mins}:${secs}`;
// }
