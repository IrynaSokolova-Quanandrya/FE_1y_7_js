/*
 * Операція spread (розпорошення)
 * - Array.prototype.concat() та аналог через spread
 */

const numbers = [1, 6, 8, 10, 54, 3].concat([5, 4], [63, 11]);

const arr1 = [5, 4];
const arr2 = [63, 11];
const numbers1 = [ ...arr1, 1, 6, 8, 10, 54, 3, ...arr2]

  // console.log(numbers);
  // console.log(numbers1);
  
  /*
   * Пошук найнижчої або найвищої температури (числа)
   */
  const temps = [18, 14, 12, 21, 17, 29, 24];

  const lowestTemp = Math.min(18, 14, 12, 21, 17, 29, 24)
  const hightTemp = Math.max(...temps)
  
  // console.log(lowestTemp);
  // console.log(hightTemp);
  // console.log();
  
  // const a = [
  //   { x: 1 },
  //   { x: 1 }, 
  //   { y: 2 }, 
  //   { z: 3 }
  // ];
  
  // const b = [...a];
  
  // console.log('a: ', a);
  // console.log('b: ', b);
//   Розпорошення і копіювання примітивних і складних типів
  // console.log(a[0] === b[0]);
  // console.log(a === b);
  
  // a[0].x = 1000;
  
  // console.log('a: ', a);
  // console.log('b: ', b);
  
  /*
   * Сшиваемо декілька массивів в один через concat() та spread
   */
  const lastWeekTemps = [1, 2, 3];
  const currentTemps = [4, 5, 6];
  const nextWeekTemps = [7, 8, 9];
  
  // const allTemps = lastWeekTemps.concat(currentTemps, nextWeekTemps)

  const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

 
  // console.log(allTemps);
  
  /*
   * Розпорошення об"ектів
   * - Object.prototype.assign() та spread
   */
  const a = { x: 1, y: 2 };
  const b = { x: 0, z: 3 };
  
// const c = Object.assign({}, b , a);

const c = {
  ...a, 
  f: 5, 
  ...b, 
  g: 58
}

  
console.log(c);
  const defaultSettings = {
    theme: 'light',
    showNotifications: true,
    hideSidebar: false,
  };

  const userSettings = {
    showNotifications: false,
    hideSidebar: true,
  }

  const finalSettings = {
    ...defaultSettings,
    ...userSettings
  }
  
  
  console.log(finalSettings);