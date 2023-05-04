// Синтаксис async/await
// Послідовні операції
// Паралельні операції з Promise.all()
// try...catch

function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
  };  
}

// Створюємо функцію makeCocktail
// Спочатку окремо потім послідовно операції
// Переписуємо на асинхронну функцію
// Використовуємо setTimeout
// Скільки виконується тіло функції
// Що буде в змінних якщо прибрати await
// скорочуємо час виконання функції






// async function aMakeSmoothie() {
//   try {
//     console.time('aMakeSmoothie');
//     const apple = getFruit('apple');
//     const kiwi = getFruit('kiwi');
//     const berry = getFruit('strawberry');

//     const fruits = await Promise.all([apple, kiwi, berry]);
//     console.log(fruits);
//     console.timeEnd('aMakeSmoothie');

//     return fruits;
//   } catch (error) {
//     console.log('Ошибка');
//   }
// }

// aMakeSmoothie();

// async function fn () {}

// const fn  = async function () {}

// const arr = async () => {}

// const x = {
//   async getname () {}
// }

// class X {
//   async getName () {}
// }
