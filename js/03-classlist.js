const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Інтерфейс classList
 * - add(клас)
 * - remove(клас)
 * - toggle(клас)
 * - replace(старийКлас, новийКлас)
 * - contains(клас)
 */

const navEl = document.querySelector('.site-nav')
console.log(navEl.childNodes[0]);

const itemEl = navEl.querySelectorAll('.site-nav__item')
// console.log(itemEl.childNodes);


// linkEl[2].classList.add('site-nav__link--current')
// linkEl[0].classList.remove('site-nav__link')
// console.log(linkEl[2].classList.contains('site-nav__link--current'));
// // navEl.classList.add('kjbjhv');
// console.log(navEl);
// // Робимо приклад з current сторінкою