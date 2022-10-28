/*
 * Працюємо з колекцією карток в trello
 * - Метод splice()
 * - Видалити
 * - Додати
 * - Оновити
 */

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];
  
  console.table(cards);
  

  /*
   * Видалення (по індексу), метод indexOf()
   */
  const cardToRemove = 'Карточка-3';
  
  const index = cards.indexOf(cardToRemove));
  const newArr = cards.splice(index, 1);


  /*
   * Додавання (по індексу)
   */
  
const cardToInsert = 'Карточка-6';


  /*
   * Оновлення (по індексу)
   */
  const cardToUpdate = 'Карточка-4';