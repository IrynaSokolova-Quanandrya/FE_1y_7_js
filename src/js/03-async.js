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

  return Promise.resolve(fruits[name])
}


// getFruit('strawberry')
// .then(console.log)

async function makeSmoothie() {
  const strawberry = await getFruit('strawberry');
  console.log(strawberry);

  const kiwi = await getFruit('kiwi');
  console.log(kiwi);
    
}

// В app.js
import menuTemplate from '/path/to/templates/menu.hbs';

const menuData = {
  title: 'Eat it createElement, templates rule!',
  items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'lit-html'],
};

const markup = menuTempalte(menuData); // html розмітка з підставленими значеннями





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
