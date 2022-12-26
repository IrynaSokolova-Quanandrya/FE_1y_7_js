/*
 * call та apply
 */
// const showThis = function (a, b, arr) {
//     console.log(a, b, arr);
//     console.log('showThis -> this', this);
// };

// showThis();

// const objA = {
//     a: 5,
//     b: 10,
// };

// const objB = {
//     x: 788,
//     y: 25,
// };

// showThis.call(); викликає функцію саме в цьому місці
// showThis.apply();

// showThis();

// ПРИКЛАД 1
// const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//     this.color = color;
// };

// const hat = {
//     color: 'black',
// };

// changeColor.call(hat, 'orange');
// console.log(hat);

// ПРИКЛАД 2
// const sweater = {
//     color: 'green',
// };

// changeColor.call(sweater, 'blue');
// console.log(sweater);

/*
 * bind - створює нову функцію (копію) 
 * з назавжди прив'язаним контекстом
 */

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor('yellow');
// console.log(hat);

// changeSweaterColor('red');
// console.log(sweater);

/*
 * counter
 */

const counter = {
    value: 0,
    increment(value) {
        console.log('increment -> this', this);
        this.value += value;
    },
    decrement(value) {
        console.log('decrement -> this', this);
        this.value -= value;
    },
};

const updateCounter = function (value, operation) {
    operation(value);
};

updateCounter(1, counter.increment.bind(counter));
updateCounter(1, counter.decrement.bind(counter));

// console.log(counter);