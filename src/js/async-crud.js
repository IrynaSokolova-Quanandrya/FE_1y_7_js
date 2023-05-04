const BASE_URL = 'http://localhost:3000';

function getMovies() {
  fetch(`${BASE_URL}/students`)
  .then(response => response.json())
  .then(console.log)
}

function getMovieById(movieId) {
  fetch(`${BASE_URL}/movies/${movieId}`)
  .then(response => response.json())
  .then(console.log)
}

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

const update = {
  "title": "Node",
  "director": "Me"
}
function updateMovieById(movieId, update) {
  const options = {
      method: 'PATCH',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(update)
  }
const url = `${BASE_URL}/movies/${movieId}`;

 return fetch(url, options)
  .then(res=>res.json())
  .then(console.log)
}


function deleteMovieById(movieId){
  fetch(`${BASE_URL}/movies/${movieId}`, {method: 'DELETE'})
  .then(res=>res.json())
  .then(console.log)
}

deleteMovieById(16)
