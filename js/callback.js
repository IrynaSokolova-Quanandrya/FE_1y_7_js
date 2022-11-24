/*
 * Функція зворотного виклику (callback)
 * - Функція може приймати інші функції як параметр
 * - Функція яка передається іншій функції як аргумент називається
 *   «Функція зворотного (відкладеного) виклику» (callback-функция)
 * - Функція яка приймає другу функцію як параметр
 *   або повертає функцію як результат своєї роботи називається «функциія вищого порядку»
 */

const a = 1;
const b = function () {};



const fnB = function () {
    console.log("Hello");
}

const fnA = function (cb) {
    console.log(cb);
}

// fnA(fnB)

/*
 * Відкладений виклик: реєстрація подій
 */

const btn = document.querySelector(".js-button");

btn.addEventListener('click', function () {
    console.log("Клікнули по кнопці");
})

