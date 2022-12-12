/*
 * - Створення елементів
 * - Вставка вузлів: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

const titleHeroContainerEl = document.querySelector('.hero')

// console.log(document);

const titleEl = document.createElement('h1');
titleEl.classList.add('title');
titleEl.textContent = 'Заголовок!'
titleEl.style.color = 'tomato';



// console.log(titleEl);

titleHeroContainerEl.appendChild(titleEl)
titleHeroContainerEl.appendChild(titleEl)

/*
 * Створюємо заголовок
/*


 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imgEl = document.createElement('img');
imgEl.src = 'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imgEl.alt = 'img';
imgEl.width = '500';


// titleHeroContainerEl.appendChild(titleEl)
// titleHeroContainerEl.appendChild(imgEl)

titleHeroContainerEl.append(titleEl, imgEl)

// titleHeroContainerEl.insertBefore(imgEl, titleEl)

/*
 * Створюємо і додаємо новий пункт меню
 */

const navEl = document.querySelector('.site-nav')

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');
console.log(navItemEl);

const linkEl = document.createElement('a');
linkEl.classList.add('site-nav__link');
linkEl.textContent = 'Link'
console.log(linkEl);

navItemEl.appendChild(linkEl)
navEl.prepend(navItemEl)