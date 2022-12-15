/*
 * Події.
 * - Створення та видалення слухача
 * - Назви колбеків для слухачів
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Посилальна ідентичність колбеків
 * - Об'ект Події
 */
// function(params) {}

// ()=>{}

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

targetBtn.addEventListener('click', ()=>{})
// addListenerBtn.addEventListener('click', ()=>{
//     console.log('Додаємо слухача на цільову кнопку');
//     targetBtn.addEventListener('click', onClick)
// })

// removeListenerBtn.addEventListener('click', ()=>{
//     console.log('Знімаємо слухача на цільову кнопку');
//     targetBtn.removeEventListener('click', onClick)
// });

 const onClick = function() {
    console.log("Відслідковуємо клік");
}

// ()=>{};
// ()=>{};
// console.log(onClick === onClick);