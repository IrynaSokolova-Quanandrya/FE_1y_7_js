/*
 * Приведення до булю на прикладі Boolean(value)
 */

// console.log(Boolean(0));

/*
 * Логічне І (оператор &&)
 * - Запинається на брехні
 * - Повертає те на чому запнулось або останній операнд
 */

// console.log(1 && 4 && 7 && 'mango');

/*
 * Логічне АБО (оператор ||)
 * - Запинаєтьс на правді
 * - Повертає те на чому запнулось або останній операнд
 */

// console.log("name" || "" || null || 0 || undefined);

/*
 * Логічне НІ (оператор !)
 * Робить інверсію правда > брехня та брехня > правда
 */

// console.log(!" ");

// ПРАКТИЧНА ЗАДАЧА 1
/*
 * Напиши скрипт який перевірить входження 
 * числа у відрізок зазначений x1 та x2. *
 * - До x1
 * - Після x2
 * - Від x1 до x2
 * - До x1 або після x2
 */

const x1 = 10;
const x2 = 30;
const number = 45;


// console.log(`Число ${number} потрапляє у відрізок до ${x1}? `, number < x1);

// console.log(`Число ${number} потрапляє у відрізок після ${x2}? `, number > x2);

const res1 = number > x1 && number < x2
// number > x1 && number < x2
// 5 > 10 && 5 < 30
// false && true
// false

// console.log(`Число ${number} потрапляє у відрізок від ${x1} до ${x2}? `, res1);

const res2 = number < x1 || number > x2
// number < x1 || number > x2 
// 45 < 10 || 45 > 30
// false || true
// true


// console.log(
//   `Число ${number} потрапляє у відрізок до ${x1} або після ${x2}? `,
//   res2,
// );

// ПРАКТИЧНА ЗАДАЧА 2
/*
 * Напиши скрипт який перевіряє можливість відкрити чат з користувачем.
 * Для цього користувач повинен бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */

const isOnline = false;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можно відкрити чат? ', canOpenChat);

// ПРАКТИЧНА ЗАДАЧА 3
/*
 * Напиши скрипт перевірки підписки користувача під час доступу до контенту
 * - Є три типи підписки: free, pro и vip.
 * - Отримати доступ можуть тільки pro и vip
 */

const sub = 'free';

// якщо користувач pro або користувач vip тоді є доступ

const canAccessContent = sub === "vip" || sub === "pro"
// console.log('Є доступ до контенту? ', canAccessContent);