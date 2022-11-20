/*
 * Работа с колекцією (масивом об"ектів)
 */
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//   ];
  
  // console.log(friends[0]);
  // console.table(friends);
  
  // Додаємо властивість до кожного об"єкта за допомогою циклу

  // const nums = [1,2,3,5,4,6]

  // console.log(nums);
  
  // for (let num of nums) {
  //   num += 1
  // }

  // console.log(nums);

  // for (const friend of friends) {
  //   console.log(friend);
    
  //   friend.name = 123365;

  // }
  // console.table(friends);

  /*
   * Шукаємо друга по імені
   */
  
  const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];

  console.table(friends);

  // const findFriendByName = function (allFriends, nameToFind) {
  //   for (const friend of allFriends) {
  //     console.log(friend.name)

  //     if (friend.name === nameToFind) {
  //       console.log('Урааааа, знайшли!');
  //       continue;
  //     } 
  //       console.log('Упс, не знайшли!');     
      
  //   }
  // };
  
  // console.log(findFriendByName(friends, 'Poly'));
  // console.log(findFriendByName(friends, 'Chelsy'));
  
  /*
   * Отримуємо імена всіх друзів
   */
  
  const getAllNames = function (allFriends) {

    for (const friend of allFriends) {
      
    }
  };
  
  console.log(getAllNames(friends));
  
  /*
   * Отримуємо імена тільки тих друзів які онлайн
   */
  const getOnlineFriends = function () {
  }
  
  // console.log(getOnlineFriends(friends));
  
  const getOfflineFriends = function () {};
  
  // console.log(getOfflineFriends(friends));
  
  // створити 2 масива онлайн і офлайн?
  // якщо тру - в перший, якщо ні - в другий
  
  const getFriendsByStatus = function () {};
  
//   console.log(getFriendsByStatus(friends));