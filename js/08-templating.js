/*
 * Властивість innerHTML
 * - Зчитування
 * - видалення
 * - запис
 */

const titleEl = document.querySelector('.title');
// console.log(titleEl.innerHTML);

const navEl = document.querySelector('.site-nav')
const itemMarkup = '<li class="site-nav__item"><a href="" class="site-nav__link">Про нас</a></li>';
navEl.insertAdjacentHTML('beforeend', '<li class="site-nav__item"><a href="" class="site-nav__link">Новий елемент</a></li>')

// titleEl.innerHTML = '<a href="./" class="link">Link</>';
// .insertAdjacentElement('<li class="site-nav__item">
// <a href="" class="site-nav__link">Про нас</a>
// </li>')
console.log(navEl);

/*
 * Вставка розмітки з insertAdjacentHTML()
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-manipulation.html#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-insertadjacenthtml
 */
