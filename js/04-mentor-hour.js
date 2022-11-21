// 1. Створи пустий об'єкт user. Додай в об'єкт властивість userName зі своїм іменем. 
// Додай в об'єкт властивість age зі своїм віком. Додай в об'єкт метод showUserName, 
// який виводить твоє ім'я. Додай в об'єкт метод updateAge, який додає під час виклику 
// до твоєго віку 1. 

// const user = {
//     userName: "Ira",
//     age: 33,
//     showUserName(){
//         console.log(this.userName);
//     },
//     updateAge(){},
// };

// user.showUserName()

// 3. Створіть об'єкт calculator з трьома методами:

// read(a, b) - запитує у користувача два числових значення і зберігає їх як властивості об'єкта.
// sum() - повертає суму збережених значень.
// mult() - повертає добуток збережених значень.

// const calculator = {
//     read(a, b){
//         this.num1 = a;
//         this.num2 = b;
//     }
// }
// calculator.read(2, 5)


// Повторюємо, що таке деструктуризація

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

  console.log(
    profile.name,
    profile.tag,
    profile.location
  );

  const { name, tag, location, stats: {followers, views, likes} } = profile;
    
//   const { followers, views, likes } = stats;

  console.log(name, tag, location, followers, views, likes);

//   console.log(followers, views, likes);