const magicBtn = document.querySelector('.js-magic-btn');

// Об'єкт window та document

// console.log(document);

/*
 * document.querySelector(selector, шукає до першого співпадіння) і
 * document.querySelectorAll(selector, отримуємо масив всіх елементів)
 * selector - будь-який валідний CSS-селектор
 *  
 * Що повертають?
 * Правила назви змінних!!!
 * Як відбувається парс!!!
 */

const navRef = document.querySelector('.site-nav');
console.log(navRef);

const navItemRef = document.querySelectorAll('.site-nav__item');
console.log(navItemRef);


/*
 * Document.querySelector* і Element.querySelector*
 */