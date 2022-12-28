/*
 * call та apply
 */
const showTag = function (a, b) {
    console.log(a, b);
    console.log(this);
    console.log(this.tag);
};

// showTag();

const Mango = {
    tag: 'Mango',
};

const Poly = {
    tag: 'Poly',
};

// showTag.call(Poly, 10, 20); //викликає функцію саме в цьому місці
// showTag.apply(Mango, [5, 15]);

// showThis();

// ПРИКЛАД 1
const changeColor = function (color) {
    console.log('changeColor -> this', this);
    this.color = color;   
};

const hat = {
    color: 'black',
};
console.log(hat);

const changeHatColor = changeColor.bind(hat)

changeHatColor('red')
 console.log(hat);


// ПРИКЛАД 2
const sweater = {
    color: 'green',
};
const changeSweaterColor = changeColor.bind(sweater)
changeSweaterColor('blue')
console.log(sweater);
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

// updateCounter(1, counter.increment.bind(counter));
// updateCounter(1, counter.decrement.bind(counter));

// console.log(counter);