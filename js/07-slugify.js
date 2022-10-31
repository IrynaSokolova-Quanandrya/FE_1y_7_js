/*
 * Напиши функцию slugify(string) яка отримує рядок і повертає URL-slug
 * Заголовок статті складається тільки з букв та пропусків
 */

const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLocaleLowerCase();
// console.log(normalizedTitle);

// const arrTitle = normalizedTitle.split(' ');
// console.log(arrTitle);

// const slugTitle = arrTitle.join('-')
// console.log(slugTitle);

const slugTitle = title.toLocaleLowerCase().split(' ').join('-');
console.log(slugTitle);
  
  console.log(slugify('Top 10 benefits of React framework'));
  console.log(slugify('Azure Static Web Apps are Awesome'));
  console.log(slugify('Technical writing tips for non-native English speakers'));