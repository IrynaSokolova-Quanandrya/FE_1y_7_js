/*
 * Напиши скрипт вибору готеля по кількості зірок.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
 * 'Токої кількості зірок немає'
 */

// const stars = 3;
// let price;

// if(stars === 1 && stars === 2){
//     price = 20;
//     console.log(`Ціна готелю з ${stars} зірками - ${price}$` );
// }else if(stars === 2){
//     price = 30;
//     console.log(`Ціна готелю з ${stars} зірками - ${price}$` );
// }else if(stars === 3){
//     price = 50;
//     console.log(`Ціна готелю з ${stars} зірками - ${price}$` );
// }else if(stars === 4){
//     price = 70;
//     console.log(`Ціна готелю з ${stars} зірками - ${price}$` );
// }else if(stars === 5){
//     price = 120;
//     console.log(`Ціна готелю з ${stars} зірками - ${price}$` );
// }else{
//     console.log('Токої кількості зірок немає');
// }

// switch (stars) {
//     case 1:
//         price = 20;
//         console.log(`Ціна готелю з ${stars} зірками - ${price}$`);
//         break;
//     case 2:
//         price = 30;
//         console.log(`Ціна готелю з ${stars} зірками - ${price}$`);
//         break;
//     case 3:
//         price = 50;
//         console.log(`Ціна готелю з ${stars} зірками - ${price}$`);
//         break;
//     case 4:
//         price = 70;
//         console.log(`Ціна готелю з ${stars} зірками - ${price}$`);
//         break;
//     case 5:
//         price = 120;
//         console.log(`Ціна готелю з ${stars} зірками - ${price}$`);
//         break;

//     default:
//         console.log('Токої кількості зірок немає');
//         break;
// }

/*
 * Напиши скрипт вибору готеля по кількості зірок.
 * 1,2 - 20$, 3,4 - 30$, 5 - 120$
 */
// const stars = 1;
// let price;
// switch (stars) {
//     case 1: 
//     case 2:        
//         price = 20;
//         console.log(`Ціна готелю з ${stars} зірками - ${price}$`);
//         break;
//     case 3:
//     case 4:
//         price = 30;
//         console.log(`Ціна готелю з ${stars} зірками - ${price}$`);
//         break;
//     case 5:
//         price = 120;
//         console.log(`Ціна готелю з ${stars} зірками - ${price}$`);
//         break;

//     default:
//         console.log('Токої кількості зірок немає');
//         break;
// }

/*
 * Напиши скрипт вибору опції доставки товару.
 * Опція зберігається в змінній option: 1 - самовивоз, 2 - кур"єр, 3 - пошта
 *
 * В змінну message записати повідомлення в залежності від опції.
 * - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
 * - 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
 * - 'Посилка буде відправлена сьогодні'
 * - 'Вам передзвонит менеджер'
 */

// 1 створюємо змінні
const option = 5;
let message = '';

// 2. робимо світч
// 3. перевіряємо на рівність опцію і виводимо повідоилення
switch (option) {
    case 1:      
        message = 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
        console.log(message);
        break;
    case 2:
        message = 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
        console.log(message);
        break;
    case 3:
        message = 'Посилка буде відправлена сьогодні';
        console.log(message);
        break;
// 4. дефолтне повідомлення
    default:
        message = 'Вам передзвонит менеджер';
        console.log(message);
        break;
}


