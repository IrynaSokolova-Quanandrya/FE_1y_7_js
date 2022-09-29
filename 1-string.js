/*
 * Довжина рядка, влістивість length
 */
const message = 'В цьому рядку 26 символів.';

// console.log(message.length);

/*
 * Конкатенація рядків
 */
const firstName = "Ira";
const lastName = "Sokolova";

// console.log(firstName + " " + lastName);
/*
 * Напиши скрипт який виведе рядок в форматі:
 * «Гість x y поселяється в g номер q»,
 * підставив замість x y g q значення змінних
 */

const room = 716;
const type = 'VIP';

const customer = `Гість ${firstName} ${lastName} поселяється в ${room} номер ${type}`;
// console.log(customer);
/*
 * Шаблонні рядки (template strings)
 * Повертаємось до складання рядка поселення в готель
 */

const quantity = 15;
const orderMsg = `Ви замовляєте 15 тістечок.`;



/*
 * Нормалізація з методом toLowerCase()
 */
// console.log();
// Що шукаємо?

/*
 * Пошук в рядку з методом includes()
 */
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'розпродаж';

const string1 = 'Привіт, я принц Абдул, це не спам, пропоную тобі мільйон!';
// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
// console.log(string2.includes(blacklistedWord1));
const normalizeString2 = string2.toLocaleLowerCase().includes(blacklistedWord2);

console.log(normalizeString2);

// console.log(normalizeString2.includes(blacklistedWord2));

const string3 = 'Рекламна кампанія #jsIsAwesome';
// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));
