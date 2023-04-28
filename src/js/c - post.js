const BASE_URL = 'http://localhost:3000';


const newMovie = {
  title: "NODEJS",
  director: "Me",
  genres: [
    "Drama"
  ],
  rating: 10
}
function addNewMovie(newMovie) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newMovie)
    }
const url = `${BASE_URL}/movies`;

   return fetch(url, options)
    .then(res=>res.json())
    .then(console.log)
}

addNewMovie(newMovie)
  // addNewMovie({
  //   title: "HTML",
  //   director: "Me",
  //   genres: [
  //     "dev"
  //   ],
  //   rating: 4
  // })












// function addBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   return fetch(`${BASE_URL}/books`, options).then(res => res.json());
// }



