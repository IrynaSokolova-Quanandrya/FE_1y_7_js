/*
 * Напиши скрипт який замінює регістр кожного символа в рядку на протилежний.
 * Наприклад, якщо рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».
 */

const str = 'JavaScript';

const arrStr = str.split('');
let reversStr = '';
console.log(arrStr);

for (const letter of arrStr) {
    if(letter === letter.toLocaleLowerCase()){
        reversStr += letter.toLocaleUpperCase();
    } else {
        reversStr += letter.toLocaleLowerCase();
    }
    
}

console.log(reversStr);