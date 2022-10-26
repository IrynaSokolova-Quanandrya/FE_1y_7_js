/*
 * Напиши скрипт пошуку логіна
 * - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
 *
 * - Спочатку через for
 * - Потім через for...of
 * - Логіка break
 * - Метод includes() с тернарним оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m4n';
// let message = `Користувач ${loginToFind} не знайдено.`

// for (let i = 0; i < logins.length; i++) {
//     if(logins[i] === loginToFind){
//         message = `Користувач ${loginToFind} знайдено.`;   
//     }    
// }

// for (const login of logins) {
//     if(login === loginToFind){
//         message = `Користувач ${loginToFind} знайдено.`;   
//     } 
// }
// console.log(message);

const message = logins.includes(loginToFind) 
? `Користувач ${loginToFind} знайдено.` 
: `Користувач ${loginToFind} не знайдено.`;
console.log(message);