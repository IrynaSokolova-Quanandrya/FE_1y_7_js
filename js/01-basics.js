/*
 * Знайомство з масивами
 * - Объявлення
 * - Індексація
 * - Довжина
 * - Індекс останнього елемента
 * - Переопреділення
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

const hotels = ['', 1, [], {}, true, undefined, NaN];


    // const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
    // console.table(friends);

    // const lastIndex = friends.length - 1;
    // console.log(lastIndex);

    // console.log(friends[1]);


    // friends[1] = 2121212;
    // console.log(friends[1]);

    // console.table(friends);

/*
 * Передача по посиланню і по значенню
 * - Примітиви і складні типи данних
 * - Посисальна рівність (referential equality)
 */

// let a = 5;
// let b = a;

// console.log(a);
// console.log(b);

// console.log(a===b);

// a = 10;

// console.log(a);
// console.log(b);

// const s = [1,2,3];
// const d = [1,2,3];

// console.log(s);
// console.log(d);

// s[0] = 2;

// console.log(s);
// console.log(d);

// console.log(s===d);

/*
 * Перебор (ітерація) масиву
 * - for - якщо потрібен індекс або потрібно змінити елемент масиву
 * - for...of - якщо індекс не потрібен і в масиві нічого змінювати не потрібно
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const lastIndex = friends.length - 1;
// console.table(friends);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);

// for (let i = 0; i <= lastIndex; i += 1) {
//     // console.log(friends[i]);
//     friends[i] += '-1' 

// }
// console.table(friends);

// for (let friend of friends) {
//     console.log(friend);
// }

// console.table(friends);

// Методи split() і join()

// const message = 'Welcome to Bahamas!';

// console.log(message.split(' '));

// const clients = ['Mango', 'Poly', 'Ajax'];

// console.log(clients.join(''));

// Методи indexOf() і includes()

// const clients = ['Mango', 'Poly', 'Ajax'];

// console.log(clients.indexOf('m,njkb'));

// console.log(clients.includes(',mbjkb'));

// Методи push(), pop(), shift(), unshift()

// const clients = ['Mango', 'Poly', 'Ajax', 'Kiwi'];

// // console.log(clients.pop());

// console.log(clients);


// // Метод slice()
// console.log(clients.slice(1, 3));

// console.log(clients);

// Метод splice()

const clients = ['Mango', 'Poly', 'Ajax', 'Kiwi'];
// видалити
// console.log(clients.splice(0, 3));

// додати
clients.splice(3, 0, "bhjbhj", 'hjvhjvjh');

console.log(clients);



// Метод concat()