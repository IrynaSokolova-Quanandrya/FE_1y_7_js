/*
 * Деструктуризація об'єкту
 * - Значення за замовчуванням
 * - Ім'я змінної яке відрізняється від імені властивості
 */

const playlist = {
    name: 'Мій супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,
  };
  
  
  /*
   * Глибока деструктуризація 
   */
  
  // const profile = {
  //   name: 'Jacques Gluke',
  //   tag: 'jgluke',
  //   location: 'Ocho Rios, Jamaica',
  //   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  //   stats: {
  //     followers: 5603,
  //     views: 4827,
  //     likes: 1308,
  //   },
  // };
  
  // СПОСІБ 1
  // СПОСІБ 2
  
  /*
   * Деструктуризаці масивів
   */
  
  const rgb = [255, 100, 80];
  
  
  // console.log();
  
  const authors = {
    kiwi: 4,
    poly: 7,
    ajax: 9,
    mango: 6,
  };
  
  const entries = Object.entries(authors);
  
  // console.log(entries);
  
  // for (const [name, rating] of entries) {
  //   // ур2
  //   // const [name, rating] = entry;
  
  //   // ур1
  //   // const name = entry[0];
  //   // const rating = entry[1];
  
  //   console.log(name, rating);
  // }
  
  /*
   * Операция rest (сбор)
   */
  // const profile = {
  //   name: 'Jacques Gluke',
  //   tag: 'jgluke',
  //   location: 'Ocho Rios, Jamaica',
  //   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  //   stats: {
  //     followers: 5603,
  //     views: 4827,
  //     likes: 1308,
  //   },
  // };
  
  // const { name, tag, location, ...restProps } = profile;
  
  // console.log(name, tag, location);
  // console.log(restProps);
  // console.log(profile);
  
  /*
   * Паттерн «Обьект настроек»
   * - деструктуризация параметра-обьекта в подписи функции
   * - rest при деструктуризации в подписи
   */
  
  const showProfileInfo = function (userProfile) {
    const { name, tag, location, ...restProps } = userProfile;
  
    // console.log(name, tag, location, avatar, followers, views, likes);
    console.log(restProps);
  };
  
  const profile = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };
  
  showProfileInfo(profile);