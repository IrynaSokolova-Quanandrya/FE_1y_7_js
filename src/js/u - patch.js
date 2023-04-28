const BASE_URL = 'http://localhost:3000';

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