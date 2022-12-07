const magicBtn = document.querySelector('.js-magic-btn');

/*
 * Властивостями елементів можуть бути атрибути(hero)
 * - Зображення
 * - Текст і textContent
 * - value
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const imgEl = document.querySelector('.hero__image')
console.log(imgEl);
// console.log(imgEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480');

// const heroTitleEl = document.querySelector('.hero__title')
// console.log(heroTitleEl);

// console.log(heroTitleEl.textContent = 'Main title');
// console.log(heroTitleEl.style.backgroundColor = 'rgb(0, 255, 255)');

// const inputEl = document.querySelector('.js-input')
// console.log(inputEl.value);

// magicBtn.addEventListener('click', ()=>{
//     console.log(inputEl.value = 'bvgcgc');
// })
/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */
console.log(imgEl.src);
console.log(imgEl.removeAttribute('src'));
imgEl.setAttribute('src', 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480');

/*
 * Data-атрибути
 */
      