/*
 * Напиши скрипт пошуку логіна
 * - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

const loginToFind = 'aj4xth3m4n';

const message = logins.includes(loginToFind) 
? `Користувач ${loginToFind} знайдено.`
: `Користувач ${loginToFind} не знайдено.`;

console.log(message);


// if (logins.includes(loginToFind)) {
//     message = `Користувач ${loginToFind} знайдено.`
// } else {
//     message = `Користувач ${loginToFind} не знайдено.`
// }

console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));