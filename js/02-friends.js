/*
 * Работа с колекцією (масивом об"ектів)
 */
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];
  
  console.table(friends);
  
  // Додаємо властивість до кожного об"єкта за допомогою циклу
  /*
   * Шукаємо друга по імені
   */
  
  const findFriendByName = function () {};
  
  // console.log(findFriendByName(friends, 'Poly'));
  // console.log(findFriendByName(friends, 'Chelsy'));
  
  /*
   * Отримуємо імена всіх друзів
   */
  
  const getAllNames = function () {};
  
  
  /*
   * Отримуємо імена тільки тих друзів які онлайн
   */
  const getOnlineFriends = function () {
    const onlineFriends = [];
  
    for (const friend of allFriends) {
      console.log(friend);
      console.log(friend.online);
  
      if (friend.online) {
        onlineFriends.push(friend);
      }
    }
  
    return onlineFriends;
  };
  
  // console.log(getOnlineFriends(friends));
  
  const getOfflineFriends = function () {};
  
  // console.log(getOfflineFriends(friends));
  
  // створити 2 масива онлайн і офлайн?
  // якщо тру - в перший, якщо ні - в другий
  
  const getFriendsByStatus = function () {};
  
//   console.log(getFriendsByStatus(friends));