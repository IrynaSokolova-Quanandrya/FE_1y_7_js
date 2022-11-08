/*
 * Об"єкти (робимо плейлист музики: ім"я, рейтинг, треки, кількість треків)
 * - Літерал об"єкту
 * - Властивості, ключі (ім"я) і значення
 * - Як відрізнити об"єкт від області видимості
 */

// const playlist = {
//   
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
  
  
  const propertyName = 'rating';

  
  /*
   * Короткий запис властивостей
   */
  const username = 'Mango';
  const email = 'mango@mail.com';
  
  const signupData = {

  };
  
  // console.log(signupData);
  
  /*
   * Обчислювані властивості
   */
  
  //  <input name="color" value="tomato" >
  
  const inputName = 'color';
  const inputValue = 'tomato';
  
  const colorPickerData = {
    
  };
  
  // console.log(colorPickerData);
  
  /*
   * Посилальний тип {} === {}
   */
  
  
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
  
  // console.dir(fn.hello);