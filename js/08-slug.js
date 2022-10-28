/*
 * Робимо slug в URL з назви стратті (приклад на dev.to)
 * Заголовок статті складається тільки з букв та пропусків
 *
 * - Нормалізуємо рядок
 * - Разбиваємо по словах
 * - Зшиваємо в рядок з розділителями
 * - Ченінг
 */
// https://dev.to/devsatasurion/is-tailwind-css-accessible-52dc
// Повинно вийти top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLocaleLowerCase();
// console.log(normalizedTitle);

// const arrTitle = normalizedTitle.split(' ');
// console.log(arrTitle);

// const slugTitle = arrTitle.join('-')
// console.log(slugTitle);

const slugTitle = title.toLocaleLowerCase().split(' ').join('-');
console.log(slugTitle);