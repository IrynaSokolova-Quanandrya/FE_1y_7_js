/*
 * Функція це об'єкт -> ПОСИЛАЛЬНИЙ ТИП
 */

// Повторюємо чому посилальний тип
// console.log('[] === []: ', [] === []);
// console.log('{} === {}: ', {} === {});
// console.log(
//     'function() {} === function() {}: ',
//     function () {} === function () {},
// );

// const fnA = function () {
//     console.log('hello');
// };

// const fnB = fnA;
// console.log('fnB === fnA: ', fnB === fnA);

/*
 * Контекст (this)
 *    - Де і як була об'явлена функція НЕ МАЄ НІЯКОГО ВПЛИВУ на контекст.
 *    - Контекст опреділяється В МОМЕНТ ВИКЛИКУ ФУНКЦІЇ, якщо він не прив'язаний явно.
 */

/*
 * Як метод об'єкту. В контексті об'єкту.
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };


/*
 * Виклик без контексту
 * - В суворому режимі = undefined
 * - Не в суворому режимі = window
 */

// const foo = function () {
//     console.log('foo -> this', this);
// };



/*
 * Як метод об'єкту, але об'явлена як зовнішня функція.
 * В контексті об'єкту.
 */

// const showTag = function () {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
// };


// const user = {
//     tag: 'Mango',
// };



// user.showUserTag();

/*
 * Виклик без контексту, але об'явлена як метод об'єкту.
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

/*
 * Контекст в callback-функціях
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// const invokeAction = function (action) {
//     console.log(action);

//     action();
// };

// invokeAction(user.showTag);

/*
 * Тренуємося 1
 */

// const fn = function () {
//     console.log('fn -> this', this);
// };

// fn(); // Який this ???

/*
 * Тренуємося 2
 */

// const book = {
//     title: 'React for beginners',
//     showThis() {
//         console.log('showThis -> this', this);
//     },
//     showTitle() {
//         console.log('showTitle -> this.title', this.title);
//     },
// };

// book.showThis(); // Який this ???

// const outerShowThis = book.showThis;
// outerShowThis(); // Який this ???

// const outerShowTitle = book.showTitle;
// outerShowTitle(); // Який this ???

/*
 * Тренуємося 3
 */

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//         // this.color = color;
//     };

//     // changeColor(); // Який this ???

//     const sweater = {
//         color: 'teal',
//     };

//     sweater.updateColor = changeColor;

//     // sweater.updateColor('red'); // Який this ???

//     return sweater.updateColor;
// };

// const swapColor = makeChangeColor();

// swapColor('blue'); // Який this ???

/*
 * Тренуємося 4
 */

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//     };

//     return changeColor;
// };

// const updateColor = makeChangeColor();
// updateColor('yellow'); // Який this ???

// const hat = {
//     color: 'blue',
//     updateColor: updateColor,
// };

// hat.updateColor('orange'); // Який this ???

/*
 * Тренуємося 5
 */

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);