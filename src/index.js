import axios from 'axios';

const API_KEY = '098c0a06f6f788991ea9bd1b1a28f1b9';
const URL ='https://api.themoviedb.org'

axios.get(`${URL}/3/search/movie?api_key=${API_KEY}&query=Jack+Reacher`)
.then(console.log)