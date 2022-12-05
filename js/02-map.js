/*
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

const numbers = [5, 10, 15, 20, 25];


const doubledNums = numbers.map(function(number) {
  return number * 2
}
)

// console.log('numbers', numbers);
// console.log('doubledNums', doubledNums);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
// console.table(players);

/*
 * Отримуємо масив імен всіх гравців
 */

const playerNames = players.map(function ({name}) {
  return name;
})

console.log('playerNames', playerNames);

// console.log('playerIds', playerIds);


/*
 * Збільшуємо кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
 */

const upatedPlayers = players.map(player => ({
    ...player,
    points: player.points * 1.1,  
}))

// [.....................]
// console.table(upatedPlayers);
// console.log(upatedPlayers);

/*
 * Збільшуємо кількість годин гравця по id
 */

const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(player => {
//   if (playerIdToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }

//   return player;
// });

// Переписуємо на тернарник
// console.table(updatedPlayers);