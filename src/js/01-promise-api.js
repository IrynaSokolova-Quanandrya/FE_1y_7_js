/*
 * Створення промісу
 *  - Клас Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

// const user = {
//     name: 'Poly',
//     age: 15,
// }
// const promise = new Promise((resolve, rejected)=>{
//     const isFullfild = Math.random() > 0.3;
    
//   setTimeout(()=>{
//     if(isFullfild){
//       resolve(user);
//     } else{
//         rejected('((((Виконано з помилкою')
//     }
//   },
//    2000)

// });

// let isActive;

// console.log(promise);

// .then(result => {
//     text.textContent = result.name
    
// })

// .catch(error => {
//     if(error){
//         isActive = false;
//     }
// })








function onFulfilled(result) {
  console.log('onFulfilled -> onFulfilled');
  console.log(`✅ ${result}`);
}

function onRejected(error) {
  console.log('onRejected -> onRejected');
  console.log(`❌ ${error}`);
}








// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Проміс виконався успішно, з результатом (виповнився, fulfilled)');
//     }

//     reject('Проміс виконався з помилкою (відхилений, rejected)');
//   }, 1000);
// });

// promise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//   console.log('onFulfilled -> onFulfilled');
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log('onRejected -> onRejected');
//   console.log(`❌ ${error}`);
// }

/*
 * Ланцюжки Промісів (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

// promise
//   .then(onFulfilled)
//   .then(x => {
//     console.log(x);

//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log('Я буду виконаний в любому випадку'));
