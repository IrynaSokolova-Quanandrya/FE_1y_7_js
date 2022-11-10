// const obj = {} 
/*
 * Об"єкти (робимо плейлист музики: ім"я, рейтинг, треки, кількість треків)
 * - Літерал об"єкту
 * - Властивості, ключі (ім"я) і значення
 * - Як відрізнити об"єкт від області видимості
 */

// const playlist = {
//   name: 'Мій супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// console.log(playlist);


/*
 * Доступ до властивості
 * - obj.key
 * - obj['key']
 * - Відсутність властивостей
 */

const playlist = {
    name: 'Мій супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,  
  
  };
  
  // console.log(playlist);
  //  console.log(playlist.tracks); 
  //  console.log(playlist["time"]); 

  playlist.tracks.push("Новий трек")

  playlist.time = "5h"

  delete playlist.time

  // arr[0]

  
  
  // console.log(playlist);
  
  
  const propertyName = 'rating';

  
  /*
   * Короткий запис властивостей
   */
  const username = 'Oleg';
  const email = 'mango@mail.com';
  
  const signupData = {
    username,
    email,
  };
  
// const a = {};
// function name(params) {

//   return {}
// }
// name({})
  // console.log(signupData.username = "Mango");
  
  /*
   * Обчислювані властивості
   */
  
  //  <input name="color" value="tomato" >
  
  const inputName = 'background';
  const inputValue = 'tomato';
  
  const colorPickerData = {
    [inputName]: inputValue,
  };
  
  // console.log(colorPickerData);
  
  /*
   * Посилальний тип {} === {}
   */
  
  // let a = 5;
  // let b = a;

  // console.log(a);
  // console.log(b);

  // a = "15";
  // b = a
  // console.log(a);
  // console.log(b);

  const obj = {};
  const obj1 = obj;

  // console.log(obj);
  // console.log(obj1);
  // console.log(obj === obj1);



  obj.name = "Mango"

  // console.log(obj);
  // console.log(obj1);
  /*
   * Масиви і функції це об"екти
   */
  
  // const a = [1, 2, 3];
  
  // a.hello = ':)';
  
  // console.log(a);
  
  // const fn = function () {
  //   console.log('hello');
  // };
  
  // fn.hello = ';)';
  
  // console.dir(fn);