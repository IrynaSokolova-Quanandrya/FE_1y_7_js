const BASE_URL = 'http://localhost:3000';

function deleteMovieById(movieId){
  fetch(`${BASE_URL}/movies/${movieId}`, {method: 'DELETE'})
  .then(res=>res.json())
  .then(console.log)
}

deleteMovieById(16)
