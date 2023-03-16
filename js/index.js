// // const buttonEl = document.querySelector();
// // const imgListRef = document.querySelector();

// // buttonEl.classList

// // const fnA = function (params) {
    
// // }

// // const refs = {
// //     button: document.querySelector(),
// //     imgList: document.querySelector(),
// //     fnA(params) {
    
// //     }
// // }

// // refs.button.classList

// // // Функції

// // // const fnB = function () {
// // //     fetch('http...всі покемони')
// // // }

// // // const fnB = function (name) {
// // //   return  fetch(`http...${name}`)
// // // }
// // const fnB = name => fetch(`http...${name}`);
// // fnB();


// // fnB('pikachu');
// // fnB('bulbazaur')



// // fnB(15);
// // fnB('Hello');
// // fnB([]);
// // fnB({});

// // const fnC = function (callback) {
// //     const res = 5+5
// //     callback(res)
// //     console.log(callback);
// // }

// // fnC(()=>{});
// // fnC(function(){});
// // fnC(sum);

// // function sum(result) {
// //     console.log(result);
// // }

// // FETCH

// const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3ce63eea477043d7a470d2b21dc5ab4b'
// console.log(fetch(url));

// fetch(url)
// .then(response=>response.json())
// .then((data)=>{return data.articles})
// .then((articles)=>{console.log(articles);})

// number.map(()=>{})
// const doubledNumbers = numbers.map((number) => {return number * 2})


const user = {
    name: 'Oleg',
    age: 15,
    city: 'Kyiv'
}

const {name} = user;

console.log(name);

function fnA({name, age, city}) {
    console.log(name);
    console.log(age);
    console.log(city);
    return 5;
}

const res = fnA(user)
console.log(res);