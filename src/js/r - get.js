fetch(' http://localhost:3000/movies')
.then(response => response.json())
.then(console.log)
