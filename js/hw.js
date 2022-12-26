// const images = [
//     {
//       url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'White and Black Long Fur Cat',
//     },
//     {
//       url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//     },
//     {
//       url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Group of Horses Running',
//     },
//   ];
  
//   console.log('hello');

//  const items = images.map(image => {
//         `<li><img src="${image.url}" alt="${image.alt}"></li>`
//       })
// const list = [...items].join('')      
// //   let list = ``;
// //   images.forEach(image => {
// //     list += `<li><img src="${image.url}" alt="${image.alt}"></li>`
// //   });
//   const listEl = document.querySelector('#gallery');
//   listEl.insertAdjacentHTML('afterbegin',list); 
  

const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

const getUserNames = users => {
  const userNames = users.map(function (user) {
    return user.name;
  }
  );

  return userNames
};

// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

const getUsersWithEyeColor = (users, color) => {
  const usersWithEyeColor = users.filter(function (user) {
    return user.eyeColor === color;
  })

  return usersWithEyeColor
};

// console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

const getUsersWithGender = (users, gender) => {
 return users.filter(user=>user.gender === gender)
  .map(user=>user.name);

};

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

const getInactiveUsers = users => {
  const inactiveUsers = users.filter(function (user) {
    return !user.isActive
  });

  return inactiveUsers
};

// console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]

const getUserWithEmail = (users, email) => {
  const userWithEmail = users.find(function (user) {
    return user.email === email;
  });

  return userWithEmail;
};

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}

const getUsersWithAge = (users, min, max) => {
  const usersWithAge = users.filter(function (user) {
   return min <= user.age && user.age <= max;
  })

  return usersWithAge
};

// console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]

const calculateTotalBalance = users => {
  let balance = 0;
 for (const user of users) {
    balance += user.balance;
  }

   return balance;
};

// console.log(calculateTotalBalance(users)); // 20916

const getUsersWithFriend = (users, friendName) => {
  const usersWithFriend = users.filter(function (user) {
    return user.friends.includes(friendName);
  });
  return usersWithFriend
};

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// const getNamesSortedByFriendsCount = users => {
// return  users.sort(function (user1, user2) {
//     user1.friends.length - user2.friends.length
//   }).map(function (user) {
//     return user.name
//   })
    
// };
const getNamesSortedByFriendsCount = users => {
  return  users.sort((user1, user2)=>user1.friends.length - user2.friends.length)
  .map(user=>user.name)
};

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross V

const getSortedUniqueSkills = users => {
  return users.reduce((acc, { skills }) => [...acc, ...skills],[])
    .filter((skill, index, arr) => arr.indexOf(skill) === index)
  .sort()
};

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// Артем Добровольский

// 7.2 знайти суму років скільки прожили всі вченні


function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip" ? true : false

 return canAccessContent;
}

// console.log(checkIfCanAccessContent("pro"))
// 2
// Відсортувати вчених по алфавіту

const arr = [
  { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
  { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
  { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
  { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
  { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
  { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },
  { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
  { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
  { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
  { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
  { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
  { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 }
];

// const newArr = arr;

// arr.sort((a, b) => a.name.localeCompare(b.name) && a.surname.localeCompare(b.surname))
// // console.log(arr)

// const name = arr
// .filter(sain=>sain.name[0] === sain.surname[0])
//     // .filter(arr => arr.name[0])
//     // .map(arr => arr.name)

//     console.log(name);

// 7.2 знайти суму років скільки прожили всі вченні
  //   arr.map(ages => dead-born).reduce(callback(acc, ages)){
  //     acc+=ages
  // };


  // ДЗ 10 ЗАДАЧА 4

 const counterContainer = document.querySelector('#counter')
 const decrementBtn = document.querySelector('[data-action="decrement"]')
 const incrementBtn = document.querySelector('[data-action="increment"]')
 const value = document.querySelector('#value')
 
 
 decrementBtn.addEventListener('click', decrement)
 incrementBtn.addEventListener('click', increment)

 let counterValue = 0;

 function increment() {
   value.textContent = counterValue += 1
 }

 function decrement() {
  counterValue -= 1
  value.textContent = counterValue
 }

// ДЗ 10 ЗАДАЧА 3 (insertAdjacentHTML())

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const link = document.createElement('a')
link.classList.add('link')
link.textContent = 'Посилання1'

counterContainer.appendChild(link);

counterContainer.insertAdjacentHTML('beforeend', `<a class="link">${images.url[0]}</a>`)

counterContainer.innerHTML = ''
