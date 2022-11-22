/*
 * Array.prototype.filter()
 * - Поелементо перебирає оригінальний масив
 * - Повертає новий масив (с елементами або пустий)
 * - Додає в повертаємий масив елементи які задовольняють умови коллбек-функції
 *    - якщо коллбек повернув true елемент додається в масив, що повертається
 *    - якщо коллбек повернув false елемент НЕ додається в масив, що повертається
 */

const numbers = [5, 10, 15, 20, 25];

// console.log(filteredNumbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

/*
 * Отримуємо масив всіх гравців онлайн
 */


// console.table(onlinePlayers);

/*
 * Отримуємо масив всіх гравців офлайн
 */

// console.table(offlinePlayers);

/*
 * Отримуємо масив всіх хардкорних гравців з часом більше 250
 */

// console.table(hardcorePlayers);