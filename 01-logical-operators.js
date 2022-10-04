/*
 * Приведення до булю на прикладі Boolean(value)
 */

// console.log(Boolean(0));

/*
 * Логічне І (оператор &&)
 * - Запинається на брехні
 * - Повертає те на чому запнулось або останній операнд
 */

// console.log(5 && 4 && 7 && 'mango');

/*
 * Логічне АБО (оператор ||)
 * - Запинаєтьс на правді
 * - Повертає те на чому запнулось або останній операнд
 */

// console.log(false || 5 || null || 0);

/*
 * Логічне НІ (оператор !)
 * Робить інверсію правда > брехня та брехня > правда
 */

// console.log(!5);

// ПРАКТИЧНА ЗАДАЧА 1
/*
 * Напиши скрипт який перевірить входження числа
 * у відрізок зазначений x1 та x2.
 *
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


console.log(`Число ${number} потрапляє у відрізок від ${x1} до ${x2}? `, res1);


console.log(
  `Число ${number} потрапляє у відрізок до ${x1} або після ${x2}? `,
  res2,
);

// ПРАКТИЧНА ЗАДАЧА 2
/*
 * Напиши скрипт який перевіряє можливість відкрити чат з користувачем.
 * Для цього користувач повинен бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */

const isOnline = true;
const isFriend = true;
const isDnd = true;

// const canOpenChat = ;
// console.log('Можно открыть чат? ', canOpenChat);

// ПРАКТИЧНА ЗАДАЧА 3
/*
 * Напиши скрипт перевіркипідписки користувача під час доступу до контенту
 * - Є три типи підписки: free, pro и vip.
 * - Отримати доступ можуть тільки pro и vip
 */

const sub = 'free';

// якщо користувач pro або користувач vip тоді є доступ

// const canAccessContent = ;

// console.log('Есть доступ к контенту? ', canAccessContent);