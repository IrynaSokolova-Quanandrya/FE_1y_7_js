/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 * - Клас FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    
const currentTargetEl = event.currentTarget.elements
    console.dir(currentTargetEl.subscription.value);
    console.log('Submit');
})

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);

//   console.log(formData);

//   formData.forEach((value, name) => {
//     console.log('onFormSubmit -> name', name);
//     console.log('onFormSubmit -> value', value);
//   });
// }