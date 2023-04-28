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

getMovieById(5);
getMovieById(10);
getMovieById(2);