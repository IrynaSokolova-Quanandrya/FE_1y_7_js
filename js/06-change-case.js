/*
 * Напиши функцию changeCase(string) яка замінює регістр кожного символа в рядку на протилежний.
 * Наприклад, якщо рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».
 */

const changeCase = function (string) {
    const arrStr = string.split('');

    let reversStr = '';

    for (const letter of arrStr) {
        if(letter === letter.toLocaleLowerCase()){
            reversStr += letter.toLocaleUpperCase();
        } else {
            reversStr += letter.toLocaleLowerCase();
        }        
    }
    return reversStr;
}

// console.log(reversStr);
// const str = 'JavaScript';

// const arrStr = str.split('');
// console.log(arrStr);

// let reversStr = '';

// for (const letter of arrStr) {
//     if(letter === letter.toLocaleLowerCase()){
//         reversStr += letter.toLocaleUpperCase();
//     } else {
//         reversStr += letter.toLocaleLowerCase();
//     }
    
// }

// console.log(reversStr);
  
  console.log(changeCase('qweRTY')); // QWErty
  console.log(changeCase('mAnGo')); // MaNgO
  console.log(changeCase('AjAx')); // aJaX